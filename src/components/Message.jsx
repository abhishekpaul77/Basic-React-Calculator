import React from 'react'

export const Message = ({classname,value}) => {
  const myClass= `alert alert-${classname} text-center`;
  return (
<h1 className={myClass} >{value}</h1>  )
}