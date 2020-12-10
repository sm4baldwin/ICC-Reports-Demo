import React, {useState, useEffect, useContext} from 'react'

import List from '../Components/Molecules/List/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    buttonHighlight: {
        '&:hover': {
            color: theme.palette.secondary.light
        }
    },
    buttonFocus: {color: theme.palette.secondary.dark},
    dashboardButton: {padding: '0 .5em', margin: '0 .5em 1rem'},
    paperSection: {padding: '1em'},
    dashboardBorder: {
        border: 'solid 1px',
        borderColor: theme.palette.secondary.main,
        padding: '1rem 2rem',
        margin: '0 1rem'
    }
}))

function Overview(props) {
    return (
        <Grid item>
            <Paper elevation={3} className={props.propClass}>
                This is the Overview section, including general org stats, the plan/publication,
                and helpful top-down Org/user count/adoption grade stuff
            </Paper>  
        </Grid>
    )
}

function OrganizationDetails(props) {
    return (
        <Grid item>
            <Paper elevation={3} className={props.propClass}>
                This opens the in-depth Org Dashboard, which contains the elements
                 of value regarding the Organization itself from the CDPR, Platform Report, USer Download History, 
                 etc. There should also be utility options, including but not limited to exporting users for an org, plans for an org,
                 etc.
            </Paper>  
        </Grid>
    )
}

function UserView(props) {
    return (
        <Grid item>
            <Paper elevation={3} className={props.propClass}>
                Here you can look at individual users, first for the current org, but also looking at a user's information specifically. This aims to bring together specific use-cases of other reports that seek specific people to track their accesses, plans, downloads, and adoption rates.
            </Paper>  
        </Grid>
    )
}

function Adoption(props) {
    return (
        <Grid item>
            <Paper elevation={3} className={props.propClass}>
                And finally, this aims to incorporate the best parts of the current adoption dashboard, make transparent the grading system as well as utility to reach out to those needing to take next steps.
            </Paper>  
        </Grid>
    )
}

export default function Dashboard(props) {
    const [stepComponent, setStepComponent] = useState(0)
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Box className={classes.dashboardBorder}>
        <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            
        >
            <Grid item container direction='row' justify='center'>
                <Grid item className={classes.dashboardButton}>
                    <Button
                        variant='contained'
                        color='default'
                        disableRipple={true}
                        focusVisibleClassName={classes.buttonFocus}
                        style={stepComponent === 0 ? 
                            {
                                backgroundColor: theme.palette.grey[600],
                                color: theme.palette.common.white
                            } : {}
                        }
                        onClick={() => {
                            setStepComponent(0)
                        }}
                    >
                        Overview
                    </Button>
                </Grid>
                <Grid item className={classes.dashboardButton}>
                    <Button
                        variant='contained'
                        color='default'
                        disableRipple={true}
                        focusVisibleClassName={classes.buttonFocus}
                        style={stepComponent === 1 ? 
                            {
                                backgroundColor: theme.palette.grey[600],
                                color: theme.palette.common.white
                            } : {}
                        }
                        onClick={() => {
                            setStepComponent(1)
                        }}
                    >
                        Organization Details
                    </Button>
                </Grid>
                <Grid item className={classes.dashboardButton}>
                    <Button
                        variant='contained'
                        color='default'
                        disableRipple={true}
                        focusVisibleClassName={classes.buttonFocus}
                        style={stepComponent === 2 ?
                            {
                                backgroundColor: theme.palette.grey[600],
                                color: theme.palette.common.white
                            } : {}
                        }
                        onClick={() => {
                            setStepComponent(2)
                        }}
                    >
                        Users View
                    </Button>
                </Grid>
                <Grid item className={classes.dashboardButton}>
                    <Button
                        variant='contained'
                        color='default'
                        disableRipple={true}
                        focusVisibleClassName={classes.buttonFocus}
                        style={stepComponent === 3 ?
                            {
                                backgroundColor: theme.palette.grey[600],
                                color: theme.palette.common.white
                            } : {}
                        }
                        onClick={() => {
                            setStepComponent(3)
                        }}
                    >
                        Adoption Suite
                    </Button>
                </Grid>
            </Grid>
            
            {stepComponent === 0 && <Overview propClass={classes.paperSection} />}
            {stepComponent === 1 && <OrganizationDetails propClass={classes.paperSection} />}
            {stepComponent === 2 && <UserView propClass={classes.paperSection} />}
            {stepComponent === 3 && <Adoption propClass={classes.paperSection} />}
        </Grid>
        </Box>
    )
}