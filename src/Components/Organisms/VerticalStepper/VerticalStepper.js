import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: '.5em',
    marginRight: '1em',
  },
  actionsContainer: {
    marginBottom: '1em',
  },
  resetContainer: {
    padding: '1em',
  },
  buttonFocus: {color: theme.palette.secondary.dark}
}));

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = props.labels;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Typography style={{fontWeight: 700}}>{label}</Typography></StepLabel>
            <StepContent>
              <Typography><em>{props.labelsContent[index]}</em></Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {<Button
                    disabled={activeStep === 0}
                    disableElevation={true}
                    disableRipple={true}
                    focusVisibleClassName={classes.buttonFocus}
                    onClick={() => {
                      handleBack()
                      if (props.renderStep) {
                        props.renderStep(activeStep - 1)
                      }
                    }}
                    className={classes.button}
                  >
                    Back
                  </Button>}
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation={true}
                    disableRipple={true}
                    focusVisibleClassName={classes.buttonFocus}
                    onClick={() => {
                      handleNext()
                      if (props.renderStep) {
                        props.renderStep(activeStep + 1)
                      }
                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Grid container direction='row'>
            <Grid item><Button
              component={RouterLink}
              to='/Dashboard'
              variant='outlined'
              disableRipple={true}
              focusVisibleClassName={classes.buttonFocus}
              color="primary"
              className={classes.button}
            >
              {props.finishedLabel}</Button></Grid>
            <Grid item><Button
              variant='contained'
              disableRipple={true}
              focusVisibleClassName={classes.buttonFocus}
              disableElevation={true}
              onClick={() => {
                handleReset()
                if (props.renderStep) {
                  props.renderStep(0)
                }
              }}
              className={classes.button}>
              Reset
            </Button></Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}