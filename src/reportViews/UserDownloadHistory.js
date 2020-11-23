import React, {useState, useEffect, useContext} from 'react'

import UserDownloadTemplate from '../Components/Templates/UserDownloadTemplate/UserDownloadTemplate'

import { OrgPubContext } from '../Contexts/OrgPubContext'

import axios from 'axios'

export default function(props) {
    const { orgID } = useContext(OrgPubContext)
    
    const [reportData, setReportData] = useState(
        {columns: ['Loading...'], index: [1], 
        data: [['', 'Loading Orgs...', '', '', 'Loading Plans...', '', '', '', '', 
                '', false, false, '', '']]})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/UserDownloadHistoryReport?OrgID=${orgID}`)
            setReportData(result.data)
        }
        fetchData()
    }, [orgID])

    return (
        <UserDownloadTemplate
            columns={reportData.columns}
            index={reportData.index}
            data={reportData.data}

        />
    )

}