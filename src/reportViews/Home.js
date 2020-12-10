import React from 'react'

import Home from '../Components/Templates/HomeTemplate/HomeTemplate'
import OrgPubSelection from './OrgPubSelection'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { HomeAnalysis } from '../Assets/Analysis'

export default function(props) {

    return (
        <>
            <Home content={HomeAnalysis}/>
            <Paper elevation={3} style={{width: '75%', display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem auto', padding: '1em 0 .5em 0'}}>
                <Typography variant='subtitle2'>
                    Select an organization and plan, or continue with default:
                </Typography>
                <OrgPubSelection />
                
            </Paper>
        </>
    )
}