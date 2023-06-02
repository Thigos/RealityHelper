import nltk, mysql.connector, joblib, time;
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

class database:
    def connection():
        connection = mysql.connector.connect(
            host="localhost",
            user="aluno",
            password="sptech",
            database='RealityHelper',
        )
        cursor = connection.cursor()
        return connection, cursor

    def get_stories():
        _, cursor = database.connection()
        cursor.execute("SELECT idStories, textStories FROM tbStories WHERE idStories NOT IN (SELECT fk_tokenizeStories FROM tbSpeechTagger)")
        return cursor.fetchall()
    
    def set_stories(fk_tokenizeStories, word, tag):
        con, cursor = database.connection()

        sql = "INSERT INTO tbSpeechTagger (fk_tokenizeStories, word, tag) VALUES (%s, %s, %s)"
        val = (fk_tokenizeStories, word, tag)
        cursor.execute(sql, val)

        con.commit()

        return cursor

def main():
    print('SERVIÇO INICIADO')
    while(True):
        stories = database.get_stories()
        print('Stories Coletados', len(stories))
        for storie in stories:
            idStories = storie[0]
            textStories = storie[1]

            tokenStorie = nltk.word_tokenize(textStories, language='portuguese')
            tagger_brill = joblib.load(r'/media/aluno/ESD-USB/RealityHelper/services/POS_tagger_brill.pkl')
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

                if(tagger[i-1][1] not in negado):
                    if(tag[1] in permitido):
                        print('=====GRAVANDO NO BANCO=====', tag)
                        database.set_stories(idStories, tag[0], tag[1])

        time.sleep(1)
                

main()