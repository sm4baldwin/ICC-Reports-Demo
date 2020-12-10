import React, {useState, useEffect, useContext} from 'react'

import UserDownloadTemplate from '../Components/Templates/UserDownloadTemplate/UserDownloadTemplate'
import VerticalStepper from '../Components/Organisms/VerticalStepper/VerticalStepper'
import List from '../Components/Molecules/List/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { OrgPubContext } from '../Contexts/OrgPubContext'
import { UserDownloadHistoryAnalysis } from '../Assets/Analysis'

import axios from 'axios'

export default function(props) {
    const { orgID } = useContext(OrgPubContext)
    const [reportData, setReportData] = useState(
        {columns: ['Loading...'], index: [1], 
        data: [['', 'Loading Orgs...', '', '', 'Loading Plans...', '', '', '', '', 
        '', false, false, '', '']]})
        
    const [stepComponent, setStepComponent] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/UserDownloadHistoryReport?OrgID=${orgID}`)
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
                        labels={UserDownloadHistoryAnalysis.verticalStepperList}
                        labelsContent={UserDownloadHistoryAnalysis.verticalStepperListContent}
                        finishedLabel={UserDownloadHistoryAnalysis.finishedLabel}
                        renderStep={setStepComponent}
                    />
                </Paper>
            </Grid>
            {stepComponent === 0 && <Grid item>
                <UserDownloadTemplate
                    columns={reportData.columns}
                    index={reportData.index}
                    data={reportData.data}
                /> 
            </Grid>
            }
            {stepComponent === 1 && <Grid item container direction='row' justify='space-evenly'>
                    <Grid item><List 
                        ordered={false} 
                        title={UserDownloadHistoryAnalysis.issue1.title}
                        items={UserDownloadHistoryAnalysis.issue1.items}
                    /></Grid>
                    <Grid item><List
                        ordered={false} 
                        title={UserDownloadHistoryAnalysis.issue2.title}
                        items={UserDownloadHistoryAnalysis.issue2.items}
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