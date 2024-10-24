//Routing and Linking


// import Link from 'next/link'
// import React from 'react'

// const Home = () => {
//   return (
//     <div>Homepage   
//       <br/>
      
//       <Link href="/about">go to about page</Link>
//       <br/>
//       <Link href="/footer">go to footer page</Link>
//       <br/>
//       <Link href="/navbar">go to navbar page</Link>
//     </div>
    
//   )
// }

// export default Home




//Navigation

"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
const route =  useRouter()
  return (
    <>
       <h1>This is a home page</h1>
      <button onClick={()=>route.push('/about')}>I am a button of about page</button>
      <br/>
      <button onClick={()=>route.push('/footer')}>I am a button of footer page</button>
      <br/>
      <button onClick={()=>route.push('/navbar')}>I am a button of navbar page</button>
      <br/>
      <button onClick={()=>route.push('/about/contact')}>I am a button of contact page</button>
      

    </>
  )
}

export default Home