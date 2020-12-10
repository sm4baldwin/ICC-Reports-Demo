import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Contexts/ThemeContext'

import { OrgPubContextProvider } from './Contexts/OrgPubContext'

import { NavBar } from './Components/Organisms/NavBar/NavBar'
import { Pages } from './Assets/Pages'

import HomePage from './reportViews/Home'
import CDPR from './reportViews/CDPR'
import Platform from './reportViews/Platform'
import UserDownloadHistory from './reportViews/UserDownloadHistory'
import Dashboard from './reportViews/Dashboard'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OrgPubContextProvider>
        <div className='App'>
          <NavBar pages={Pages}/>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/CheckDownloadedPlansReport'>
              <CDPR />
            </Route>
            <Route path='/PlatformReport'>
              <Platform />
            </Route>
            <Route path='/UserDownloadHistoryReport'>
              <UserDownloadHistory />
            </Route>
            <Route path='/Dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </OrgPubContextProvider>
    </ThemeProvider>
  );
}

export default App;
