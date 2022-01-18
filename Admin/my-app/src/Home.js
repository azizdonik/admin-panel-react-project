import React from 'react'
import Header from "./components/Header/Header"
import Analytics from "./components/Analytics/Analytics";
import Member from "./components/Member/Member";


const Home = () => {
    return (
        <div>
          <Header/>
        <Analytics/>
          <Member/>
        </div>
          
    )
}

export default Home
