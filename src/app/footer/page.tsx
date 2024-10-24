//Linking and Routing

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer Page</div>
//   )
// }

// export default Footer






//Navigation
"use client"
import React from 'react'
import {useRouter}from 'next/navigation'

const About = () => {
const route =useRouter()
  return (
    <div>
      <h1>footer Page</h1>
      <button onClick={()=>route.push('/about')}>I am a button of go to  Home page</button>
      </div>
  )
}

export default About