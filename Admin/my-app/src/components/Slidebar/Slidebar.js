import React from 'react'
import { Link, Routes , Route } from "react-router-dom"
import "./slidebar.scss"

const Slidebar = () => {
    return (
        <div className='body-nav'>
           <nav className='navbar'>
              <ul className='ul'>

                <h7 className="h7-title-nav">Dashboard</h7>

                <li className='li-nav'>
                  <Link to="/"><img className='png-images-nav' src='img/home.png' alt=''/>Home</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/"><img className='png-images-nav' src='img/analytic.png' alt=''/>Analytics</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/"><img className='png-images-nav' src='img/sales.png' alt=''/>Sales</Link>
                </li>

                <h7 className="h7-title-nav">Quick Menu</h7>

                <li className='li-nav'>
                  <Link to="/users"><img className='png-images-nav' src='img/users.png' alt=''/>Users</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/products"><img className='png-images-nav' src='img/products.png' alt=''/>Products</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/t"><img className='png-images-nav' src='img/transactions.png' alt=''/>Transactions</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/r"><img className='png-images-nav' src='img/reports.png' alt=''/>Reports</Link>
                </li>

                <h7 className="h7-title-nav">Notifications</h7>

                <li className='li-nav'>
                  <Link to="/m"><img className='png-images-nav' src='img/mail.png' alt=''/>Mail</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/f"><img className='png-images-nav' src='img/feedback.png' alt=''/>Feedback</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/m"><img className='png-images-nav' src='img/chat.png' alt=''/>Messages</Link>
                </li>

                <h7 className="h7-title-nav">Staff</h7>

                <li className='li-nav'>
                  <Link to="/m"><img className='png-images-nav' src='img/manage.png' alt=''/>Manage</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/a"><img className='png-images-nav' src='img/analytic.png' alt=''/>Analytics</Link>
                </li>
                <li className='li-nav'>
                  <Link to="/r"><img className='png-images-nav' src='img/report.png' alt=''/>Reports</Link>
                </li>
              </ul>
            </nav>
        </div>
    )
}

export default Slidebar
