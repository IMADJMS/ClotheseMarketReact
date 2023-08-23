import React, { useEffect, useState } from 'react'
import './events.scss'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function Events() {


    const [events, setEvents] = useState([])
    useEffect(() => {
        fetchEvents();
    }, [])
    const fetchEvents = async () => {
        await axios.get('http://127.0.0.1:8000/api/events').then(({ data }) => { setEvents(data) })
    }

    return (
        <>
            <div className='parentDivEvents p-3 shadow-sm p-3 mb-5 bg-body'>
                <div className="container  ">
                    <div className="row border-top-3">
                        <div className="divEvent col-lg-3 mt-3 d-flex">
                            <h3>Events</h3>

                        </div>
                        <div className="col-lg-7 mt-3 divDropRech" >
                            <div class="dropdown">
                                <button class="btn btn-light border dropdown-toggle" style={{ width: '230px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./image/ICONS/calendar.png" width='20' height='20' alt="" /> <span className='ms-1'>Upcoming Events</span>
                                </button>
                                <ul class="dropdown-menu" >
                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">All Events</a></li>
                                </ul>
                            </div>
                            <div className='SearchE d-flex ms-5'>
                                <input type="text" className='form-control border ' placeholder='Search. . .' />
                                <button className=' btn d-inline-block ' >
                                    <img src="./image/ICONS/search .png" width='25' height='25' alt="" srcset="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ms-5 mt-3">
                    {events.map((item) => (
                        <div className="col-lg-4 col-md-6  mb-4" value={item.title} >
                            <div class="card cardEvents ">
                                <img src="./image/event_cover.jpg" width='400' height='200' class="card-img-top w-100" alt="..." />
                                <button className='btn btn-danger w-100 ' >
                                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                                        <img src="./image/ICONS/stop.png" width='15' height='15' className=' me-2' alt="" srcset="" /> <small className='me-3' style={{ lineHeight: '1.3' }}>Unpublished</small>
                                    </div>
                                </button>
                                <div class="card-body">
                                    <h5 class="card-title text-danger" onClick={Cookies.set('Event',item.title)}>{item.title}</h5>
                                    <p class="card-text"><span>{item.dateDubet}  (Africa/Casablanca)</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                    }


                    {/* <div className="col-lg-4 col-md-6  mb-4">
                        <div class="card cardEvents ">
                            <img src="./image/website.s_text_image_default_image.jpg" width='400' height='200' class="card-img-top w-100" alt="..." />
                            <button className='btn btn-danger w-100 ' >
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <img src="./image/ICONS/stop.png" width='15' height='15' className=' me-2' alt="" srcset="" /> <small className='me-3' style={{ lineHeight: '1.3' }}>Unpublished</small>

                                </div>
                            </button>
                            <div class="card-body">
                                <h5 class="card-title text-danger">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title </p>
                            </div>
                        </div>
                    </div> */}









                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </>
    )
}







