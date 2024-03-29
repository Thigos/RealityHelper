# RealityHelper
Um espaço para compartilhar sua realidade, seu jeito de viver e ver o mundo.

# Análise
Neste projeto, são utilizados diversos sistemas de análise léxica para separar palavras relevantes e classificar sentimentos (positivos, neutros e negativos) no texto cadastrado.

Uma palavra é considerada relevante se atender aos seguintes requisitos:
### Deve Ser:
```
ADJ: ADJETIVO

V: VERBO

PCP: PARTICÍPIO
```

### Não pode suceder a:
```
PROADJ: PRONOME ADJETIVO

NPROP: NOME PRÓPRIO

PROSUB: PRONOME SUBSTANTIVO

PROPESS: PRONOME PESSOAL

PRO-KS: PRONOME CONECTIVO SUBORDINATIVO

ADV-KS-REL: ADVÉRBIO RELATIVO SUBORDINATIVO
```

### Você pode consultar o Manual [Mac-Morpho](http://nilc.icmc.usp.br/macmorpho/): [Link do Manual](http://nilc.icmc.usp.br/macmorpho/macmorpho-manual.pdf) para obter mais informações sobre o sistema de análise léxica.

# Banco de Dados

![Screenshot from 2023-06-13 10-39-37](https://github.com/Thigos/RealityHelper/assets/67590378/51756792-524f-4996-8f02-bba502c80dc2)

# Referências
- NLTK: Bird, S., Klein, E., & Loper, E. (2009). Natural language processing with Python: analyzing text with the natural language toolkit. " O&#x27;Reilly Media, Inc." - [Link para o site oficial](https://www.nltk.org/)

- inoueMashuu. POS-tagger-portuguese-nltk. Available: [Link para o repositório do Github](https://github.com/inoueMashuu/POS-tagger-portuguese-nltk)

- Gilbert, C. (2014). Vader: A parsimonious rule-based model for sentiment analysis of social media text. In Eighth International Conference on Weblogs and Social Media (ICWSM-14). Available at (20/04/16) - [Link para o artigo](http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf)

- Almeida, R.. (2018). LeIA - Léxico para Inferência Adaptada. - [Link para o repositório no GitHub](https://github.com/rafjaa/LeIA)
