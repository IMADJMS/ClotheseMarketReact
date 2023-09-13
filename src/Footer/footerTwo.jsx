// import React, { useState } from 'react'
import '../Footer/footer.scss'
import { Link } from 'react-router-dom';

export default function FooterTwo() {

    return (
        <>

            <footer className="footer">

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-4">
                            <h3>Useful Links</h3>
                            <div className='Footer-links ms-4'>
                                <Link to="/" className='nav-link'>Home</Link>
                                <Link to="/shop" className='nav-link'>Shop</Link>
                                <Link to="/events" className='nav-link'>Events</Link>
                                <Link to="/services" className='nav-link'>Services</Link>
                                <Link to="/events" className='nav-link'>News</Link>
                                <Link to="/services" className='nav-link'>About us</Link>
                            </div>

                        </div>

                        <div className="col-sm-4 About">
                            <h3>About us</h3>
                            <p>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p> <br />
                            <p>Our products are designed for small to medium size companies willing to optimize their performance.</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h3>Connect withUs</h3>
                            <ul>
                                <li>
                                    <span><img src="/image/ICONS/message.png" width='27' height='27' alt="" /></span> <Link to="/" className='nav-link d-inline-block'>Contact us</Link>
                                </li>
                                <li><span><img src="/image/ICONS/email.png" width='27' height='27' alt="" /></span> <a className='nav-link d-inline-block' href="mailto:jamoussiimad34@gmail.com">info@yourcompany.com</a>

                                </li>
                                <li><span><img src="/image/ICONS/telephone.png" width='27' height='27' alt="" /></span> <a className='nav-link d-inline-block' href="tel:+2120670071326">+212670071326</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}





