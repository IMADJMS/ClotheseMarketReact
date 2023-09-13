import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './shop.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'react-slider';
import Footer from '../Footer/footer';
import FooterTwo from '../Footer/footerTwo';
export default function Shop() {

    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [productSearch, setProductsSearch] = useState([]);
    const [display, setDisplay] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noone, setNoone] = useState('none');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [maxPrice, setMaxPrice] = useState();
    const navigate = useNavigate();

    // Get All Product In Database !!
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/product');
            const productData = response.data;
            setProducts(productData);
            setFilteredProducts(productData);
            const initialMaxPrice = Math.max(...productData.map((item) => item.prix));
            setMaxPrice(initialMaxPrice);
            setPriceRange([0, initialMaxPrice]); // Set the initial price range to include all products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [])

    // Filter Product in Price
    useEffect(() => {
        const filtered = products.filter(
            (item) => item.prix >= priceRange[0] && item.prix <= priceRange[1]
        );
        setFilteredProducts(filtered);
    }, [priceRange, products]);

    const handleChange = (newValues) => setPriceRange(newValues);

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


    // const handleItemClick = (i) => {
    //     navigate(`/shop/${i.idProducts}`);

    // };


    const onBlurr = () => {
        setTimeout(() => {
            setDisplay(false)

        }, 150);
    }


    const filterProductsByPriceLow = () => {
        axios.get('http://127.0.0.1:8000/api/filterLow')
            .then(response => {
                setProducts(response.data);
            })

    };

    const filterProductsByPriceHigh = () => {
        axios.get('http://127.0.0.1:8000/api/filterHigh')
            .then(response => {
                setProducts(response.data);
            })

    };


    const filterProductsByName = () => {
        axios.get('http://127.0.0.1:8000/api/filterName')
            .then(response => {
                setProducts(response.data);
            })

    };


    const filterProductsByLast = () => {
        axios.get('http://127.0.0.1:8000/api/filterLast')
            .then(response => {
                setProducts(response.data);
            })

    };







    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 colRange">
                        <h5> <b>Price Range</b> </h5>
                        <div className="mt-4">
                            <small htmlFor="customRange3" className="form-label">
                                {priceRange[0]}DH
                            </small>
                            <small htmlFor="customRange3" className="form-label smallTwo">
                                {priceRange[1]}DH

                            </small>
                            <Slider
                                className="slider"
                                value={priceRange}
                                onChange={handleChange}
                                min={0}
                                max={maxPrice}
                            />

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
                                        onChange={(e) => { setInputValue(e.target.value) }}
                                        onBlur={() => { onBlurr() }}
                                    />

                                </div>
                            </div>
                            <div className="col-lg-3  ">
                                <span>Sort By :  </span>
                                <div className="dropdown d-inline-block">
                                    <a className="dropdownA btn  dropdown-toggle " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Featured</b>
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className='dropdown-item' onClick={filterProductsByLast}>Newest Arrivals</li>
                                        <li className="dropdown-item" onClick={filterProductsByName}>Name(A-Z)</li>
                                        <li className="dropdown-item" onClick={filterProductsByPriceLow}>Price - Low to High</li>
                                        <li className="dropdown-item" onClick={filterProductsByPriceHigh}>Price - High to Low </li>

                                    </ul>
                                </div>

                            </div>
                        </div>






                        <div className="row">
                            {filteredProducts.map((item) => (
                                <div key={item.id} className="cards col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 " >
                                    <div className="card h-100 border-top-0 border-end-0 border-start-0 ">
                                        <Link to={`/shop/${item.idProducts}`} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                            <img
                                                src={`http://127.0.0.1:8000/storage/product/image/${item.image}`}
                                                height="235"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <p className="card-title mt-2 ">
                                                    {item.title} <span className="m-2 btn btn-danger">Unpublished</span>
                                                </p>
                                                <h6 className="card-text " style={{ marginTop: '-7px' }}>{item.prix}DH</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>









                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            {/* <div style={{marginTop:'1800px'}}> */}
                <FooterTwo />
            {/* </div>w */}



        </>

    )
}




































