import React from 'react'

export const Buttons = ({ classname, value, onClick }) => {
  const myClass= `btn btn-${classname} text-center btn-lg`;
  return <button className={myClass} onClick={() => onClick(value)}>{value}</button>
}