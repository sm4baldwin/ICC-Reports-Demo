const TYPES = require('tedious').TYPES

const CheckDownloadedPlansReportProc = {
    proc: "dbo.procICOemailAuthDownloadAudit_v2",
    params: [
        {
          paramName: 'OrgID',
          dtype: TYPES.Int,
          val: '205'
        },
        {
          paramName: 'PubID',
          dtype: TYPES.Int,
          val: '184'
        }
      ]
}

export { CheckDownloadedPlansReportProc }