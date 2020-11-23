import {responsiveFontSizes, createMuiTheme} from '@material-ui/core/styles'



export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3E91C5',
      },
      secondary: {
        main: '#F08200',
      },
    },
    breakpoints: {
      'xs': 0, 
      'sm': 520, 
      'md': 800, 
      'lg': 1200, 
      'xl': 1700
    }
  }), {breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 2})