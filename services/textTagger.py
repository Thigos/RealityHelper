import nltk
import joblib
import time
import pathlib
from dbConfig import database

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

tagger_brill_path = str(pathlib.Path(__file__).parent.resolve()) + '/POS_tagger_brill.pkl'

def main():
    print('SERVIÇO INICIADO')
    while(True):
        stories = database.get_stories_not_in_tbSpeechTagger()
        print('Stories Coletados', len(stories))
        for storie in stories:
            idStories = storie[0]
            textStories = storie[1]

            tokenStorie = nltk.word_tokenize(textStories, language='portuguese')
            tagger_brill = joblib.load(tagger_brill_path)
            tagger = tagger_brill.tag(tokenStorie)

            for i, tag in enumerate(tagger):
                """
                    ADJ -> ADJETIVO
                    V -> VERBO
                    PCP -> PARTICÍPIO

                    VERBO NAO PODE SER DEPOIS DE:
                    PROADJ
                    NPROP
                    PROSUB
                    PROPESS
                    PRO-KS
                    ADV-KS-REL
                """
                permitido = ['ADJ', 'V', 'PCP']
                negado = [
                    'PROADJ',
                    'NPROP',
                    'PROSUB',
                    'PROPESS',
                    'PRO-KS',
                    'ADV-KS-REL',
                    'N'
                ]

                if(tagger[i-1][1] not in negado and tag[1] in permitido):
                    print('=====GRAVANDO NO BANCO COMO MAPEÁVEL=====', tag)
                    database.set_stories(idStories, tag[0], tag[1], True)
                else:
                    print('=====GRAVANDO NO BANCO COMO NÃO MAPEÁVEL=====', tag)
                    database.set_stories(idStories, tag[0], tag[1], False)

        time.sleep(1)
                

main()