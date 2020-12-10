import React from 'react'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import './List.css'
import {useTheme} from '@material-ui/core/styles'

export default function(props) {
    const theme = useTheme()
    return (
        <Box className='list-box' style={{backgroundColor: theme.palette.grey[300]}}>
            {props.title && 
                <Typography
                    variant='h6'
                    style={{padding: '1em'}}
                >
                    {props.title}
                </Typography>
            }
            {props.ordered && <div className='list-div'>
                <ol className='list'>
                    {props.items.map((item, i) => (<li key={i}>{item}</li>))}
                </ol>   
            </div>}
            {!props.ordered && <div className='list-div'>
                <ul className='list'>
                    {props.items.map((item, i) => (<li key={i}>{item}</li>))}
                </ul>
            </div>}
        </Box>
    )
}