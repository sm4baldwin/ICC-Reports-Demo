import React, {useState, useEffect, useContext} from 'react'
import CDPRtemplate from '../Components/Templates/CDPR/CDPRtemplate'
import OrgPubSelection from './OrgPubSelection'
import {OrgPubContext} from '../Contexts/OrgPubContext'
import axios from 'axios'

export default function CheckDownloadedPlansReport(props) {
    const [reportData, setReportData] = useState({columns: ['Loading...'], index: [1], data: [['Buffer']]})
    const {orgID, pubID} = useContext(OrgPubContext)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/CheckDownloadedPlansReport?OrgID=${orgID}&PubID=${pubID}`)
            setReportData(result.data)
        }
        fetchData()
        
    }, [orgID, pubID])

    return (
        <>
            <OrgPubSelection />
            <CDPRtemplate
                columns={reportData.columns}
                data={reportData.data}
                index={reportData.index}
                pubID={pubID}
            />  
        </>
    )
}





