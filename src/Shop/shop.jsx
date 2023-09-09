import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './shop.scss'
import 'bootstrap/dist/css/bootstrap.css';

export default function Shop() {

    const [data, setData] = useState();
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [productSearch, setProductsSearch] = useState([]);
    const [display, setDisplay] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noone,setNoone] = useState('none');


    // Get All Product In Database !!
    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/product').then(({ data }) => { setProducts(data) })
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    // Filter Product in Price
    const filterPrix = () => {
        const filterProduitPrix = products.filter(item => item.prix <= MaxPrix)
        setProducts(filterProduitPrix);

    }
    useEffect(() => {
        filterPrix();
    }, [])

    // MaxPrix for get max price in databese and take it to input nubmer
    const MaxPrix = Math.max(...products.map((item) => item.prix));



    // This part for search 

    useEffect(() => {
        if (inputValue === '') {
            // Input is empty, fetch all products
            fetchAllProducts();

        } else {
            // Input is not empty, perform search
            search(inputValue);
        }
    }, [inputValue]);

    const fetchAllProducts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/product');
            if (response.ok) {
                const data = await response.json();
                setProductsSearch(data.slice(0, 5));
                setDisplay(true);
            } else {
                console.log('Not Found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const search = async (searchTerm) => {
        setInputValue(searchTerm);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/search/${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setProductsSearch(data);
                setNotFound(data.length === 0);
                setDisplay(true);
            } else {
                console.log('Not Found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleItemClick = (product) => {
        // Handle item click action here, e.g., redirect to a product page
    };




    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 colRange">
                        <h5> <b>Price Range</b> </h5>
                        <div className='mt-4'>
                            <small for="customRange3" class="form-label">0DH</small>
                            <small for="customRange3" class="form-label smallTwo">{data}DH</small>
                            <input type="range" class="form-range" min="0" max={MaxPrix} step="0.4" id="customRange3" value={data} onChange={(e) => setData(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="Search d-flex">
                                    <input
                                        type="search"
                                        onClick={() => {
                                            setDisplay(true);
                                            setNoone('flex');
                                        }}
                                        list="datalistOptions"
                                        className="form-control "
                                        placeholder="Search..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onBlur={() => setDisplay(false)}
                                    />

                                </div>
                            </div>
                            <div className="col-lg-3 mt-4 ">
                                <span>Sort By :  </span>
                                <div class="dropdown d-inline-block">
                                    <a class="dropdownA btn  dropdown-toggle " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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



                        <div className="row" >
                            {products.map((item) => (
                                <div key={item.id} className="cards col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-4" >
                                    <div className="card h-100 border-top-0 border-end-0 border-start-0 " >
                                        <img
                                            src={`http://laravel-api.local:8000/storage/product/image/${item.image}`}
                                            height="225"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body" >
                                            <p className="card-title">
                                                {item.title} <span className="m-3 btn btn-danger" >Unpublished</span>
                                            </p>
                                            <h6 className="card-text ">{item.prix} DH </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {display && (
                            <div className="listSearch border rounded  col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3" >
                                {notFound ? (
                                    <p className="fw-bolder">Product not found</p>
                                ) : (
                                    productSearch.map((product) => (
                                        <div className="productSearch" key={product.id}>
                                            <a href="" className="list-group-item border-0 w-100" onClick={() => handleItemClick(product)}>
                                                <img
                                                    src={`http://laravel-api.local:8000/storage/product/image/${product.image}`}
                                                    height="50"
                                                    style={{ width: '50px' }}
                                                    alt="..."
                                                />
                                                <h5 className="my-4 mx-4 d-inline-block">{product.title}</h5>
                                                <div  >
                                                    <h6>{product.prix}DH</h6>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}


                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>

    )
}




































