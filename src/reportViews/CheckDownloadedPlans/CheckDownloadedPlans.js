import React, {useState, useEffect} from 'react';
import './CheckDownloadedPlans.css';
import axios from 'axios';

export default function CheckDownloadedPlansReport(props) {
    const [jsonPayload, setjsonPayload] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/CheckDownloadedPlansReport?OrgID=${props.orgID}&PubID=${props.pubID}`)
            setjsonPayload(result.data.Email[0]) 
        }
        
        fetchData()
    }, [props.pubID, props.orgID])

    return (
        <div className="report-border">
            This is the return value from api call: {jsonPayload}. Live refresh!
        </div>
    )
}





