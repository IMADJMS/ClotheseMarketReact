import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import './shop.scss' ccccccccccccccccccccccccccccccccccc
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';

export default function Shop() {
    const [searchh, setSearchh] = useState([]);
    const [data, setData] = useState();
    const [products, setProducts] = useState([]);
    const [productSearch, setProductsSearch] = useState([])

    useEffect(() => {
        fetchProductsSearch();
    }, [])

    const fetchProductsSearch = async () => {
        await axios.get('http://127.0.0.1:8000/api/product').then(({ data }) => { setProductsSearch(data) })
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/product').then(({ data }) => { setProducts(data) })
    }


    const serach = () => {
        if (serach == '') {
            alert('cc')
            setProducts(products)
        } else {
            setProducts(productSearch)
            setDisplay('none')
        }

    }

    const filterPrix = () => {
        const filterProduitPrix = products.filter(item => item.prix <= MaxPrix)
        setProducts(filterProduitPrix);

    }
    useEffect(() => {
        filterPrix();
    }, [])

    const GetVaulePrix = products.map((item) => item.prix)
    const MaxPrix = Math.max(...GetVaulePrix)





    const search = async (e) => {
        console.warn(e)
        let result = await fetch("http://127.0.0.1:8000/api/search/" + e);
        result = await result.json();
        setProductsSearch(result)
    }
    const [ddisplay, setDisplay] = useState("none");

    const focusInput = () => {
        setDisplay('flex');
    }

    useEffect(() => {
        setDisplay("none")
        console.log("is click")
    })

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 colRange">
                        <h5> <b>Price Range</b> </h5>
                        <div className='mt-4'>
                            <small for="customRange3" class="form-label">0DH</small>
                            <small for="customRange3 " class="form-label smallTwo  ">{data}DH</small>
                            <input type="range" class="form-range" min="0" max={MaxPrix} step="0.4" id="customRange3" value={data} onChange={(e) => setData(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="Search d-flex">

                                    <input type="search" onFocus={focusInput} list="datalistOptions" className='form-control w-75   border-0' placeholder='Search. . .' onChange={(e) => search(e.target.value)} />
                                    <button className=' btn d-inline-block' onClick={serach}>
                                        <img src="./image/ICONS/search .png" width='25' height='25' alt="" srcset="" />
                                    </button>

                                </div>
                            </div>
                            <div className="col-lg-3  colSort">
                                <span>Sort By :  </span>
                                <div class="dropdown d-inline-block">
                                    <a class="dropdownA btn  dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Featured</b>
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Featured</a></li>
                                        <li><a class="dropdown-item" href="#">Newest Arrivals</a></li>
                                        <li><a class="dropdown-item" href="#">Name(A-Z)</a></li>
                                        <li><a class="dropdown-item" href="#">Price - Low to High</a></li>
                                        <li><a class="dropdown-item" href="#">Price - High to Low </a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>



                        <div className="row" style={{ marginTop: '30px' }}>
                            {products.map((item) => (
                                <div key={item.id} className="cards col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-4" style={{}}>
                                    <div className="card h-100 border-top-0 border-end-0 border-start-0 " style={{}}>
                                        <img
                                            src={`http://127.0.0.1:8000/storage/product/image/${item.image}`}
                                            height="200"
                                            style={{ width: '220px' }}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body" style={{ marginTop: '-23px', marginLeft: '-11px' }}>
                                            <p className="card-title" style={{ fontSize: '16px' }}>
                                                {item.title} <span className="m-3 btn btn-danger" style={{ fontSize: '13px', height: '20px', lineHeight: '.5' }}>Unpublished</span>
                                            </p>
                                            <h6 className="card-text " style={{ marginTop: '-13px' }}>{item.prix} DH </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* display: ddisplay, */}
                        <div className=' border  rounded ' style={{ display: ddisplay, width: '637px', position: 'relative', left: '-4px', bottom: '629px', backgroundColor: 'white', flexDirection: 'column' }}>
                            {productSearch.map((i) => (
                                <div className='  mt-3 mx-3 list-group' style={{ display: 'flex' }}>
                                    <a href="" className='list-group-item border-0 list-group-item-action'>
                                        <img
                                            src={`http://127.0.0.1:8000/storage/product/image/${i.image}`}
                                            height="65"
                                            style={{ width: '50px' }}
                                            alt="..."
                                        />
                                        <h5 className='my-4 mx-4 d-inline-block'>{i.title}</h5>
                                        <hr className='w-100 mb-3' style={{ opacity: '0.1' }} />
                                        <div className='' style={{ display: 'flex', justifyContent: 'end', position: 'relative', bottom: '75px' }}>

                                            <h6>{i.prix}DH</h6>
                                        </div>
                                    </a>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>

    )
}

















// {products.map((item) => (

//     <div className="card h-100 border-top-0 border-end-0 border-start-0 w-75" style={{ opacity: '0.7' }}>
//         <img
//             src={`http://127.0.0.1:8000/storage/product/image/${item.image}`}
//             height="230"
//             width="400"
//             className="card-img-top "
//             alt="..."

//         />
//         <div className="card-body " style={{ marginTop: '-10px', marginLeft: '-11px' }}>
//             <p className="card-title " style={{ fontSize: '16px' }}>{item.title} <span className='m3-4 btn btn-danger' style={{ fontSize: '13px', height: '20px', lineHeight: '.5' }} >Unpublished</span></p>
//             <h6 className="card-text ">{item.prix} DH </h6>
//         </div>
//     </div>
// ))}



















