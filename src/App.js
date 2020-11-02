import React, { useEffect, useState } from 'react';
import './App.css';
import CheckDownloadedPlansReport from './reportViews/CheckDownloadedPlans/CheckDownloadedPlans'
import Button from './Components/Button/Button'
import Dropdown from './Components/Dropdown/Dropdown'

function App() {

  const [orgID, setOrgID] = useState(205)
  const [pubID, setPubID] = useState(184)

  const updateResult = (orgOrPub, newID) => {
    orgOrPub === "Org" ? setOrgID(newID) : setPubID(newID)
  }

  useEffect( () => {
    setPubID(9999)
  }, [orgID])

  return (
    <div className="App">
      <h1>Demonstration of stored procedures</h1>
      <div className="flex-container">
        <Dropdown queryParameter={''} updateResult={updateResult} orgOrPub="Org" ID={orgID}/>
        <Dropdown queryParameter={'?OrgID='+orgID} updateResult={updateResult} orgOrPub="Plan" ID={pubID}/>
      </div>
      <CheckDownloadedPlansReport orgID={orgID} pubID={pubID}/>

      <Button val="test" />
    </div>
  );
}

export default App;
