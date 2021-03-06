import React, {useEffect, useState} from 'react'
import './Dropdown.css'
import axios from 'axios'

export default function Dropdown(props) {
    const [items, setItems] = useState([{ label: "Loading ...", value: "" }])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
      let unmounted = false
      const getList = async () => {
        const response = await axios(`/dropdown${props.queryParameter}`)
        const IDs = response.data.ID;
        const labels = response.data.Label;
        
        if (!unmounted) { 
          setItems(Object.keys(IDs).map((key) => {
            return {label: labels[key], value: IDs[key]}
          }))
          setLoading(false)
        }
      }
      getList()
      return () => unmounted = true
    }, [props.queryParameter])

    return (
      <div className="dropdown-container">
        <select 
          disabled={loading}
          value={props.ID}
          onChange={e => {
            props.updateResult(props.orgOrPub, e.currentTarget.value)
          }}
          className="dropdown"
        >
          <option style={{display: 'none'}}>Select a plan: </option>
          {items.map(({ label, value }) => (
            <option key={value} value={value}>
              {props.orgOrPub} ID: {value}, {label}
            </option>
          ))}
        </select> 
      </div>
    )
  }