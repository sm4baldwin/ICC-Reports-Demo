import React from 'react'
import Button from '@material-ui/core/Button'
import {useTheme} from '@material-ui/core/styles'
import './CDPR.css'

export default function(props) {
    const theme = useTheme()
    return (
        <div className="report-border">
            <Button
                variant='contained'
                color='secondary'
                disableElevation='true'
                size='small'
                className='button'
                style={{color: theme.palette.common.white}}>Export to Excel</Button>
            <table className="table">
                <tbody>
                    <tr>
                        {
                            props.columns.map((column, i) => {
                                return <th className="table-header" key={i} scope="col">{column}</th>
                            })
                        }
                    </tr>
                    {!(props.pubID===0) &&
                        props.data.map( (row, j) => {
                            return (
                                <tr key={j}>
                                    {
                                        row.map((value, k) => {
                                            return <td className="table-row" key={k}>{value}</td>
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
