import React from 'react'

const Unorderlist = ({children, className}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default Unorderlist