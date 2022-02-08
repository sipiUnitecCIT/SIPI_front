import React from 'react'
import Head from "next/head"

const CustomHead = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sistemas de Información de Proyectos Institucionales</title>
        <link rel="shortcut icon" href="https://i.imgur.com/3A4CAU7.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
    </>
  )
}

export default CustomHead;
