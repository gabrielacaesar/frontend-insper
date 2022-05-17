# pacotes
library(tidyverse)
library(data.table)

# https://dadosabertos.tse.jus.br/dataset/resultados-2018
# arquivo com resultado: Presidente - Votação por seção eleitoral - 2018
selected_columns <- c("NR_TURNO", "ANO_ELEICAO", "SG_UF",
                      "CD_MUNICIPIO", "NM_MUNICIPIO", "DS_CARGO", "NM_VOTAVEL", "QT_VOTOS")

dados <- fread("~/Downloads/votacao_secao_2018_BR/votacao_secao_2018_BR.csv",
               encoding = "Latin-1",
               select = selected_columns)

# eleitores por municipio
# eleitorado: https://www.tse.jus.br/eleicoes/estatisticas/estatisticas-eleitorais
eleitores <- fread("~/Downloads/eleitorado_municipio_2018.csv",
                   encoding = "Latin-1")

eleitores_sp <- eleitores %>%
  filter(SG_UF == "SP") %>%
  select(CD_MUNICIPIO, QTD_ELEITORES)

# analise / 1 turno de 2018
sp_dados <- dados %>%
  filter(SG_UF == "SP" & NR_TURNO == 1) %>%
  filter(!NM_VOTAVEL %in% c("VOTO BRANCO", "VOTO NULO")) %>%
  group_by(CD_MUNICIPIO, NM_MUNICIPIO, NM_VOTAVEL) %>%
  summarise(total_votos = sum(QT_VOTOS)) %>%
  group_by(NM_MUNICIPIO) %>%
  mutate(perc = round(total_votos / sum(total_votos), 4) * 100) %>%
  left_join(eleitores_sp, by = "CD_MUNICIPIO") %>%
  select(-CD_MUNICIPIO) %>%
  mutate(faixa_eleitores = case_when(QTD_ELEITORES >= 200000 ~ "Acima de 200 mil",
                                     TRUE ~ "Abaixo de 200 mil")) %>%
  write_rds(., "sp_dados.rds")
  
# cidade pro bolsonaro - geral (inclui municipios pequenos)
sp_dados %>% 
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(desc(perc))


sp_dados %>% 
  filter(NM_MUNICIPIO %in% c("SALTINHO", "BIRIGUI",
                             "LINS", "REGINÓPOLIS", 
                             "COROADOS", "CONCHAL",
                             "LIMEIRA", "ITAJOBI",
                             "ADAMANTINA", "BILAC")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `JAIR MESSIAS BOLSONARO` - `FERNANDO HADDAD`) %>%
  arrange(desc(`JAIR MESSIAS BOLSONARO`)) %>%
  write.csv(., "sp-dados_1turno_geral_pro-Bolsonaro.csv", row.names = F)


