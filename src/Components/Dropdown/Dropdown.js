import React, {useEffect, useState} from 'react'
import './Dropdown.css'
import axios from 'axios'

export default function Dropdown(props) {
    const [items, setItems] = useState([{ label: "Loading ...", value: "" }])
    const [loading, setLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState(205)

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

    useEffect( () => {
      console.log(selectedItem)
    }, [selectedItem])

    return (
      <div className="dropdown-container">
        <select 
          disabled={loading}
          value={selectedItem}
          onChange={e => {
            setSelectedItem(e.currentTarget.value)
            props.updateResult(props.orgOrPub, selectedItem)
          }}
          className="dropdown"
        >
          {items.map(({ label, value }) => (
            <option key={value} value={value}>
              {props.orgOrPub} ID: {value}, {label}
            </option>
          ))}
        </select> 
      </div>
    )
  }