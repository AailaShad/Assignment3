// Routing aur Linking k lia ha ya 

// import React from 'react'

// const About = () => {
//   return (
//     <div>Aboutpage</div>
//   )
// }

// export default About



//Navigation
"use client"
import React from 'react'
import {useRouter}from 'next/navigation'

const About = () => {
const route =useRouter()
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>route.push('/')}>I am a button of Home page</button>
      </div>
  )
}

export default About