import pyodbc
import pandas as pd

    #add the yaml config option

def getJSONResult(sql, connection, isProc, params):

    if not isProc:
        df_result = pd.read_sql_query(sql, connection)
    else:
        df_result = pd.read_sql_query(sql, connection, params=(params))
    return df_result.to_json()

def runDBQuery(config, sql, isProc, procParams):
    connection = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+config['server']+ \
        ';DATABASE='+config['database']+';UID='+config['username']+';PWD='+config['password'])
    json_result = getJSONResult(sql, connection, isProc, procParams)
    connection.close()
    print(json_result)
    return json_result


if __name__ == "__main__":
    # execute only if run as a script
    config = {
        'server': '127.0.0.1,5100',
        'database': 'CrisisGuide2',
        'username': 'SA',
        'password': 'mySecret123',
        'driver': '{ODBC Driver 17 for SQL Server}'
    }
    exampleSQL = "EXEC dbo.procICOemailAuthDownloadAudit_v2 @OrgID=?, @PubID=? ;"
    procParams = [205, 184]
    runDBQuery(config, exampleSQL, True, procParams)
