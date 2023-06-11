import mysql.connector

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

    def get_stories_not_in_tbSpeechTagger():
        _, cursor = database.connection()
        cursor.execute("SELECT idStories, textStories FROM tbStories WHERE idStories NOT IN (SELECT fk_tokenizeStories FROM tbSpeechTagger)")
        return cursor.fetchall()
    
    def set_stories(fk_tokenizeStories, word, tag, isChartable):
        con, cursor = database.connection()

        sql = "INSERT INTO tbSpeechTagger (fk_tokenizeStories, word, tag, isChartable) VALUES (%s, %s, %s, %s)"
        val = (fk_tokenizeStories, word, tag, isChartable)
        cursor.execute(sql, val)

        con.commit()

        return cursor
    
    def get_stories_not_in_tbSentiment():
        _, cursor = database.connection()
        cursor.execute("SELECT idStories, textStories FROM tbStories WHERE idStories NOT IN (SELECT fk_tokenizeStories FROM tbSentiment)")
        return cursor.fetchall()

    def set_sentiment(fk_tokenizeStories, compound, pos, neu, neg):
        con, cursor = database.connection()

        sql = "INSERT INTO tbSentiment (fk_tokenizeStories, compound, pos, neu, neg) VALUES (%s, %s, %s, %s, %s)"
        val = (fk_tokenizeStories, compound, pos, neu, neg)
        cursor.execute(sql, val)

        con.commit()

        return cursor