# cidade pro bolsonaro - 200 mil eleitores
sp_dados %>% 
  filter(faixa_eleitores == "Acima de 200 mil" &
    NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(desc(perc))


sp_dados %>% 
  filter(NM_MUNICIPIO %in% c("LIMEIRA", "PIRACICABA",
                             "SÃO JOSÉ DO RIO PRETO", "TAUBATÉ", 
                             "JUNDIAÍ", "FRANCA",
                             "SÃO JOSÉ DOS CAMPOS", "PRAIA GRANDE",
                             "SOROCABA", "BAURU")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `JAIR MESSIAS BOLSONARO` - `FERNANDO HADDAD`) %>%
  arrange(desc(`JAIR MESSIAS BOLSONARO`)) %>%
  write.csv(., "sp-dados_1turno_200k_pro-Bolsonaro.csv", row.names = F)


# cidade anti bolsonaro - geral (inclui municipios pequenos)
sp_dados %>% 
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(perc)

sp_dados %>% 
  filter(NM_MUNICIPIO %in% c("ITAPURA", "ITAOCA", "BARRA DO CHAPÉU",
                             "EUCLIDES DA CUNHA PAULISTA",
                             "AREIAS", "RIBEIRÃO BRANCO", "SANDOVALINA", 
                             "RIBEIRA", "IPORANGA",
                             "ITAPIRAPUÃ PAULISTA")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `FERNANDO HADDAD` - `JAIR MESSIAS BOLSONARO`) %>%
  arrange(desc(`FERNANDO HADDAD`)) %>%
  write.csv(., "sp-dados_1turno_geral_anti-Bolsonaro.csv", row.names = F)

# cidade anti bolsonaro - 200 mil eleitores
sp_dados %>% 
  filter(faixa_eleitores == "Acima de 200 mil" &
           NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(perc)

sp_dados %>% 
  filter(NM_MUNICIPIO %in% c("TABOÃO DA SERRA", "DIADEMA", "ITAQUAQUECETUBA",
                             "SÃO PAULO",
                             "CARAPICUÍBA", "SÃO BERNARDO DO CAMPO", "OSASCO", 
                             "BARUERI", "MAUÁ")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `FERNANDO HADDAD` - `JAIR MESSIAS BOLSONARO`) %>%
  arrange(desc(`FERNANDO HADDAD`)) %>%
  write.csv(., "sp-dados_1turno_200k_anti-Bolsonaro.csv", row.names = F)


###########
# analise / 2 turno de 2018
sp_dados_2turno <- dados %>%
  filter(SG_UF == "SP" & NR_TURNO == 2) %>%
  filter(!NM_VOTAVEL %in% c("VOTO BRANCO", "VOTO NULO")) %>%
  group_by(CD_MUNICIPIO, NM_MUNICIPIO, NM_VOTAVEL) %>%
  summarise(total_votos = sum(QT_VOTOS)) %>%
  group_by(NM_MUNICIPIO) %>%
  mutate(perc = round(total_votos / sum(total_votos), 4) * 100) %>%
  left_join(eleitores_sp, by = "CD_MUNICIPIO") %>%
  select(-CD_MUNICIPIO) %>%
  mutate(faixa_eleitores = case_when(QTD_ELEITORES >= 200000 ~ "Acima de 200 mil",
                                     TRUE ~ "Abaixo de 200 mil")) %>%
  write_rds(., "sp_dados_2turno.rds")

# cidade pro bolsonaro - geral (inclui municipios pequenos)
sp_dados_2turno %>% 
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(desc(perc))

sp_dados_2turno %>% 
  filter(NM_MUNICIPIO %in% c("SALTINHO", "MARAPOAMA",
                             "SOCORRO", "ITAJOBI", 
                             "CERQUILHO", "BASTOS",
                             "LINS", "GABRIEL MONTEIRO",
                             "LENÇÓIS PAULISTA", "BIRIGUI")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `JAIR MESSIAS BOLSONARO` - `FERNANDO HADDAD`) %>%
  arrange(desc(`JAIR MESSIAS BOLSONARO`)) %>%
  write.csv(., "sp-dados_2turno_geral_pro-Bolsonaro.csv", row.names = F)

# cidade pro bolsonaro - 200 mil eleitores
sp_dados_2turno %>% 
  filter(faixa_eleitores == "Acima de 200 mil" &
           NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(desc(perc))

sp_dados_2turno %>% 
  filter(NM_MUNICIPIO %in% c("LIMEIRA", "TAUBATÉ",
                             "PIRACICABA ", "SÃO JOSÉ DO RIO PRETO", 
                             "JUNDIAÍ", "SÃO JOSÉ DOS CAMPOS",
                             "FRANCA", "SOROCABA",
                             "BAURU", "PRAIA GRANDE")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `JAIR MESSIAS BOLSONARO` - `FERNANDO HADDAD`) %>%
  arrange(desc(`JAIR MESSIAS BOLSONARO`)) %>%
  write.csv(., "sp-dados_2turno_200k_pro-Bolsonaro.csv", row.names = F)

# cidade anti bolsonaro - geral (inclui municipios pequenos)
sp_dados_2turno %>% 
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(perc) 

sp_dados_2turno %>% 
  filter(NM_MUNICIPIO %in% c("ITAPURA", "EUCLIDES DA CUNHA PAULISTA",
                             "IPORANGA", "SANDOVALINA", 
                             "DOLCINÓPOLIS", "AREIAS",
                             "MIRANTE DO PARANAPANEMA", "BARRA DO CHAPÉU",
                             "CAIUÁ", "IARAS")) %>%
  filter(NM_VOTAVEL == "JAIR MESSIAS BOLSONARO" |
           NM_VOTAVEL == "FERNANDO HADDAD") %>%
  select(NM_MUNICIPIO, NM_VOTAVEL, perc, QTD_ELEITORES) %>%
  pivot_wider(names_from = "NM_VOTAVEL", values_from = "perc") %>%
  mutate(diferenca_pp = `FERNANDO HADDAD` - `JAIR MESSIAS BOLSONARO`) %>%
  arrange(desc(`FERNANDO HADDAD`)) %>%
  write.csv(., "sp-dados_2turno_geral_anti-Bolsonaro.csv", row.names = F)


# cidade anti bolsonaro - 200 mil eleitores
sp_dados_2turno %>%
  filter(faixa_eleitores == "Acima de 200 mil" &
           NM_VOTAVEL == "JAIR MESSIAS BOLSONARO") %>%
  arrange(perc)
