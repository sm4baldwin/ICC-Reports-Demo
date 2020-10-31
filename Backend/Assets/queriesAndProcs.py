def checkDownloadedPlansReport(OrgID, PubID):
    query = "EXEC dbo.procICOemailAuthDownloadAudit_v2 @OrgID=?, @PubID=? ;"
    params = [OrgID, PubID]
    isProc = True
    return [query, isProc, params]

def dropdownRouteOrgID():
    query = "SELECT OrgID as ID, OrgName as Label FROM Organization;"
    params = False
    isProc = False
    return [query, isProc, params]

def dropdownRoutePubID(OrgID):
    query = 'SELECT PubID as ID, PubTitle as Label FROM Publication where OrgID = ' +str(OrgID)+';'
    params = False
    isProc = False
    return [query, isProc, params]