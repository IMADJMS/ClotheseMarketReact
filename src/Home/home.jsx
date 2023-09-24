import React from 'react'
import './home.scss';
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from 'react-router-dom';
import '../Footer/footer.scss'
import '../Footer/footer'
import Footer from '../Footer/footer';
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
                    <button className='btn btn2  d-inline-block'>Discover More</button>
                </div>
            </div>
        {/* <Footer/> */}

        </>

    )
}

export default Home


