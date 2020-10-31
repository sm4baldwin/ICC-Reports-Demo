import time
from flask import Flask, request

from Assets.queriesAndProcs import checkDownloadedPlansReport
from Assets.queriesAndProcs import dropdownRouteOrgID
from Assets.queriesAndProcs import dropdownRoutePubID
from dbConnect import runDBQuery

app = Flask(__name__)

config = {
        'server': '127.0.0.1,5100',
        'database': 'CrisisGuide2',
        'username': 'SA',
        'password': 'mySecret123',
        'driver': '{ODBC Driver 17 for SQL Server}'
    }

@app.route('/CheckDownloadedPlansReport')
def checkDownloadedPlansRoute():
    OrgID = request.args.get('OrgID')
    PubID = request.args.get('PubID')
    query = checkDownloadedPlansReport(OrgID, PubID)
    return runDBQuery(config, query[0], query[1], query[2])

@app.route('/dropdown')
def dropdownRoute():
    OrgID = request.args.get('OrgID')
    if not OrgID:
        query = dropdownRouteOrgID()
    else:
        query = dropdownRoutePubID(OrgID)
    return runDBQuery(config, query[0], query[1], query[2])
    

