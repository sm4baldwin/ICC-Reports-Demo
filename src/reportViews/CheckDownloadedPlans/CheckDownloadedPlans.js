import React, {useState, useEffect} from 'react'
import './CheckDownloadedPlans.css'
import axios from 'axios'

export default function CheckDownloadedPlansReport(props) {
    const [reportData, setReportData] = useState({jsonData: {Email: {loading: 'loading'}}, arrayData: [{loading: 'loading'}]})

    const convertJSONtoArray = (jsonData) => {
        const keys = Object.keys(jsonData)
        console.log(keys)
        console.log(Object.keys(jsonData[keys[0]]))
        const idKeys = Object.keys(jsonData[keys[0]])
        let arrayOfObjs = []
        for (let id in idKeys) {
            let tempObj = {}
            for (let key in keys) {
                tempObj[key] = jsonData[keys[key]][id]
            }
            arrayOfObjs.push(tempObj)
        }
        return arrayOfObjs
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/CheckDownloadedPlansReport?OrgID=${props.orgID}&PubID=${props.pubID}`)
            setReportData({jsonData: result.data, arrayData: convertJSONtoArray(result.data)})
        }
        fetchData()
        
    }, [props.pubID, props.orgID])

    return (
        <div className="report-border">
            <table className="table">
                <tbody>
                    <tr>
                        {
                            Object.keys(reportData.jsonData).map((key, i) => {
                                return <th className="table-header" key={i} scope="col">{key}</th>
                            })
                        }
                    </tr>
                    {
                        reportData.arrayData.map( (item, j) => {
                            return (
                                <tr key={j}>
                                    {
                                        Object.keys(item).map((key, i) => {
                                            return <td className="table-row" key={i}>{item[key]}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}





