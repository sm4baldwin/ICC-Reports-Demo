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

import './App.css';

function App() {

  

  return (
    <ThemeProvider theme={theme}>
      <OrgPubContextProvider>
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
        </Switch>

        {/* <h1>Demonstration of stored procedures</h1>
        <div className="flex-container">
          <Dropdown queryParameter={''} updateResult={updateResult} orgOrPub="Org" ID={orgID}/>
          <Dropdown queryParameter={'?OrgID='+orgID} updateResult={updateResult} orgOrPub="Plan" ID={pubID}/>
        </div>
        <CheckDownloadedPlansReport orgID={orgID} pubID={pubID}/>

        <Button val="test" /> */}
      </OrgPubContextProvider>
    </ThemeProvider>
  );
}

export default App;
