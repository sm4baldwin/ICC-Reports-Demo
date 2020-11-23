import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

import { OrgPubContext } from '../Contexts/OrgPubContext'

import OrgPubTemplate from '../Components/Templates/OrgPubTemplate/OrgPubTemplate'

export default function(props) {
    const { orgID, setOrgID, pubID, setPubID } = useContext(OrgPubContext)
    const [orgLoading, setOrgLoading] = useState(true)
    const [pubLoading, setPubLoading] = useState(true)

    const [orgList, setOrgList] = useState({ columns: ['Label'], index: [1], data: ["Loading..."]})
    const [pubList, setPubList] = useState({ columns: ['Label'], index: [1], data: ["Loading..."]})

    useEffect( () => {
        let unmounted = false
        const getOrgList = async () => {
          const response = await axios(`/dropdown`)
          
          if (!unmounted) { 
            setOrgList(response.data)
            setOrgLoading(false)
          }
        }
        getOrgList()
        return () => unmounted = true
      }, [])

      useEffect( () => {
        let unmounted = false
        const getPubList = async () => {
          const response = await axios(`/dropdown?OrgID=${orgID}`)

          if (!unmounted) {
            setPubList(response.data)
            setPubLoading(false)
          }
        }
        getPubList()
        return () => {
            unmounted = true
        }
      }, [orgID])

    return (
        <OrgPubTemplate
            orgID={orgID}
            setOrgID={setOrgID}
            orgLoading={orgLoading}
            orgList={orgList}

            pubID={pubID}
            setPubID={setPubID}
            pubLoading={pubLoading}
            pubList={pubList}
        />
    )
}