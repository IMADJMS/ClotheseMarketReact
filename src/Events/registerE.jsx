import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './registerE.scss'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterE() {
    const navigate = useNavigate();
    const go = () => {
        navigate('/events')
    }
    return (
        <>

            <div className='parentDivEvents  p-3 shadow-sm p-3 mb-5 bg-body border-top border-bottom' style={{ marginTop: '8px', height: '80px' }}>
                <div className="container  ">
                    <div className="row border-top-3">
                        <div className="divEventRegister col-lg-3  d-flex">
                            <Link to={'/events'} className='nav-link'> <img src="./image/ICONS/left.png" width='30' height='30' alt="" /> All Event</Link>
                        </div>
                        <div className="col-lg-7 mt-1 divRegisterRech" >

                            <div className='SearchEventRegister d-flex ms-5'>
                                <input type="text" className='form-control border ' placeholder='Search. . .' />
                                <button className=' btn d-inline-block ' >
                                    <img src="./image/ICONS/search .png" width='25' height='25' alt="" srcset="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='registerImgaeEvent mb-3' style={{ marginTop: '-47px' }}>

            </div >

            <div className="container-fluid " >
                <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '-110px' }}>
                    <div className="col-lg-9 shadow p-3 mb-5  rounded" style={{ backgroundColor: '#fdfbf8' }} >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h6 className='mt-1'> Registration | <b style={{ color: 'red' }}>FREE</b></h6>
                                </div>
                                <div className="col-lg-5">
                                    <h5 htmlFor="">Qnt   <select class="form-select  d-inline-block" style={{ width: '60px' }} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                        <button className='btn btn-primary ' style={{ position: 'relative', left: '10px', width: '349px' }}>Register</button>

                                    </h5>
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-8" >
                                    <h5>Join us for this 24 hours Event</h5>
                                    <p>
                                        Every year we invite our community, partners and end-users to come and meet us! It's the ideal event to get together and present new features, roadmap of future versions, achievements of the software, workshops, training sessions, etc... This event is also an opportunity to showcase our partners' case studies, methodology or developments. Be there and see directly from the source the features of the 
                                    </p>
                                </div>
                                <div className="col-lg-4 shadow p-3 mb-5  rounded" style={{backgroundColor:'#f3f4f4'}}>
                                <h6 className='ms-5 mt-3'>DATE & TIME</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
