import React from 'react'

import Box from '@material-ui/core/Box'

import Dropdown from '../../Organisms/Dropdown/Dropdown'
import './OrgPubTemplate.css'

export default function(props) {

    const onOrgChange = (value) => {
        props.setOrgID(value)
        props.setPubID(0)
    }

    return (
        <Box className='NavBox'>
            <Dropdown
                value={props.orgID}
                loading={props.orgLoading}
                onChange={onOrgChange}
                prompt='Select an organization: '
                list={props.orgList}
                listString='OrgID: '
            />
            <Dropdown
                value={props.pubID}
                loading={props.pubLoading}
                onChange={props.setPubID}
                prompt='Select a plan: '
                list={props.pubList}
                listString='PubID: '
            />

        </Box>
    )
}