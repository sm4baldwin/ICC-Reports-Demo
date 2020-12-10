import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import './UserDownloadTemplate.css'

export default function(props) {
    const theme = useTheme()

    const oldColumns = [
        "Authorization Email",
        "Version Min",
        "Version Max",
        "Download earliest",
        "Download latest",
        "Account Logins",
        "Active"
    ]
    const toFormattedDate = (input) => {
        const date = new Date(input)
        const padLeft = (length, character, input) => { 
            return new Array(length - input.length + 1).join(character || ' ') + input; 
        }
        if (date) {
            return [padLeft(2, '0', String(date.getMonth()+1)),
                    padLeft(2, '0', String(date.getDate())),
                    String(date.getFullYear()).substr(2, 2)].join("/") + " " +
                   [padLeft(2, '0', String(date.getHours())),
                   padLeft(2, '0', String(date.getMinutes()))].join(":")
        } else {
            return "Buffering"
        }
    }
    let set  = new Set(props.data.map( (row) => {
        return JSON.stringify([row[1], row[4]])
    }))
    let orgsPlans = Array.from(set).map(JSON.parse)
    let orgSet = new Set(orgsPlans.map( (row) => row[0]))
    let orgArray = Array.from(orgSet)

    return (
        <div className="UserDownload-report-border">
            <table className="UserDownload-table">
                <tbody>
                    <tr>
                        {
                            oldColumns.map((column, i) => {
                                    return (
                                        <th
                                            key={i}
                                            scope="col"
                                            style={{backgroundColor: theme.palette.primary.main, 
                                                color: theme.palette.common.white}}
                                        >
                                            {column}
                                        </th>                 
                                    )
                            })
                        }
                    </tr>
                    {orgArray.map( (org, i) => {
                        return(
                            <React.Fragment key={i}>
                                <tr><td colSpan={7} style={{backgroundColor: theme.palette.grey[500]}}>{org}</td></tr>
                                {orgsPlans.filter(orgPlan => orgPlan[0] ===org).map((orgPlan, j) => {
                                    return (
                                        <React.Fragment key={j}>
                                            <tr><td colSpan={7} style={{backgroundColor: theme.palette.grey[300]}}>{orgPlan[1]}</td></tr>
                                            {props.data.filter(row => row[1] === org && row[4]===orgPlan[1]).map((item, k) => {
                                                return (
                                                    <tr key={k}>
                                                        <td>{item[9]}</td>
                                                        <td>{item[6]}</td>
                                                        <td>{item[7]}</td>
                                                        <td>{item[11] && toFormattedDate(item[11])}</td>
                                                        <td>{item[11] && toFormattedDate(item[12])}</td>
                                                        <td>{item[9]}</td>
                                                        <td>{item[13]}</td>
                                                    </tr>
                                                )
                                            })}
                                        </React.Fragment>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}