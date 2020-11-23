import React from 'react'
import './Dropdown.css'

export default function Dropdown(props) {

    return (
      <div className="dropdown-container">
        <select 
          disabled={props.loading}
          value={props.value}
          onChange={e => {
            props.onChange(e.currentTarget.value)
          }}
          className="dropdown"
        >
          <option style={{display: 'none'}}>{props.prompt}</option>
          {props.list.data.map((value, i) => (
            <option key={i} value={value[0]}>
              {props.listString}{value[0]}{value[1] ? `, ${value[1]}` : ''}
            </option>
          ))}
        </select> 
      </div>
    )
  }