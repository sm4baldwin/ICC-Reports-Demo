import React from 'react'

import { CheckDownloadedPlansReportProc } from '../Assets/storedProcedures'
import { storedProcExec } from '../Helpers/msSQLconnection'

storedProcExec(CheckDownloadedPlansReportProc.proc, CheckDownloadedPlansReportProc.params)

console.log(CheckDownloadedPlansReportProc)

export default function CheckDownloadedPlansReport() {
    return (
        <div>
            This is just a demo - check the console.log
        </div>
    )
}





