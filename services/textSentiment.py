from nltk import tokenize
import time
from dbConfig import database
from LeIA.leia import SentimentIntensityAnalyzer 

s = SentimentIntensityAnalyzer()



def main():
    pos = 0
    neu = 0
    neg = 0
    print('SERVIÇO LeIA-VADER INICIADO')
    while(True):
        stories = database.get_stories_not_in_tbSentiment()
        print('Stories Coletados', len(stories))

        for storie in stories:
            idStories = storie[0]
            textStories = storie[1]

            lines_list = tokenize.sent_tokenize(textStories, language='portuguese')

            for line in lines_list:
                score = s.polarity_scores(line)
                print('=====GRAVANDO NO BANCO SENTIMENTO=====', score)
                database.set_sentiment(idStories, compound=score['compound'], pos=score['pos'], neu=score['neu'], neg=score['neg'])

                

            
        print('Pos', pos, 'Neu', neu, 'Neg', neg)
        time.sleep(1)
                

main()