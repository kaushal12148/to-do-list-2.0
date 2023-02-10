import React from 'react'

export default function Sidenav(props) {
  return (
    <ul>
        <li onClick={()=>{props.change("INBOX")}}>
            <div>Inbox</div>
        </li>
        <li onClick={()=>{props.change("TODAY")}}>
            <div>Today</div>
        </li>
        <li onClick={()=>{props.change("NEXT")}}>
            <div>Next 7 Days</div>
        </li>
        
    </ul>
  )
}