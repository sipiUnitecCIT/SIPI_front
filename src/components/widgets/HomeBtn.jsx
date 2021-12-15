import React from 'react'
import Link from 'next/link'

const HomeBtn = ({ className, height, width }) => {
  return (
    <Link href="/" className={className}>
      <a>
        <img height={height} width={width} src="https://i.imgur.com/3A4CAU7.png" alt="" />
      </a>
    </Link>
  )
}

export default HomeBtn
