library(tidyverse)
library(data.table)

# eleitores
eleitores_2022 <- fread("resultados/_quantidade_de_eleitores_por_município-região_-_região-uf-município.csv", encoding="Latin-1")

tidy_eleitores <- eleitores_2022 %>%
  janitor::clean_names() %>%
  select(c(2, 3)) %>%
  rename("qtd_elei_2022" = quantidade,
         "sg_uf" = abrangencia) %>%
  filter(sg_uf != "") %>%
  mutate(qtd_elei_2022 = as.integer(str_remove_all(qtd_elei_2022, "\\."))) %>%
  summarise(qtd_elei_2022 = sum(qtd_elei_2022)) %>%
  mutate(sg_uf = "BR")

# resultados
resultados_all <- readRDS("resultados/resultados_all.rds")

resultado_BR <- resultados_all %>%
  group_by(ANO_ELEICAO, NR_TURNO, NM_URNA_CANDIDATO, SG_PARTIDO, DS_SIT_TOT_TURNO) %>%
  summarise(votos_cand = sum(QT_VOTOS_NOMINAIS)) 

resultado_total <- resultado_BR %>%
  group_by(ANO_ELEICAO, NR_TURNO) %>%
  summarise(votos_turno = sum(votos_cand)) 

resultado_BR_final <- resultado_BR %>%
  left_join(resultado_total, by = c("ANO_ELEICAO", "NR_TURNO")) %>%
  mutate(perc_cand = round(votos_cand / votos_turno, 4) * 100) %>%
  filter(ANO_ELEICAO %in% c(2002, 2006, 2010, 2014) & SG_PARTIDO %in% c("PT", "PSDB") |
           ANO_ELEICAO == 2018 & SG_PARTIDO %in% c("PT", "PSL")) %>%
  janitor::clean_names() %>%
  mutate(cand_id = ifelse(sg_partido == "PT", 1, 2))

pt_resultado_BR <- resultado_BR_final %>%
  filter(cand_id == 1) %>%
  rename(candidato_1 = nm_urna_candidato,
         partido_1 = sg_partido,
         votos_1 = votos_cand,
         perc_1 = perc_cand,
         situacao_1 = ds_sit_tot_turno) %>%
  select(-cand_id) %>%
  rename(votos_total = votos_turno)
  
op_resultado_BR <- resultado_BR_final %>%
  filter(cand_id == 2) %>%
  rename(candidato_2 = nm_urna_candidato,
         partido_2 = sg_partido,
         votos_2 = votos_cand,
         perc_2 = perc_cand,
         situacao_2 = ds_sit_tot_turno) %>%
  select(-c(votos_turno, cand_id)) 

BR_final <- pt_resultado_BR %>%
  left_join(op_resultado_BR, by = c("ano_eleicao", "nr_turno")) %>%
  mutate(sg_uf = "BR",
         nm_uf = "Brasil",
         regiao = "-",
         codigo_uf = "-",
         cand_partido_1 = paste0(candidato_1, " (", partido_1, ")"),
         cand_partido_2 = paste0(candidato_2, " (", partido_2, ")"),
         nr_turno_str = paste0(nr_turno, "º turno"),
         diferenca_pp = perc_1 - perc_2,
         diferenca_absoluta = votos_1 - votos_2) %>%
  relocate(nr_turno_str, .after = "nr_turno") %>%
  relocate(codigo_uf, .after = "nr_turno_str") %>%
  relocate(c(sg_uf, nm_uf, regiao, cand_partido_1, cand_partido_2), .after = "codigo_uf") %>%
  relocate(candidato_2, .after = "candidato_1") %>%
  relocate(partido_2, .after = "partido_1") %>%
  relocate(votos_2, .after = "votos_1") %>%
  left_join(tidy_eleitores, by = "sg_uf") %>%
  mutate(qtd_elei_2022_str = paste0("O BR tem ", qtd_elei_2022, " eleitores em 2022"))
  
write.csv(BR_final, "BR_final.csv", row.names = F)  
