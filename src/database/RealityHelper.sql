-- Active: 1679521204876@@127.0.0.1@3306@realityhelper
DROP DATABASE RealityHelper;
CREATE DATABASE RealityHelper;
USE RealityHelper;

CREATE TABLE tbStories(
    idStories INT PRIMARY KEY AUTO_INCREMENT
    ,textStories TEXT
    ,dateStories TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbSpeechTagger(
    idSpeechTagger INT AUTO_INCREMENT
    ,fk_tokenizeStories INT
    ,word VARCHAR(50)
    ,tag VARCHAR(3)
    ,isChartable BOOLEAN
    ,CONSTRAINT fk_tbSpeechTagger_tbStories FOREIGN KEY (fk_tokenizeStories) REFERENCES tbStories(idStories)
    ,PRIMARY KEY(idSpeechTagger, fk_tokenizeStories)
);

CREATE TABLE tbSentiment(
    idSentiment INT AUTO_INCREMENT
    ,fk_tokenizeStories INT
    ,compound DECIMAL(6,5) 
    ,pos DECIMAL(5,4) 
    ,neu DECIMAL(5,4) 
    ,neg DECIMAL(5,4)
    ,CONSTRAINT fk_tbSentiment_tbStories FOREIGN KEY (fk_tokenizeStories) REFERENCES tbStories(idStories)
    ,PRIMARY KEY(idSentiment, fk_tokenizeStories)
);

--DADOS GERADOS POR AI
INSERT INTO tbStories (textStories) VALUES
('Eu nasci em uma família pobre e tive que trabalhar desde cedo para ajudar em casa. Aprendi a valorizar cada centavo e a não desistir dos meus sonhos.'),
('Quando eu tinha 10 anos, fui diagnosticado com uma doença rara que me impedia de andar. Os médicos disseram que eu nunca mais poderia correr ou brincar como as outras crianças. Mas eu não aceitei isso e fiz fisioterapia todos os dias. Hoje, eu sou um atleta paralímpico e tenho orgulho da minha superação.'),
('Eu sempre gostei de ler e escrever histórias. Meu sonho era ser um escritor famoso e publicar meus livros. Mas minha família não apoiava minha escolha e dizia que eu deveria fazer algo mais útil. Então, eu me formei em engenharia e arrumei um emprego estável. Mas eu nunca deixei de escrever nas horas vagas. Um dia, eu enviei um dos meus contos para um concurso literário e ganhei o primeiro lugar. Foi aí que eu percebi que eu podia seguir minha paixão e viver da minha arte.'),
('Eu sou uma mulher trans e sofri muito preconceito e violência na minha vida. Desde criança, eu me sentia diferente dos outros meninos e não me identificava com o meu corpo. Eu tive que enfrentar a rejeição da minha família, o bullying na escola e a discriminação no trabalho. Mas eu nunca desisti de ser quem eu sou e de buscar a minha felicidade. Hoje, eu sou uma ativista pelos direitos LGBT+ e ajudo outras pessoas que passam pelo mesmo que eu passei.'),
('Eu sou um imigrante que veio da Síria para o Brasil fugindo da guerra. Eu deixei para trás a minha casa, os meus amigos e a minha cultura. Eu tive que aprender um novo idioma, uma nova história e uma nova forma de viver. Foi muito difícil me adaptar a um país tão diferente do meu. Mas eu também encontrei muitas pessoas boas que me acolheram e me ajudaram. Hoje, eu sou um cidadão brasileiro e contribuo para a sociedade com o meu trabalho e a minha diversidade.'),
('Eu sou um músico que toca violino em uma orquestra. Eu amo a música clássica e me dedico a estudar e aperfeiçoar a minha técnica. Mas eu também tenho um lado rebelde e gosto de tocar rock nas horas vagas. Um dia, eu fui convidado para participar de uma banda de metal e aceitei o desafio. Foi uma experiência incrível e eu descobri que posso unir os meus dois estilos favoritos.'),
('Eu sou uma professora de matemática que adora ensinar e aprender. Eu sempre busco novas formas de tornar as aulas mais interessantes e divertidas para os meus alunos. Eu uso jogos, aplicativos, vídeos e até mágica para mostrar a beleza e a utilidade da matemática. Eu acredito que todos podem aprender e gostar dessa disciplina, basta ter um bom método e uma boa motivação.'),
('Eu sou um fotógrafo que viaja pelo mundo registrando as mais belas paisagens e culturas. Eu gosto de explorar lugares desconhecidos e conhecer pessoas diferentes. Eu tento capturar com a minha câmera a essência e a emoção de cada momento. Eu compartilho as minhas fotos nas redes sociais e recebo muitos elogios e comentários. Eu me sinto feliz em poder mostrar ao mundo a minha visão e inspirar outras pessoas.'),
('Eu sou um advogado que defende os direitos humanos. Eu luto contra as injustiças e as violações que acontecem na nossa sociedade. Eu atendo casos de racismo, machismo, homofobia, tortura, trabalho escravo e outros crimes. Eu enfrento muitas dificuldades e ameaças, mas eu não desisto da minha missão. Eu sei que o meu trabalho é importante e faz a diferença na vida de muitas pessoas.'),
('Eu sou um chef de cozinha que ama criar novos pratos e sabores. Eu me formei em gastronomia e trabalhei em vários restaurantes renomados. Mas o meu sonho era ter o meu próprio negócio e mostrar a minha personalidade na cozinha. Então, eu abri um food truck e comecei a vender as minhas receitas originais. Foi um sucesso e eu conquistei muitos clientes fiéis. Hoje, eu tenho uma rede de food trucks e sou reconhecido como um dos melhores chefs do país.'),
('Eu sou um médico que trabalha em um hospital público. Eu salvo vidas todos os dias e me sinto realizado com a minha profissão. Mas eu também enfrento muitos problemas e desafios, como a falta de recursos, a superlotação e a burocracia. Eu faço o meu melhor com o que eu tenho e procuro sempre me atualizar e me qualificar. Eu tenho orgulho de ser um médico e de servir à população.'),
('Eu sou uma bailarina que dança em um teatro famoso. Eu comecei a dançar quando era criança e nunca mais parei. Eu amo o ballet e me dedico a treinar e ensaiar todos os dias. Eu já participei de vários espetáculos e festivais e recebi muitos prêmios e aplausos. Mas eu também sofro com as dores, as lesões e a pressão. Eu sei que a minha carreira é curta e que eu tenho que aproveitar cada oportunidade. Eu sou uma bailarina e essa é a minha paixão.'),
('Eu sou um astronauta que foi ao espaço várias vezes. Eu sempre sonhei em conhecer o universo e ver a Terra de outro ângulo. Eu estudei muito e me preparei para ser um dos melhores da minha área. Eu fiz parte de diversas missões espaciais e vivi experiências incríveis. Mas eu também tive que abrir mão de muitas coisas, como a minha família, os meus amigos e o meu conforto. Eu sei que o espaço é perigoso e imprevisível, mas eu não tenho medo. Eu sou um astronauta e essa é a minha aventura.'),
('Eu sou uma artista plástica que faz esculturas com materiais reciclados. Eu gosto de transformar o lixo em arte e de dar uma nova vida aos objetos descartados. Eu uso garrafas, latas, papelão, plástico e outros itens para criar as minhas obras. Eu já expus em várias galerias e museus e recebi muitos elogios e críticas. Mas eu também enfrento muita resistência e preconceito, pois muitos não consideram o meu trabalho como arte. Eu não me importo com isso, pois eu sei que a arte é livre e diversa. Eu sou uma artista plástica e essa é a minha expressão.'),
('Eu sou um policial que combate o crime na minha cidade. Eu protejo as pessoas e faço cumprir a lei. Eu tenho coragem, honra e disciplina. Eu já prendi muitos bandidos e evitei muitas tragédias. Mas eu também arrisco a minha vida todos os dias e sofro com o estresse e a violência. Eu sei que o meu trabalho é perigoso e difícil, mas eu não me arrependo da minha escolha. Eu sou um policial e essa é a minha vocação.'),
('Eu sou um jornalista que investiga e denuncia casos de corrupção e abuso de poder. Eu gosto de buscar a verdade e de informar a sociedade. Eu já revelei muitos escândalos e contribuí para a justiça e a democracia. Mas eu também sofro com as ameaças, as fake news e a censura. Eu sei que o meu trabalho é arriscado e polêmico, mas eu não me calo diante das injustiças. Eu sou um jornalista e essa é a minha missão.'),
('Eu sou uma cantora que faz sucesso em todo o país. Eu canto desde que me lembro e sempre quis viver da música. Eu tenho uma voz bonita e um carisma natural. Eu já gravei vários discos e fiz muitos shows. Eu tenho muitos fãs e admiradores. Mas eu também tenho muitas responsabilidades, cobranças e invejas. Eu sei que a fama tem um preço e que eu tenho que me cuidar. Eu sou uma cantora e essa é a minha arte.'),
('Eu sou um biólogo que estuda os animais selvagens. Eu amo a natureza e me interesso pela diversidade da vida. Eu faço pesquisas, observações e experimentos para entender o comportamento e a evolução das espécies. Eu já descobri muitas coisas interessantes e importantes para a ciência e para a conservação. Mas eu também enfrento muitos perigos, dificuldades e surpresas. Eu sei que o campo é cheio de desafios e mistérios, mas eu não me canso de aprender. Eu sou um biólogo e essa é a minha curiosidade.'),
('Eu sou uma atriz que interpreta vários personagens no teatro, no cinema e na televisão. Eu gosto de atuar e de me expressar através da arte. Eu já fiz parte de muitas peças, filmes e novelas. Eu tenho muito talento e criatividade. Mas eu também tenho que estudar, ensaiar e me adaptar a cada papel. Eu sei que a profissão é competitiva e exigente, mas eu não perco a minha essência. Eu sou uma atriz e essa é a minha magia.'),
('Eu sou um piloto de avião que viaja pelo mundo todo. Eu gosto de voar e de conhecer novos lugares. Eu já visitei muitos países e continentes. Eu tenho muita habilidade e experiência. Mas eu também tenho que lidar com o cansaço, o jet lag e as turbulências. Eu sei que o trabalho é estressante e cansativo, mas eu não troco por nada. Eu sou um piloto de avião e essa é a minha aventura.');

SELECT idStories, textStories FROM tbStories WHERE idStories NOT IN (SELECT fk_tokenizeStories FROM tbSpeechTagger);
SELECT COUNT(*) AS quant, word FROM tbSpeechTagger WHERE isChartable GROUP BY word ORDER BY quant;

SELECT AVG(compound) AS compound
FROM tbsentiment
WHERE fk_tokenizeStories = 2;

SELECT
    COUNT(CASE WHEN Averages.pos > Averages.neu AND Averages.pos > Averages.neg THEN 1 END) AS count_positive,
    COUNT(CASE WHEN Averages.neu > Averages.pos AND Averages.neu > Averages.neg THEN 1 END) AS count_neutral,
    COUNT(CASE WHEN Averages.neg > Averages.neu AND Averages.neg > Averages.pos THEN 1 END) AS count_negative
FROM (
    SELECT AVG(pos) AS pos, AVG(neu) AS neu, AVG(neg) AS neg FROM tbsentiment GROUP BY `fk_tokenizeStories`
) AS Averages;


SELECT
    COUNT(CASE WHEN Averages.compound >= 0.05 THEN 1 END) AS count_positive,
    COUNT(CASE WHEN Averages.compound <= -0.05 THEN 1 END) AS count_negative,
    COUNT(CASE WHEN Averages.compound > -0.05 AND compound < 0.05 THEN 1 END) AS count_neutral
FROM (
    SELECT AVG(compound) AS compound FROM tbsentiment GROUP BY `fk_tokenizeStories`
) AS Averages;



SELECT tbStories.*, pos, neu, neg FROM tbStories
    INNER JOIN (
        SELECT AVG(pos) AS pos, AVG(neu) AS neu, AVG(neg) AS neg, fk_tokenizeStories FROM tbsentiment GROUP BY `fk_tokenizeStories`
    ) AS sentiment ON `idStories` = sentiment.`fk_tokenizeStories`
ORDER BY RAND();