import React, {useState} from 'react'

export const OrgPubContext = React.createContext()

export const OrgPubContextProvider = (props) => {
    const [orgID, setOrgID] = useState(205)
    const [pubID, setPubID] = useState(184)
    
    return (
        <OrgPubContext.Provider value={
            {orgID: orgID, setOrgID: setOrgID, pubID: pubID, setPubID: setPubID}
        }>
            {props.children}
        </OrgPubContext.Provider>
    )
}