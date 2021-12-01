import React from 'react'
import { Link } from 'react-router-dom'

const HomeBtn = ({className, height, width}) => {
  return (
    <Link to="/" className={className}>
      <img height={height} width={width} src="https://i.imgur.com/3A4CAU7.png" alt="" />
    </Link>
  )
}

export default HomeBtn
