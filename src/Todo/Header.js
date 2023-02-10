import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h2>{props.name ? `Welcome ${props.name}`:"Login please"}</h2>
    </div>
  )
}