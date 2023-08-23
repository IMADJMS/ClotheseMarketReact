import React from 'react'
import './about.scss'
function About() {
    return (
        <>
            <div className='AboutUs'>
                <h1 className='AboutUs-h1'>About Us</h1>
            </div >

            <div className='ParanetSection ' style={{ backgroundColor: '#B3AD9B' }}>
                <div className="container  AboutUs-section">
                    <div className="row align-items-center" >
                        <div className="col-lg-6   ">
                            <h2 style={{ color: 'white' }}>A Section Subtitle</h2>
                            <p>Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers.</p>
                            <p>Start with the customer find out what they want and give it to them. </p>
                            <button className='AboutUs-button btn mt-2'>Learn More</button>
                        </div>
                        <div className="colIMage col-lg-6 mt-5 align-items-center " >
                            <img src="/image/website.s_text_image_default_image.jpg" className='image' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ParanetSection ' style={{ backgroundColor: 'wheit' }}>
                <div className="container  AboutUs-section">
                    <div className="row align-items-center" >
                        <div className="col-lg-6   ">

                            <img src="/image/website.s_image_text_default_image.jpg" className='image' alt="" />

                        </div>
                        <div className="colIMage col-lg-6 mt-5 align-items-center " >
                            <h2 style={{ color: '#162719' }}>A Section Subtitle</h2>
                            <p>Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers.</p>
                            <p>Start with the customer find out what they want and give it to them. </p>
                            <button className='AboutUs-button btn mt-2'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Everything'>
                <h1><b>Everything is designed.</b></h1>
                <h1><b>Few things are designed well.</b></h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <img src='/image/website.s_company_team_image_1.jpg' className='img-fluid rounded-circle mx-auto' alt='IMage' />
                            </div>
                            <div className="col-lg-8">
                                <h4>Tony Fred, CEO</h4>
                                <p>Founder and chief visionary, Tony is the driving force behind the company. He loves to keep his hands full by participating in the development of the software, marketing, and customer experience strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5" >
                        <div className="row">
                            <div className="col-lg-4">
                                <img src='/image/website.s_company_team_image_2.jpg' className='img-fluid rounded-circle mx-auto' alt='IMage' />
                            </div>
                            <div className="col-lg-8">
                                <h4>Mich Stark, COO</h4>
                                <p>Mich loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Mich has helped the company to get where it is today. Mich is among the best minds.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <img src='/image/website.s_company_team_image_3.jpg' className='img-fluid rounded-circle mx-auto' alt='IMage' />
                            </div>
                            <div className="col-lg-8">
                                <h4>Aline Turner, CTO</h4>
                                <p>Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house developers and looks after the community of thousands of developers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5" >
                        <div className="row">
                            <div className="col-lg-4">
                                <img src='/image/website.s_company_team_image_4.jpg' className='img-fluid rounded-circle mx-auto' alt='IMage' />
                            </div>
                            <div className="col-lg-8">
                                <h4>Iris Joe, CFO</h4>
                                <p>Iris, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success and delivers her professional acumen to bring the company to the next level.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />

        </>
    )
}

export default About