import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className="error">
      <h1>404 ERROR PAGE</h1>
      <Link to='/'><button>GO BACK TO HOME PAGE</button></Link>
    </div>
  )
}

export default Error