import React from 'react'
import './services.scss'

export default function Services() {
    return (
        <>
            <div className='Services'>
                <h1 className='Services-h1'>Services</h1>
            </div >

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



            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="image/website.library_image_13.jpg" class="d-block w-100" style={{ height: '50vh' }} alt="image" />
                        <div class="Test carousel-caption bg-light text text-dark w-50 d-md-block">
                            <p>Write a quote here from one of your customers. Quotes are a <br /> great way to build confidence in your products or services.</p>
                            <span className='d-inline-block me-3'>Jane DOE • CEO of MyCompany</span>
                            <img src="image/website.s_company_team_image_1.jpg" alt="imga" className='img-fluid rounded-circle mx-auto me-5 d-inline-block' />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="image/website.s_quotes_carousel_demo_image_2.jpg" class="d-block w-100" style={{ height: '50vh' }} alt="image" />
                        <div class="Test carousel-caption bg-light text text-dark w-50 d-md-block">
                            <p>Write a quote here from one of your customers. Quotes are a <br /> great way to build confidence in your products or services.</p>
                            <span className='d-inline-block me-3'>Jane DOE • CEO of MyCompany</span>
                            <img src="image/website.s_company_team_image_2.jpg" alt="imga" className='img-fluid rounded-circle mx-auto me-5 d-inline-block' />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="image/website.s_quotes_carousel_demo_image_1.jpg" class="d-block w-100" style={{ height: '50vh' }} alt="image" />
                        <div class="Test carousel-caption bg-light text text-dark w-50 d-md-block">
                            <p>Write a quote here from one of your customers. Quotes are a <br /> great way to build confidence in your products or services.</p>
                            <span className='d-inline-block me-3'>Jane DOE • CEO of MyCompany</span>
                            <img src="image/website.s_company_team_image_3.jpg" alt="imga" className='img-fluid rounded-circle mx-auto me-5 d-inline-block' />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
