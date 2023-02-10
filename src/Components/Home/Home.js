import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Link to="/login" style={{ padding: '10px 20px', backgroundColor: 'tan', borderRadius: '5px', textDecoration: 'none', color: 'black' }}>&nbsp;Login&nbsp;</Link> <br /><br />
        <Link to="/signup" style={{ padding: '10px 20px', backgroundColor: 'tan', borderRadius: '5px', textDecoration: 'none', color: 'black' }}>SignUp</Link>
      </div>
    </div>
  )
}
