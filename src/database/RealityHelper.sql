-- Active: 1679521204876@@127.0.0.1@3306
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
    ,CONSTRAINT fk_tbSpeechTagger_tbStories FOREIGN KEY (fk_tokenizeStories) REFERENCES tbStories(idStories)
    ,PRIMARY KEY(idSpeechTagger, fk_tokenizeStories, word)
);