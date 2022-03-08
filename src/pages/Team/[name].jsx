import { useRouter } from 'next/router'
import React from 'react'

const Team = () => {
  const { name } = useRouter().query
  return (
    <div>
      {name}
    </div>
  )
}

export default Team