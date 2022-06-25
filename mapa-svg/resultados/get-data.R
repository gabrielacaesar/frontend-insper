library(tidyverse)
library(data.table)

resultado_2018 <- fread("~/Downloads/resultados/votacao_candidato_munzona_2018/votacao_candidato_munzona_2018_BR.csv",
                        encoding = "Latin-1",
                        select = c("ANO_ELEICAO", "NR_TURNO", "SG_UF", "DS_CARGO", "NM_URNA_CANDIDATO", "SG_PARTIDO", "DS_SIT_TOT_TURNO", "QT_VOTOS_NOMINAIS"))

resultado_2014 <- fread("~/Downloads/resultados/votacao_candidato_munzona_2014/votacao_candidato_munzona_2014_BR.csv",
                        encoding = "Latin-1",
                        select = c("ANO_ELEICAO", "NR_TURNO", "SG_UF", "DS_CARGO", "NM_URNA_CANDIDATO", "SG_PARTIDO", "DS_SIT_TOT_TURNO", "QT_VOTOS_NOMINAIS"))

resultado_2010 <- fread("~/Downloads/resultados/votacao_candidato_munzona_2010/votacao_candidato_munzona_2010_BR.csv",
                        encoding = "Latin-1",
                        select = c("ANO_ELEICAO", "NR_TURNO", "SG_UF", "DS_CARGO", "NM_URNA_CANDIDATO", "SG_PARTIDO", "DS_SIT_TOT_TURNO", "QT_VOTOS_NOMINAIS"))

resultado_2006 <- fread("~/Downloads/resultados/votacao_candidato_munzona_2006/votacao_candidato_munzona_2006_BR.txt",
                        encoding = "Latin-1",
                        select = c("V3", "V4", "V6", "V16", "V15", "V24", "V22", "V29"),
                        col.names = c("ANO_ELEICAO", "NR_TURNO", "SG_UF", "DS_CARGO", 
                                   "NM_URNA_CANDIDATO", "SG_PARTIDO", "DS_SIT_TOT_TURNO", "QT_VOTOS_NOMINAIS"))

resultado_2002 <- fread("~/Downloads/resultados/votacao_candidato_munzona_2002/votacao_candidato_munzona_2002_BR.txt",
                        encoding = "Latin-1",
                        select = c("V3", "V4", "V6", "V16", "V15", "V24", "V22", "V29"),
                        col.names = c("ANO_ELEICAO", "NR_TURNO", "SG_UF", "DS_CARGO", 
                                      "NM_URNA_CANDIDATO", "SG_PARTIDO", "DS_SIT_TOT_TURNO", "QT_VOTOS_NOMINAIS"))

resultados <- bind_rows(resultado_2018, resultado_2014, resultado_2010, resultado_2006, resultado_2002)

write_rds(resultados, "resultados_all.rds")

votos_turno <- resultados %>%
  group_by(ANO_ELEICAO, NR_TURNO, SG_UF) %>%
  summarise(votos_turno = sum(QT_VOTOS_NOMINAIS))

tidy_resultados <- resultados %>%
  group_by(ANO_ELEICAO, NR_TURNO, SG_UF, NM_URNA_CANDIDATO, SG_PARTIDO, DS_SIT_TOT_TURNO) %>%
  summarise(votos_cand = sum(QT_VOTOS_NOMINAIS)) %>%
  left_join(votos_turno, by = c("ANO_ELEICAO", "NR_TURNO", "SG_UF")) %>%
  mutate(perc_cand = round(votos_cand / votos_turno, 4) * 100) %>%
  filter(ANO_ELEICAO %in% c(2002, 2006, 2010, 2014) & SG_PARTIDO %in% c("PT", "PSDB") |
         ANO_ELEICAO == 2018 & SG_PARTIDO %in% c("PT", "PSL"))
  
write_rds(tidy_resultados, "tidy_resultados.rds")

# add column w position (1 vs 2)
# add eleitores
  
