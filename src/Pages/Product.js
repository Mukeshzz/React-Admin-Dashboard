import React from 'react'
import Single from '../components/Single.js'
import { singleProduct } from '../data.ts'

const Product = () => {
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product
