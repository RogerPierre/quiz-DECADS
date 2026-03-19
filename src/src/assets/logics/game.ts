
type Perfil = {
  "Carimbo de data/hora": string;
  "Nome completo:": string;
  "Data de nascimento:": string;
  "Idade:": number;
  "Qual cidade nasceu?": string;
  "Meu apelido é:": string;
  "Tenho a mania de :": string;
  "Cor do seu cabelo:": string;
  "Estilo de musica favorita:": string;
  "Eu sempre falo isso:": string;
  "Um talento oculto:": string;
  "Animal favorito:": string;
  "Tem irmãos?": string;
  "Chega atrasado(a)?": string;
  "Adicione uma foto sua que mais gosta:": string;
  "Pra quem não conseguiu por a tada de nascimento na questão acima.": string;
};

const dadosPerguntas: Perfil[] = [
    {
        "Carimbo de data/hora": "05/07/2025 12:59:46",
        "Nome completo:": "Raira Reis Silva",
        "Data de nascimento:": "28/04/2000",
        "Idade:": 25,
        "Qual cidade nasceu?": "Piracuruca",
        "Meu apelido é:": "Rai",
        "Tenho a mania de :": "Falar demais",
        "Cor do seu cabelo:": "Castanho escuro",
        "Estilo de musica favorita:": "Kpop",
        "Eu sempre falo isso:": "Não entendi nada desse conteúdo kkk",
        "Um talento oculto:": "Sei desenhar e arranho na kalimba",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1UhpBrfUS3KnEfT4RVZzsLuEnnzJacq6o",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 13:11:00",
        "Nome completo:": "Eric Vinícius dos Santos Oliveira",
        "Data de nascimento:": "15/03/2007",
        "Idade:": 18,
        "Qual cidade nasceu?": "Piriripi",
        "Meu apelido é:": "Eric",
        "Tenho a mania de :": "Mexer muito os pés",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Funk",
        "Eu sempre falo isso:": "Entendi",
        "Um talento oculto:": "Sei interpretar vários tipos de linguagem corporal",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=16Or77AyrRfVoK0CZKbJhkGpvmiLZSQ1T",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 13:35:19",
        "Nome completo:": "Mateus de Araujo",
        "Data de nascimento:": "10/05/2006",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piracuruca",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Sem manias",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Qualquer estilo de música que seja agradável, *não funk*",
        "Eu sempre falo isso:": "Não tenho um bordão",
        "Um talento oculto:": "Consigo passar 3 dias sem dormir sem se sentir cansado",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 13:48:56",
        "Nome completo:": "Ana Rosa Pereira Chaves",
        "Data de nascimento:": "21/08/2006",
        "Idade:": 18,
        "Qual cidade nasceu?": "Barras",
        "Meu apelido é:": "Ana",
        "Tenho a mania de :": "Girar objetos quando estou distraída.",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Rock Clássico",
        "Eu sempre falo isso:": "É, né, fazer o quê?",
        "Um talento oculto:": "Memória específica",
        "Animal favorito:": "Gato e Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 13:58:15",
        "Nome completo:": "Josiane Amorim Mendes",
        "Data de nascimento:": "25/02/2006",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piracuruca",
        "Meu apelido é:": "Josi",
        "Tenho a mania de :": "Perguntar mesmo entendendo o que a pessoa falou",
        "Cor do seu cabelo:": "Castanho escuro",
        "Estilo de musica favorita:": "MPB",
        "Eu sempre falo isso:": "É tipo isso",
        "Um talento oculto:": "Desenhar",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1dmGJ-7qzwXuM9JbQXk2oDZQXkD_cOk6h",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 14:38:08",
        "Nome completo:": "Roger Pierre Reis Silva",
        "Data de nascimento:": "18/10/2005",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piracuruca",
        "Meu apelido é:": "Pierre",
        "Tenho a mania de :": "Caminhar de um lado para outro para pensar",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Não tenho uma preferida, depende da musica e não do estilo.",
        "Eu sempre falo isso:": "Depende",
        "Um talento oculto:": "Corrida e/ou caminhada",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 14:44:30",
        "Nome completo:": "Antonio Carlos Gomes",
        "Data de nascimento:": "31/10/2006",
        "Idade:": 18,
        "Qual cidade nasceu?": "Batalha",
        "Meu apelido é:": "Carlin",
        "Tenho a mania de :": "Sem manias, que saiba",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Forró",
        "Eu sempre falo isso:": "Não tenho bordão",
        "Um talento oculto:": "Não tenho",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 16:09:53",
        "Nome completo:": "Estevam Gabriel Silva de Sousa",
        "Data de nascimento:": "Prefiro não comentar",
        "Idade:": 19,
        "Qual cidade nasceu?": "Barras",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Não tenho muito isso",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Racionais, Felipe ret",
        "Eu sempre falo isso:": "Quem perde são eles\", uma forma de dizer que não ligo pra quem gosta ou não de mim",
        "Um talento oculto:": "Acho que não tenho, meu talentos todos são vistos kkkkk",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1upVajpXrPEyp7fmAZEcnyR5e0szVHcDv",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "05/07/2025 21:46:58",
        "Nome completo:": "Maria Clara Almeida Martins",
        "Data de nascimento:": "31/12/2006",
        "Idade:": 18,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Clarinha/Martins",
        "Tenho a mania de :": "Mexer na sobrancelha",
        "Cor do seu cabelo:": "Castanho escuro",
        "Estilo de musica favorita:": "Forró/Hip Hop",
        "Eu sempre falo isso:": "Boy\", \"vai dar certo",
        "Um talento oculto:": "Não tenho nada em mente",
        "Animal favorito:": "Cavalo",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "07/07/2025 10:37:17",
        "Nome completo:": "Railson Araújo",
        "Data de nascimento:": "Prefiro não comentar",
        "Idade:": 18,
        "Qual cidade nasceu?": "Batalha",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Ficar no mundo da lua",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Sertanejo",
        "Eu sempre falo isso:": "Rapazzz",
        "Um talento oculto:": "Sem comentários",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "07/07/2025 11:17:42",
        "Nome completo:": "Cássio Sales Sampaio",
        "Data de nascimento:": "17/03/2000",
        "Idade:": 25,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Cassim",
        "Tenho a mania de :": "Roer unhas",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Rep",
        "Eu sempre falo isso:": "Maaano",
        "Um talento oculto:": "Fazer as pessoas rirem",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1jR50LYr5UJIyuu_bV8lM9eqzkyzMeh43",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "07/07/2025 11:54:18",
        "Nome completo:": "Mikaelle Raulino Barroso",
        "Data de nascimento:": "22/03/1981",
        "Idade:": 44,
        "Qual cidade nasceu?": "Teresina",
        "Meu apelido é:": "Mika",
        "Tenho a mania de :": "Enrolar um cacho do cabelo.",
        "Cor do seu cabelo:": "Castanho",
        "Estilo de musica favorita:": "Gosto de tudo, depende do humor ou do momento.",
        "Eu sempre falo isso:": "Boa tarde.  Minha gente…. Nammm. Ei negrada…",
        "Um talento oculto:": "Dirijo muito bem.",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1XXOXeHJ8ph10q2Rc6Rxpt5t2iAHOjhh8",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "07/07/2025 12:56:35",
        "Nome completo:": "Vitor Lopes da Silva",
        "Data de nascimento:": "21/06/2001",
        "Idade:": 24,
        "Qual cidade nasceu?": "Osasco",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Nenhuma Mania",
        "Cor do seu cabelo:": "Castanho",
        "Estilo de musica favorita:": "Não sei se tenho um estilo em específico",
        "Eu sempre falo isso:": "Não tenho isso",
        "Um talento oculto:": "Não me decidi no que colocar",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "NÃO",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "07/07/2025 13:20:29",
        "Nome completo:": "Avilon Sayru do Amaral Melo",
        "Data de nascimento:": "07/04/2006",
        "Idade:": 19,
        "Qual cidade nasceu?": "São Paulo",
        "Meu apelido é:": "Sem apelido (que eu saiba)",
        "Tenho a mania de :": "Dormir tarde",
        "Cor do seu cabelo:": "Castanho escuro",
        "Estilo de musica favorita:": "Rock e eurobeat (japonês)",
        "Eu sempre falo isso:": "Então...",
        "Um talento oculto:": "Consigo ler minha própria mente",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=10MVCQKrM8bptBU7cSSrZD09i1saEDEAN",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 12:45:13",
        "Nome completo:": "Rikelry Monteiro Souza",
        "Data de nascimento:": "02/11/2005",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Kelry",
        "Tenho a mania de :": "Procastinar",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Metal",
        "Eu sempre falo isso:": "Literalmente",
        "Um talento oculto:": "Hiper foco",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1DOA0GJOPFMP6MQ3bSqxw9--p7YYE2vVM",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 13:32:45",
        "Nome completo:": "Mailson da Silva Sousa",
        "Data de nascimento:": "22/08/2005",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Não tenho um apelido específico",
        "Tenho a mania de :": "Jogar muito",
        "Cor do seu cabelo:": "Castanho claro",
        "Estilo de musica favorita:": "Synthwave",
        "Eu sempre falo isso:": "Tá ligado",
        "Um talento oculto:": "Criar história de fantasia",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 13:34:47",
        "Nome completo:": "Deric Rodrigues de Sousa",
        "Data de nascimento:": "15/07/2006",
        "Idade:": 19,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Deric",
        "Tenho a mania de :": "Acho que nenhuma em específico",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Mpb",
        "Eu sempre falo isso:": "Sua passiva",
        "Um talento oculto:": "Acho que não sei o que dizer kk",
        "Animal favorito:": "Gosto de todos",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1hKq86RlW2C5_aosLRy3I_RtljSuZ3kAB",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 17:17:40",
        "Nome completo:": "Micael Cardoso Reis",
        "Data de nascimento:": "13/08/2006",
        "Idade:": 18,
        "Qual cidade nasceu?": "Goianésia do Pará",
        "Meu apelido é:": "Acho que não tenho apelido",
        "Tenho a mania de :": "Te chingar, mas não por mal",
        "Cor do seu cabelo:": "Acho que preto",
        "Estilo de musica favorita:": "Quase tudo menos música de Deus e Ana Castela e nem a do bobi goods e nem nenhuma desse estilo nem Zé Felipe",
        "Eu sempre falo isso:": "Não falo",
        "Um talento oculto:": "Desenhar, mas não é oculto",
        "Animal favorito:": "Ornitorrico",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=14m4uTul-UyJ1ndICtLxOVCE3m2uB0Yqq",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 18:02:47",
        "Nome completo:": "Gleyson da Silva Cavalcante",
        "Data de nascimento:": "12/07/2006",
        "Idade:": 18,
        "Qual cidade nasceu?": "São José dos Campos",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Nenhuma em específico",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Nenhuma que eu queira declarar",
        "Eu sempre falo isso:": "Nada que venha a mente",
        "Um talento oculto:": "Nada me vem a mente no momento",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "08/07/2025 18:42:38",
        "Nome completo:": "Iallen Gábio de Sousa Santos",
        "Data de nascimento:": "16/01/1991",
        "Idade:": 34,
        "Qual cidade nasceu?": "Teresina",
        "Meu apelido é:": "Iallen",
        "Tenho a mania de :": "Não lembro de nenhuma no momento.",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Blues",
        "Eu sempre falo isso:": "Capiche",
        "Um talento oculto:": "Jogador profissional de Mario Kart 64",
        "Animal favorito:": "Nenhum",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "09/07/2025 07:27:42",
        "Nome completo:": "Jeferson Do Nascimento Soares",
        "Data de nascimento:": "05/11/1995",
        "Idade:": 29,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Jef",
        "Tenho a mania de :": "Dormi muito",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Rock",
        "Eu sempre falo isso:": "Estou com sono",
        "Um talento oculto:": "Dormi em qualquer lugar",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1UXyQJY3yDUWZyoNCboqlfu34sobSJVJp",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "09/07/2025 14:20:42",
        "Nome completo:": "Rodrigo O'Brien de Carvalho",
        "Data de nascimento:": "Prefiro não comentar.",
        "Idade:": 48,
        "Qual cidade nasceu?": "Floriano",
        "Meu apelido é:": "Rodo",
        "Tenho a mania de :": "Limpeza",
        "Cor do seu cabelo:": "Castanho",
        "Estilo de musica favorita:": "Rock pop",
        "Eu sempre falo isso:": "Estudem!",
        "Um talento oculto:": "Música",
        "Animal favorito:": "Pássaro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "09/07/2025 15:59:49",
        "Nome completo:": "Davi Almeida Gomes",
        "Data de nascimento:": "24/04/2006",
        "Idade:": 19,
        "Qual cidade nasceu?": "Crateús",
        "Meu apelido é:": "Davi",
        "Tenho a mania de :": "Roer unha",
        "Cor do seu cabelo:": "Meu cabelo é Preto",
        "Estilo de musica favorita:": "Eclético",
        "Eu sempre falo isso:": "Sim/Não",
        "Um talento oculto:": "Raciocínio lógico",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "NÃO",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=12p037our09bmRd6kC7xCBpDZYVObGArF",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": "24/04/2006"
    },
    {
        "Carimbo de data/hora": "09/07/2025 18:01:41",
        "Nome completo:": "Ella Ferreira Bispo",
        "Data de nascimento:": "17/05/1984",
        "Idade:": 41,
        "Qual cidade nasceu?": "Teresina (PI)",
        "Meu apelido é:": "Não tenho",
        "Tenho a mania de :": "Manter as unhas das mãos sempre curtas",
        "Cor do seu cabelo:": "Castanho escuro",
        "Estilo de musica favorita:": "Rock",
        "Eu sempre falo isso:": "Estude!",
        "Um talento oculto:": "Bordado.",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1uk2u-4eDNDiHZ5kL99NlNQWJkubjwlnU",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "11/07/2025 07:56:54",
        "Nome completo:": "Gisele Dias plácido",
        "Data de nascimento:": "13/02/2007",
        "Idade:": 18,
        "Qual cidade nasceu?": "Teresina",
        "Meu apelido é:": "Gigi",
        "Tenho a mania de :": "Acho que não tenho nada pra comentar no momento",
        "Cor do seu cabelo:": "Castanho",
        "Estilo de musica favorita:": "Forró",
        "Eu sempre falo isso:": "Pois valha",
        "Um talento oculto:": "Fazer comidas deliciosas",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "11/07/2025 08:05:08",
        "Nome completo:": "Nilson Rodrigo Borges de Sousa",
        "Data de nascimento:": "Não quero colocar",
        "Idade:": 23,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Não sei",
        "Tenho a mania de :": "Estralar od dedos balançar as pernas",
        "Cor do seu cabelo:": "Castanho",
        "Estilo de musica favorita:": "Mpb, Indie, rock",
        "Eu sempre falo isso:": "O pior ainda vem",
        "Um talento oculto:": "Dançar",
        "Animal favorito:": "Gato",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "SIM",
        "Adicione uma foto sua que mais gosta:": "",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "14/07/2025 10:35:22",
        "Nome completo:": "Douglas Leone Cunha Pinheiro",
        "Data de nascimento:": "10/06/2005",
        "Idade:": 20,
        "Qual cidade nasceu?": "Sobral",
        "Meu apelido é:": "Nissin",
        "Tenho a mania de :": "Estalar os dedos",
        "Cor do seu cabelo:": "Preto",
        "Estilo de musica favorita:": "Eclético",
        "Eu sempre falo isso:": "Ai dento",
        "Um talento oculto:": "Tremer as pálpebras",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=1Xjo8bo2ly4VUzzDSffrtdiLsmG4yvV9-",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    },
    {
        "Carimbo de data/hora": "14/07/2025 14:01:05",
        "Nome completo:": "Héber Pinto Bringel Correia",
        "Data de nascimento:": "14/03/2007",
        "Idade:": 18,
        "Qual cidade nasceu?": "Piripiri",
        "Meu apelido é:": "Hebin",
        "Tenho a mania de :": "Batucar as coisas",
        "Cor do seu cabelo:": "Castanho/Preto",
        "Estilo de musica favorita:": "Blues, Jazz, e Rock",
        "Eu sempre falo isso:": "Rapaz...",
        "Um talento oculto:": "Pescar",
        "Animal favorito:": "Cachorro",
        "Tem irmãos?": "SIM",
        "Chega atrasado(a)?": "NÃO",
        "Adicione uma foto sua que mais gosta:": "https://drive.google.com/open?id=13SHGr_236lmQd4XeSWRMISnky6nW1GV_",
        "Pra quem não conseguiu por a tada de nascimento na questão acima.": ""
    }
];
const todasASperguntas = [
    { pergunta: 'O sobrenome do {{nome}} é:' },
    { pergunta: 'Qual o aniversário de {{nome}}:' },
    { pergunta: 'Qual a idade de {{nome}}:' },
    { pergunta: 'Em que cidade nasceu {{nome}}?' },
    { pergunta: '{{nome}} tem o apelido:' },
    { pergunta: '{{nome}} tem a mania de' },
    { pergunta: 'Qual a cor do cabelo de {{nome}}' },
    { pergunta: 'Qual o estilo de musica favorita de {{nome}}:' },
    { pergunta: 'O {{nome}} sempre fala isso:' },
    { pergunta: 'Um talento oculto de {{nome}}' },
    { pergunta: 'Animal favorito de {{nome}} é?' },
    { pergunta: 'O {{nome}} tem irmãos?' },
    { pergunta: 'O {{nome}} chega atrasado?' }
];
const camposEmOrdem = [
    "NomeCompleto",
    "DatadeNascimento",
    "Idade",
    "QualCidadeNasceu",
    "MeuApelidoE",
    "TenhoAManiade",
    "CorDoSeuCabelo",
    "EstiloDeMusicafavorita",
    "EuSempreFaloIsso",
    "UmTalentoOculto",
    "Animalfavorito",
    "TemIrmaos",
    "ChegaAtrasado"
];
const introducao = "Sistema de invasão iniciado...\n Local: Instituto Federal do Piauí (IFPI)\n Objetivo: Acesso completo ao sistema interno.\n Eu sou ..........................., uma mente brilhante nas artes da infiltração digital. Meu alvo? O coração tecnológico do IFPI.\n Mas antes de alcançar os servidores centrais, há um obstáculo inesperado: um sistema de segurança baseado em...\n curiosidades sobre os alunos da turma de ADS?\n Sim, isso mesmo. Alguém achou que seria divertido proteger dados confidenciais com um quiz. Cada pergunta é uma barreira, cada resposta certa \nme aproxima do núcleo. Não é sobre conhecer a turma — é sobre superar o desafio.\n Errar significa ser detectado.\n Acertar significa avançar. Se conseguir pontuação superior a 6... eu finalmente terei acesso a todos os mistérios e segredos tão bem guardados! Você está pronto para me ajudar a quebrar esse sistema? Então vamos decifrar essas curiosidades e abrir caminho até o objetivo final.\n A missão começa agora!!! ";
const creditos = "CRÉDITOS\n\n Desenvolvimento e Direção Criativa\n Roger Pierre Reis Silva \nFrancisco de Cássio Sales Sampaio \nRaira Reis Silva\n\n Testes e Feedback \nAmigos, família e corajosos jogadores beta. \nObrigado por cada bug encontrado e cada elogio sincero! \n\nAgradecimentos Especiais \n- Ao IFPI – Instituto Federal do Piauí, por ser berço de ideias, aprendizado e inspiração \n- Aos que acreditaram no projeto desde o início \n- E a você, jogador, por embarcar nessa jornada! \n\nFeito com paixão no Brasil 🇧🇷\n© 2025 Roger Pierre Reis Silva, Francisco de Cássio Sales Sampaio, Raira Reis Silva. Todos os direitos reservados.";

function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Elemento não encontrado: ${id}`);
    }
    return element as T;
}

// DOM elements (initialized once the DOM is ready)
let header2!: HTMLElement;
let marcadorDEvida!: HTMLElement;
let button1!: HTMLButtonElement;
let button2!: HTMLButtonElement;
let button3!: HTMLButtonElement;
let button4!: HTMLButtonElement;

let comecar = false;
let i = 0;
let pontuacao = 0;
let corretas: number[] = [];
let respostas: number[] = [];
let alternativas: boolean[] = [true, true, true, true];
let perfilEscolhido = 0;
//verificação de abas;
let introducaoAberta = false;
let credotosAberta = false;

export function initGame() {
    header2 = getElement("sub-titulo");
    marcadorDEvida = getElement("marcador-de-pontuação");
    button1 = getElement("primeira-opcao");
    button2 = getElement("segunda-opcao");
    button3 = getElement("terceira-opcao");
    button4 = getElement("quarta-opcao");

    button1.addEventListener("click", () => {
        if (comecar) {
            confirmarAlternativa(0);
            iniciar();
        }
        else {
            comecar = true;
            iniciar();
        }
    });

    button2.addEventListener("click", () => {
        if (comecar) {
            confirmarAlternativa(1);
            iniciar();
        }
        else {
            mostrarInstrucoes();
        }
    });

    button3.addEventListener("click", () => {
        if (comecar) {
            confirmarAlternativa(2);
            iniciar();
        }
        else {
            mostrarCreditos();
        }
    });

    button4.addEventListener("click", () => {
        if (comecar) {
            confirmarAlternativa(3);
            iniciar();
        }
        else {
            mostrarBarraDePesquisa(dadosPerguntas);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGame);
}
else {
    initGame();
}

function digitarTextoComCursor(texto: string, containerId: string, velocidade = 50) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = ""; // Limpa o conteúdo inicial
    const cursor = document.createElement("span");
    cursor.id = "typewriter-cursor";
    container.appendChild(cursor);
    let index = 0;
    const intervalo = setInterval(() => {
        if (index >= texto.length) {
            clearInterval(intervalo);
            return;
        }
        // Inserir o caractere antes do cursor
        const char = texto[index];
        cursor.before(document.createTextNode(char));
        index++;
    }, velocidade);
}
function embaralharArray<T>(array: T[]): T[] {
    const copia = [...array]; // Faz uma cópia para não modificar o original
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório entre 0 e i
        [copia[i], copia[j]] = [copia[j], copia[i]]; // Troca os elementos
    }
    return copia;
}
function acharAlternativaPeloCampo(campo: string, pessoa: number) {
    let perfil = dadosPerguntas[pessoa];
    if (!perfil) {
        return "Pessoa não encontrada";
    }
    if (campo == "NomeCompleto") {
        return String(extrairSobrenome(perfil["Nome completo:"]));
    }
    if (campo == "DatadeNascimento") {
        return String(perfil["Data de nascimento:"]);
    }
    if (campo == "Idade") {
        return String(perfil["Idade:"]);
    }
    if (campo == "QualCidadeNasceu") {
        return String(perfil["Qual cidade nasceu?"]);
    }
    if (campo == "MeuApelidoE") {
        return String(perfil["Meu apelido é:"]);
    }
    if (campo == "TenhoAManiade") {
        return String(perfil["Tenho a mania de :"]);
    }
    if (campo == "CorDoSeuCabelo") {
        return String(perfil["Cor do seu cabelo:"]);
    }
    if (campo == "EstiloDeMusicafavorita") {
        return String(perfil["Estilo de musica favorita:"]);
    }
    if (campo == "EuSempreFaloIsso") {
        return String(perfil["Eu sempre falo isso:"]);
    }
    if (campo == "UmTalentoOculto") {
        return String(perfil["Um talento oculto:"]);
    }
    if (campo == "Animalfavorito") {
        return String(perfil["Animal favorito:"]);
    }
    return "Campo inválido";
}
function extrairPrimeiroNome(nomeCompleto: string) {
    // Remove espaços extras e divide a string pelo espaço
    const partes = nomeCompleto.trim().split(" ");
    return partes[0];
}
function extrairSobrenome(nomeCompleto: string) {
    const partes = nomeCompleto.trim().split(" ");
    return partes.length > 1 ? partes[partes.length - 1] : "";
}
function sortearPerfis(correta: number, i: number) {
    let respostas = [];
    let usados = [correta]; // já marca a correta como usada
    while (respostas.length < 3) {
        let sorteio = Math.trunc(Math.random() * (dadosPerguntas.length - 1));
        // Evita números já usados
        if (usados.indexOf(sorteio) === -1) {
            // Evita alternativas com a mesma resposta no campo
            let repetida = false;
            for (let usado of usados) {
                if (acharAlternativaPeloCampo(camposEmOrdem[i], sorteio) ===
                    acharAlternativaPeloCampo(camposEmOrdem[i], usado)) {
                    repetida = true;
                    break;
                }
            }
            if (!repetida) {
                respostas.push(sorteio);
                usados.push(sorteio);
            }
        }
    }
    respostas.push(correta);
    // Embaralha
    embaralharArray(respostas);
    return respostas;
}
function transformarEmBooleano(array: number[]): boolean[] {
    let arrayDEbooleanos = [];
    for (let element of array) {
        if (acharAlternativaPeloCampo(camposEmOrdem[i], element) == acharAlternativaPeloCampo(camposEmOrdem[i], corretas[i])) {
            arrayDEbooleanos.push(true);
        }
        else {
            arrayDEbooleanos.push(false);
        }
    }
    return arrayDEbooleanos;
}
function gerarRespostas() {
    alternativas = [];
    perfilEscolhido = Math.trunc(Math.random() * (dadosPerguntas.length - 1));
    while (acharAlternativaPeloCampo(camposEmOrdem[i], perfilEscolhido) == "") {
        perfilEscolhido = Math.trunc(Math.random() * (dadosPerguntas.length - 1));
    }
    corretas.push(perfilEscolhido);
    if (corretas.length == i) {
        corretas.pop();
    }
    respostas = embaralharArray(sortearPerfis(perfilEscolhido, i));
    for (let resposta of respostas) {
        if (acharAlternativaPeloCampo(camposEmOrdem[i], resposta) == "") {
            resposta = 0;
        }
    }
    alternativas = transformarEmBooleano(respostas);
    console.log(alternativas);
}
function vencer() {
    if (pontuacao >= 7) {
        header2.innerHTML = "VOCE VENCEU.";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        digitarTextoComCursor("aperte (ctrl+r)","typewriter-container",40);
        marcadorDEvida.innerHTML="Pontuação "+pontuacao+"\naperte ctrl+r para reiniciar."
    }
    else {
        header2.innerHTML = "VOCE FOI DESCOBERTO.";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        digitarTextoComCursor("aperte (ctrl+r)","typewriter-container",40);
        marcadorDEvida.innerHTML="Pontuação "+pontuacao;
    }
}
function mostrarPerguntasEAlternativas() {
    header2.innerHTML = todasASperguntas[i].pergunta.replace("{{nome}}", extrairPrimeiroNome(dadosPerguntas[perfilEscolhido]["Nome completo:"]));
    button1.innerHTML = acharAlternativaPeloCampo(camposEmOrdem[i], respostas[0]);
    button2.innerHTML = acharAlternativaPeloCampo(camposEmOrdem[i], respostas[1]);
    button3.innerHTML = acharAlternativaPeloCampo(camposEmOrdem[i], respostas[2]);
    button4.innerHTML = acharAlternativaPeloCampo(camposEmOrdem[i], respostas[3]);
    marcadorDEvida.innerHTML = "Pontuação: " + pontuacao;
    if (i >= 10) {
        vencer();
    }
}
function iniciar() {
    gerarRespostas();
    mostrarPerguntasEAlternativas();
    ///fechar abas abertas
    let n = 0;
    if (n == 0) {
        credotosAberta = true;
        introducaoAberta = true;
        mostrarCreditos();
        mostrarInstrucoes();
        n++;
    }
}
function mostrarInstrucoes() {
    if (!introducaoAberta && !comecar) {
        introducaoAberta = true;
        digitarTextoComCursor(introducao, "typewriter-container", 40);
    }
    else {
        digitarTextoComCursor("", "typewriter-container", 40);
        introducaoAberta = false;
    }
}
function mostrarCreditos() {
    if (!credotosAberta && !comecar) {
        credotosAberta = true;
        digitarTextoComCursor(creditos, "typewriter-container", 40);
    }
    else {
        credotosAberta = false;
        digitarTextoComCursor("", "typewriter-container", 40);
    }
}
function confirmarAlternativa(alternativa: number) {
    mostrarPerguntasEAlternativas();
    if (alternativas[alternativa] && pontuacao <= 10) {
        digitarTextoComCursor("voce acertou", "typewriter-container", 40);
        pontuacao++;
    }
    else {
        digitarTextoComCursor("voce errou", "typewriter-container", 40);
    }
    if (i >= 9) {
        vencer();
    }
    i++;
    console.log(i);
}
function mostrarBarraDePesquisa(dadosPerguntas: Perfil[]) {
    // Remove barra antiga, se existir
    const barraExistente = document.getElementById("barra-pesquisa");
    if (barraExistente) {
        barraExistente.remove();
    }
    // Criar input
    const input = document.createElement("input");
    input.type = "text";
    input.id = "barra-pesquisa";
    input.placeholder = "Pesquisar perfil...";
    input.style.width = "300px";
    input.style.margin = "10px";
    document.body.appendChild(input);
    // Criar container para resultados
    const listaResultados = document.createElement("ul");
    listaResultados.id = "resultados-pesquisa";
    document.body.appendChild(listaResultados);
    // Função auxiliar para atualizar lista
    function atualizarLista(filtro: string) {
        listaResultados.innerHTML = "";
        if (!filtro.trim())
            return;
        const resultados = dadosPerguntas.filter((p: Perfil) => p["Nome completo:"].toLowerCase().includes(filtro.toLowerCase()));
        resultados.forEach((p: Perfil) => {
            const li = document.createElement("li");
            li.textContent = p["Nome completo:"];
            li.style.cursor = "pointer";
            li.onclick = () => {
                input.value = p["Nome completo:"];
                listaResultados.innerHTML = "";
            };
            listaResultados.appendChild(li);
        });
    }
    // Evento de digitação
    input.addEventListener("input", () => {
        atualizarLista(input.value);
    });
    // Evento Enter para preencher e retornar perfil
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const resultados = dadosPerguntas.filter(p => p["Nome completo:"].toLowerCase().includes(input.value.toLowerCase()));
            if (resultados.length > 0) {
                const perfil = resultados[0];
                input.value = perfil["Nome completo:"];
                listaResultados.innerHTML = "";
                // String formatada
                const perfilString = `
Nome: ${perfil["Nome completo:"]}
Data de Nascimento: ${perfil["Data de nascimento:"]}
Idade: ${perfil["Idade:"]}
Cidade de Nascimento: ${perfil["Qual cidade nasceu?"]}
Apelido: ${perfil["Meu apelido é:"]}
Mania: ${perfil["Tenho a mania de :"]}
Cor do cabelo: ${perfil["Cor do seu cabelo:"]}
Estilo musical favorito: ${perfil["Estilo de musica favorita:"]}
Sempre fala: ${perfil["Eu sempre falo isso:"]}
Talento oculto: ${perfil["Um talento oculto:"]}
Animal favorito: ${perfil["Animal favorito:"]}
Tem irmãos: ${perfil["Tem irmãos?"] ? "Sim" : "Não"}
Chega atrasado: ${perfil["Chega atrasado(a)?"] ? "Sim" : "Não"}
        `.trim();
                digitarTextoComCursor(perfilString, "typewriter-container", 70); // Aqui retorna a string
            }
        }
    });
} //feita pelo chatgpt; // O registro de eventos é feito em initGame() após o DOM estar pronto.

