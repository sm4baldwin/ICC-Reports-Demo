import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import './CDPR.css'

const useStyles = makeStyles((theme) => ({
    buttonFocus: {color: theme.palette.secondary.dark}
}));
  

export default function(props) {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <div className="CDPR-report-border">
            <Button
                variant='contained'
                color='secondary'
                disableElevation={true}
                disableRipple={true}
                focusVisibleClassName={classes.buttonFocus}
                size='small'
                className='CDPR-button'
                style={{color: theme.palette.common.white}}>Export to Excel</Button>
            <table className="CDPR-table">
                <tbody>
                    <tr>
                        {
                            props.columns.map((column, i) => {
                                return <th className="CDPR-table-header" key={i} scope="col">{column}</th>
                            })
                        }
                    </tr>
                    {!(props.pubID===0) &&
                        props.data.map( (row, j) => {
                            return (
                                <tr key={j}>
                                    {
                                        row.map((value, k) => {
                                            return <td className="CDPR-table-row" key={k}>{value}</td>
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
