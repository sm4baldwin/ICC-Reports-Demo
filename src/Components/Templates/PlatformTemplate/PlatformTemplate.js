import React from 'react'
import './PlatformTemplate.css'
import {useTheme} from '@material-ui/core/styles'

export default function(props) {
    const theme = useTheme()

    const oldColumns = [
        'Organizational Information',
        'Crisis Plan Title',
        'Android',
        'iOS',
        'Windows',
        'Kindle',
        'Total'
    ]
    
    const rowStyle = (j, k) => {
        let style = {textAlign: 'center', backgroundColor: theme.palette.common.white}
        if (k<4) {
            style.textAlign = 'left'
        } 
        if (j%2===0) {
            style.backgroundColor = theme.palette.grey[300]
        }
        return style
    }

    return (
        <div className="report-border">
            <table className="table">
                <tbody>
                    <tr>
                        {
                            // props.columns.map((column, i) => {
                            //     if (props.indexList.includes(i)) {
                            //         return <th className="table-header" key={i} scope="col">{column}</th>
                            //     } else { return <React.Fragment key={i}></React.Fragment>}                     
                            // })
                        }
                        {
                            oldColumns.map((column, i) => {
                                    return (
                                        <th
                                            className="table-header"
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
                    {
                        props.data.map( (row, j) => {
                            return (
                                <tr key={j}>
                                    {
                                        row.map((value, k) => {
                                            if (props.indexList.includes(k)) {
                                                return (
                                                    <td
                                                        className="table-row"
                                                        key={k}
                                                        style={rowStyle(j, k)}
                                                    >
                                                        {value}
                                                    </td>
                                                    )
                                            } else {return <React.Fragment key={k}></React.Fragment>}
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        
    )
}