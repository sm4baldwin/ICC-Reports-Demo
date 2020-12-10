import React from 'react'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import './HomeTemplate.css'


export default function(props) {
    const theme = useTheme()
    return (
        <Paper elevation={3} className='HomeContent'>
            <Typography variant='h4'>
                {props.content.intro}
            </Typography><br></br>
            <br></br>
            <Typography variant='h6'>
                {props.content.section1.title}
            </Typography><br></br>
            {props.content.section1.paragraphs.map((item, i) => {
                return (
                    <Typography variant='subtitle2' key={i}>
                        {item}
                    </Typography>
                )
            })}
            <br></br>
            <Typography variant='h6'>
                {props.content.section2.title}
            </Typography>
            <br></br>
            {props.content.section2.paragraphs.map((item, i) => {
                return (
                    <Typography variant='subtitle2' key={i} className='new-paragraph'>
                        {item}
                    </Typography>
                )
            })}
        </Paper>
    )
}