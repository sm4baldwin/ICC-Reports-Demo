import React, {useState, useEffect, useContext} from 'react'
import PlatformTemplate from '../Components/Templates/PlatformTemplate/PlatformTemplate'
import {OrgPubContext} from '../Contexts/OrgPubContext'
import axios from 'axios'

export default function(props) {
    const [reportData, setReportData] = useState({columns: ['Loading...'], index: [1], data: [['', '', 'Loading Data...']]})
    const {orgID} = useContext(OrgPubContext)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/PlatformReport?OrgID=${orgID}`)
            setReportData(result.data)
        }
        fetchData()
        
    }, [orgID])

    return (
        <PlatformTemplate 
            data={reportData.data}
            columns={reportData.columns}
            indexList={[2, 3, 4, 5, 6, 7, 8]}
        />
    )
}