import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import PlatformTemplate from '../Components/Templates/PlatformTemplate/PlatformTemplate'
import VerticalStepper from '../Components/Organisms/VerticalStepper/VerticalStepper'
import List from '../Components/Molecules/List/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


import {OrgPubContext} from '../Contexts/OrgPubContext'
import { PlatformAnalysis } from '../Assets/Analysis'

export default function(props) {
    const [reportData, setReportData] = useState({columns: ['Loading...'], index: [1], data: [['', '', 'Loading Data...']]})
    const {orgID} = useContext(OrgPubContext)

    const [stepComponent, setStepComponent] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/PlatformReport?OrgID=${orgID}`)
            setReportData(result.data)
        }
        fetchData()
        
    }, [orgID])

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
                        labels={PlatformAnalysis.verticalStepperList}
                        labelsContent={PlatformAnalysis.verticalStepperListContent}
                        finishedLabel={PlatformAnalysis.finishedLabel}
                        renderStep={setStepComponent}
                    />
                </Paper>
            </Grid>
            {stepComponent === 0 && <Grid item>
                <PlatformTemplate 
                    data={reportData.data}
                    columns={reportData.columns}
                    indexList={[2, 3, 4, 5, 6, 7, 8]}
                />
            </Grid>
            }
            {stepComponent === 1 && <Grid item container direction='row' justify='space-evenly'>
                    <Grid item><List 
                        ordered={false} 
                        title={PlatformAnalysis.issue1.title}
                        items={PlatformAnalysis.issue1.items}
                    /></Grid>
                    <Grid item><List
                        ordered={false} 
                        title={PlatformAnalysis.issue2.title}
                        items={PlatformAnalysis.issue2.items}
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