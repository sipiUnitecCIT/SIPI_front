import React from 'react'
import Head from "next/head"

const CustomHead = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sistemas de Información de Proyectos Institucionales</title>
        <link rel="shortcut icon" href="https://i.imgur.com/3A4CAU7.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&family=Poppins:wght@300;400;500;600;700&display=swap"></link>
      </Head>
      {children}
    </>
  )
}

export default CustomHead;
