import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='container'>
          <nav>
            <span className='logo'>adminline</span>
             <ul>
                <li><a href="#"><img className='png-symbol-not' src='img/notify.png' alt=''/></a></li>
                <li><a href="#"><img className='png-symbol-lang' src='img/language.png' alt=''/></a></li>
                <li><a href="#"><img className='png-symbol-set' src='img/settings.png' alt=''/></a></li>
                <li><a href="#"><img className='png-symbol-user' src='img/user.png' alt=''/></a></li>
             </ul>    
          </nav>  
        </div>
    )
}

export default Navbar
