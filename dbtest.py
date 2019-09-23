import mysql.connector

def writeDb():
    mydb = mysql.connector.connect(
        host="172.20.240.118",
        user="webuser",
        passwd="admin123",
        database="weatherdata"
        )
    mycursor = mydb.cursor()


    sql = "INSERT INTO sensorvalues (time_of_date, temperature, humidity, pressure) VALUES (%s, %s, %s, %s)"
    values = ('23.9.2019 10:04', '23.05C','23%', '133hPa')
    
    mycursor.execute(sql,values)
#    for x in mycursor:
#        print(x)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")
        
def main():
    writeDb()
        
if __name__ == "__main__":
    main()