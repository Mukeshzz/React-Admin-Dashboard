import React from 'react'
import Single from '../components/Single.js'
import { singleUser } from '../data.ts'

const User = () => {
  return (
    <div>
      <Single {...singleUser}/>
    </div>
  )
}

export default User
