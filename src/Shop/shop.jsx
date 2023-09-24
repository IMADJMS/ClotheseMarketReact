import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Slider from 'react-slider';
import FooterTwo from '../Footer/footerTwo';
import Card from './card/card';
import './shop.scss'


export default function Shop() {

    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [productSearch, setProductsSearch] = useState([]);
    const [display, setDisplay] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [maxPrice, setMaxPrice] = useState();
    const [margin, setMargin] = useState('1100px');
    const navigate = useNavigate();



    // **************************************************All url****************************************************
    const urlAxiosAllProduct = "http://127.0.0.1:8000/api/product" // "http://192.168.11.144:8015/product/all-product"
    const urlAxiosSearch = "http://127.0.0.1:8000/api/search/${searchTerm}" //`http://192.168.11.144:8015/product/search-by-title?title=${searchTerm}`
    const urlAxiosFilterLow = "http://127.0.0.1:8000/api/filterLow" // "http://192.168.11.144:8015/product/all-product-by-price-asc"
    const urlAxiosFilterHigh = "http://127.0.0.1:8000/api/filterHigh" // "http://192.168.11.144:8015/product/all-product-by-price-desc"
    const urlAxiosFilterName = "http://127.0.0.1:8000/api/filterName" // "http://192.168.11.144:8015/product/search-by-title"
    // *************************************************************************************************************


    const fetchProducts = async () => {
        try {
            const response = await axios.get(urlAxiosAllProduct);
            const productData = response.data;
            setProducts(productData);
            setFilteredProducts(productData);
            const initialMaxPrice = Math.max(...productData.map((item) => item.prix));
            setMaxPrice(initialMaxPrice);
<<<<<<< Updated upstream
            setPriceRange([0, initialMaxPrice]); // Set the initial price range to include all products
=======
            setPriceRange([0, initialMaxPrice]);
>>>>>>> Stashed changes
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [])

    //******************************************* All filter ********************************************************
    useEffect(() => {
        const filtered = products.filter(
            (item) => item.prix >= priceRange[0] && item.prix <= priceRange[1]
        );
        setFilteredProducts(filtered);
    }, [priceRange, products]);
    const handleChange = (newValues) => setPriceRange(newValues);
    const filterProductsByPriceLow = () => {
        axios.get(urlAxiosFilterLow)
            .then(response => {
                setProducts(response.data);
            })

    };
    const filterProductsByPriceHigh = () => {
        axios.get(urlAxiosFilterHigh)
            .then(response => {
                setProducts(response.data);
            })

    };
    const filterProductsByName = () => {
        axios.get(urlAxiosFilterName)
            .then(response => {
                setProducts(response.data);
            })

    };

    // *************************************************************************************************************


    //***************************************This part for search***************************************************

   const yy =  useEffect(() => {
        if (inputValue === '') {
            ProductsSearch();

        } else {
            search(inputValue);
        }
    },[inputValue]);

    setTimeout(() => {
        yy()
    }, 1000);

    const ProductsSearch = async () => {
        try {
            const response = await fetch(urlAxiosAllProduct);
            if (response.ok) {
                const data = await response.json();
                const min = 0;
                const max = 5
                setProductsSearch(data.slice(min, max));
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
        
        const response = await axios.get(urlAxiosAllProduct);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/search/${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setProductsSearch(data);
                // setNotFound(data.length === 0);
                setDisplay(true); // Show search results
            } else {
                console.log('Not Found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

<<<<<<< Updated upstream

    // const handleItemClick = (i) => {
    //     navigate(`/shop/${i.idProducts}`);

    // };


=======
>>>>>>> Stashed changes
    const onBlurr = () => {
        setTimeout(() => {
            setInputValue('')
            setNotFound(false)
            setMargin('1100px')
        }, 150);
    }
const [aa ,setAa] = useState('-350px')
    // useEffect(() => {
    //     if (notFound === true) {
    //         // alert('dd')
    //         setMargin('');
    //         setAa('-61px')
    //     }
    // }, [notFound]);

    // *************************************************************************************************************


<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

const [fe , setFe] = useState('')
useEffect(()=>{
    if (notFound === true) {
        setAa('-61px')
    }
    if (productSearch.length == 2  ) {
        setAa('-141px')
    }
    if (productSearch.length == 5) {
        setAa('-350px')

<<<<<<< Updated upstream
    const filterProductsByLast = () => {
        axios.get('http://127.0.0.1:8000/api/filterLast')
            .then(response => {
                setProducts(response.data);
            })
=======
    }
})
>>>>>>> Stashed changes

    };







    return (
        <>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-lg-3  colRange " >
                        <h5 className='Range'> Price Range </h5>
                        <div className="mt-4">
                            <small htmlFor="customRange3" className="form-label smallOne" >
                                ${priceRange[0]}
                            </small>
                            <small htmlFor="customRange3" className="form-label smallTwo" >
                                ${priceRange[1]}

                            </small>
                            <Slider
                                className="slider"
                                value={priceRange}
                                onChange={handleChange}
                                min={0}
                                max={maxPrice}
                            />

                        </div>
                        <ul class="list-group mt-4" >
                            <li class="list-group-item">{aa}</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>

                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-8">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="Search d-flex">
                                            <input
                                                type="search"
                                                onClick={() => {
                                                    // setDisplay(true);
                                                    // setNoone('flex');
                                                    setMargin('');
                                                }}
                                                list="datalistOptions"
                                                className="form-control h-25 w-100"
                                                placeholder="Search..."
                                                value={inputValue}
                                                onChange={(e) => {
                                                    setInputValue(e.target.value);
                                                }}
                                                onBlur={() => {
                                                    onBlurr();
                                                }}
                                            />
                                            <br />


                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        {display && (
                                            <div className="listSearch border rounded  col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3" style={{ position:'relative',right:margin  }}>
                                                {notFound ? (
                                                    <>
                                                        <p className="fw-bolder" >Product not found</p>
                                                    </>
                                                ) : (
                                                    productSearch.map((i) => (
                                                        <div className="productSearch"  key={i.id}>
                                                            <a className="list-group-item border-0 w-100" onClick={() => { navigate(`/shop/${i.id}`) }}>

                                                                <img
                                                                    src={i.image}
                                                                    height="50"
                                                                    style={{ width: '50px' }}
                                                                    alt="..."
                                                                />
                                                                <h5 className="my-4 mx-4 d-inline-block">{i.nomProduit}</h5>

                                                                <div  >
                                                                    <h6>{i.prix}DH</h6>
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
                            <div className="col-lg-3  ">
                                <span>Sort By :  </span>
                                <div className="dropdown d-inline-block">
                                    <a className="dropdownA btn  dropdown-toggle " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Featured</b>
                                    </a>

<<<<<<< Updated upstream
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className='dropdown-item' onClick={filterProductsByLast}>Newest Arrivals</li>
=======
                                    <ul className="dropdown-menu  " aria-labelledby="dropdownMenuLink">
>>>>>>> Stashed changes
                                        <li className="dropdown-item" onClick={filterProductsByName}>Name(A-Z)</li>
                                        <li className="dropdown-item" onClick={filterProductsByPriceLow}>Price - Low to High</li>
                                        <li className="dropdown-item" onClick={filterProductsByPriceHigh}>Price - High to Low </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
<<<<<<< Updated upstream






                        <div className="row">
                            {filteredProducts.map((item) => (
                                <div key={item.id} className="cards col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 " >
                                    <div className="card h-100 border-top-0 border-end-0 border-start-0 ">
                                        <Link to={`/shop/${item.id}`} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                            <img
                                                // src={`http://127.0.0.1:8000/storage/product/image/${item.image}`}
                                                height="235"
                                                className="card-img-top"
                                                alt="..."
                                                src={item.image}
                                            />
                                            <div className="card-body">
                                                <p className="card-title mt-2 ">
                                                    {item.nomProduit} <span className="m-2 btn btn-danger">Unpublished</span>
                                                </p>
                                                <h6 className="card-text " style={{ marginTop: '-7px' }}>{item.prix}DH</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>



                        {display && (
                            <div className="listSearch border rounded  col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3" style={{ display: noone }}>
                                {notFound ? (
                                    <p className="fw-bolder">Product not found</p>
                                ) : (
                                    productSearch.map((i) => (
                                        <div className="productSearch" key={i.idProducts}>
                                            <a className="list-group-item border-0 w-100" >

                                                <img
                                                    // src={`http://127.0.0.1:8000/storage/product/image/${i.image}`}
                                                    height="50"
                                                    style={{ width: '50px' }}
                                                    alt="..."
                                                    src={i.image}

                                                />
                                                <h5 className="my-4 mx-4 d-inline-block">{i.nomProduit}</h5>

                                                <div  >
                                                    <h6>{i.prix}DH</h6>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                )}
=======
                        <div className="container mt-5">
                            <div className="row" style={{ marginTop: aa , marginLeft:'-35px'}} >
                                {filteredProducts.map((item) => (
                                    <Card item={item} key={item.id} />
                                ))}
>>>>>>> Stashed changes
                            </div>
                        </div>




                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
            <br /><br /><br /><br /><br />
            {/* <div style={{marginTop:'1800px'}}> */}
                {/* <FooterTwo /> */}
            {/* </div>w */}


=======
>>>>>>> Stashed changes

        </>

    )
}




































