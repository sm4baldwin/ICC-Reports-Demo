import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import CDPRtemplate from '../Components/Templates/CDPR/CDPRtemplate'
import VerticalStepper from '../Components/Organisms/VerticalStepper/VerticalStepper'
import List from '../Components/Molecules/List/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import {OrgPubContext} from '../Contexts/OrgPubContext'
import { CDPRanalysis } from '../Assets/Analysis'

export default function CheckDownloadedPlansReport(props) {
    const [reportData, setReportData] = useState({columns: ['Loading...'], index: [1], data: [['Buffer']]})
    const {orgID, pubID} = useContext(OrgPubContext)

    const [stepComponent, setStepComponent] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/CheckDownloadedPlansReport?OrgID=${orgID}&PubID=${pubID}`)
            setReportData(result.data)
        }
        fetchData()
        
    }, [orgID, pubID])

    return (
        <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            
        >
            <Grid item>
                <Paper elevation={3} style={{margin: '0 2rem 0 2rem'}}>
                    <VerticalStepper
                        labels={CDPRanalysis.verticalStepperList}
                        labelsContent={CDPRanalysis.verticalStepperListContent}
                        finishedLabel={CDPRanalysis.finishedLabel}
                        renderStep={setStepComponent}
                    />
                </Paper>
            </Grid>
            {stepComponent === 0 && <Grid item>
                <CDPRtemplate
                    columns={reportData.columns}
                    data={reportData.data}
                    index={reportData.index}
                    pubID={pubID}
                />  
            </Grid>
            }
            {stepComponent === 1 && <Grid item container direction='row' justify='space-evenly'>
                    <Grid item><List 
                        ordered={false} 
                        title={CDPRanalysis.issue1.title}
                        items={CDPRanalysis.issue1.items}
                    /></Grid>
                    <Grid item><List
                        ordered={false} 
                        title={CDPRanalysis.issue2.title}
                        items={CDPRanalysis.issue2.items}
                    /></Grid>
            </Grid>
            }
            {stepComponent === 2 && <Grid item>
                <List 
                    ordered={false} 
                    title='Items of value'
                    items={[
                        'Can check historical pathway of authorizations through process of logical deduction',
                        `Can verify a user's most recent download version`,
                        'Export utility for comparison against other reports']}
                />
            </Grid>
            }
        </Grid>
    )
}





