import React from 'react'

const Listeditem = ({itemName, className}) => {
  return (
    <li className={className}>{itemName}</li>
  )
}

export default Listeditem