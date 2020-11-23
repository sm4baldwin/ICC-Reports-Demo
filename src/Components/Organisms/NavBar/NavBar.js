import React, {useContext} from 'react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import {useTheme, makeStyles} from '@material-ui/core/styles'
import {OrgPubContext} from '../../../Contexts/OrgPubContext'
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
    buttonHighlight: {
        '&:hover': {
            color: theme.palette.secondary.light
        }
    },
    buttonFocus: {color: theme.palette.secondary.dark}
}))

export const NavBar = (props) => {
    const {orgID, pubID} = useContext(OrgPubContext)
    const theme = useTheme()
    const classes = useStyles()
    let location = useLocation()
    return (
        <div className='root'>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <div className='flex-column title'>
                        <Typography variant="h6">
                            {orgID ? `OrgID: ${orgID}` : ''}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {pubID ? `PubID: ${pubID}` : ''}
                        </Typography>
                    </div>
                    <ButtonGroup
                        variant='text' color='inherit' aria-label='text inherit button group' className='menuButton' disableRipple={true}
                    >
                        {props.pages.map((page, i) => {
                            return (
                                <Button
                                    component={RouterLink}
                                    to={page.url}
                                    key={i}
                                    focusVisibleClassName={classes.buttonFocus}
                                    className={page.url !== location.pathname ? classes.buttonHighlight : ''}
                                    style={
                                        page.url === location.pathname ? 
                                        {backgroundColor: theme.palette.primary.dark}
                                        : {}}
                                >
                                    {page.title}</Button>
                            )
                        })
                        
                        }
                    </ButtonGroup>
                    <Button
                        component={RouterLink}
                        to='/Dashboard'
                        variant='text'
                        disableRipple={true}
                        focusVisibleClassName={classes.buttonFocus}
                        color="inherit"
                        className={'/Dashboard' !== location.pathname ? classes.buttonHighlight : ''}
                        style={'/Dashboard' === location.pathname ? 
                            {
                                backgroundColor: theme.palette.primary.dark
                            } : 
                            {}
                        }
                    >
                        Dashboard</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}
