import React from 'react'
import './home.scss';
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from 'react-router-dom';
import '../Footer/footer.scss'
const Home = () => {
    return (
        <>
            <div className='divName'  >
                <h1><b>Bringing life to your interior</b></h1>
                <p>Discover our unique pieces of furnitures selected for you.</p>
                <button className='Home-Button btn'>Discover More</button>
            </div>

            <div className='AllCard'>
                <div className='container' >
                    <div className='row d-flex justify-content-center' >
                        <div class="cardOne card col-lg-4 border-0 d-flex shadow-sm"  >
                            <div class="card-body ">
                                <img src='./image/website.s_three_columns_default_image_1.jpg' className='cardImage card-img-top' />
                                <br></br>
                                <br></br>
                                <h3 class="card-title ">Unique Items</h3>
                                <p class="card-text">To buy unique pieces is to buy a piece of the artist: His passion put in the execution of the object, his hours of reflexion, his dexterity... It is a committed, ethical act, which encourages a responsible and direct economy.</p>
                            </div>
                        </div>
                        <div class="cardTwo card col-lg-4 border-0 shadow-sm"  >
                            <div class="card-body">
                                <img src='./image/website.s_three_columns_default_image_2.jpg' className='cardImage card-img-top' />
                                <br></br>
                                <br></br>
                                <h3 class="card-title">Tailored advice</h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="cardThree card bg-light col-lg-4 border-0 shadow-sm" >
                            <div class="card-body ">
                                <img src='./image/website.s_three_columns_default_image_3.jpg' className='cardImage card-img-top ' />
                                <br></br>
                                <br></br>
                                <h3 class="card-title">For the whole Family</h3>
                                <p class="card-text">Every week our shop receive new products. Some are only on sale for a limited period of time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='Everything'>
                <h1><b>Everything is designed.</b></h1>
                <h1><b>Few things are designed well.</b></h1>
            </div>



            <div className='container mt-5' >
                <div className='row'>
                    <div className='col-lg-4 mt-4'>
                        <img className='w-100' src='./image/website.library_image_13.jpg' alt='Image' />
                        <img className='w-100 mt-4' src='./image/website.library_image_16.jpg' alt='Image' />

                    </div>
                    <div className='col-lg-4 mt-4'>
                        <img className='w-100' src='./image/website.library_image_05.jpg' alt='Image' />
                        <img className='w-100 mt-4' src='./image/website.library_image_03.jpg' alt='Image' />

                    </div>
                    <div className='col-lg-4 mt-4'>
                        <img className='w-100 ' src='./image/website.s_banner_default_image.jpg' alt='Image' />
                        <img className='w-100 mt-4' src='./image/website.library_image_10.jpg' alt='Image' />

                    </div>

                </div>
            </div>
            <div className="Would">
                <h1>Would you like more information <br></br>
                    about a product?</h1> <br></br>
                <div className="ButtonWould">
                    <button className='btn btn1'>Discover More</button>
                    <button className=' btn btn2  d-inline-block'>Discover More</button>

                </div>
            </div>

            <footer className="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
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

export default Home


