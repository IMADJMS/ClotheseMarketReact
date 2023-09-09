import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Shop/shop.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default function News() {
    const [inputValue, setInputValue] = useState('');
    const [productSearch, setProductsSearch] = useState([]);
    const [display, setDisplay] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [noone, setNoone] = useState('none');

    useEffect(() => {
        const fetchData = async () => {
            if (inputValue === '') {
                fetchAllProducts();
            } else {
                search(inputValue);
            }
        };

        fetchData();
    }, [inputValue]);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/product');
            if (response.status === 200) {
                setProductsSearch(response.data.slice(0, 5));
                setDisplay(true);
                setNotFound(false);
            } else {
                console.log('Not Found');
                setNotFound(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setNotFound(true);
        }
    };

    const search = async (searchTerm) => {
        setInputValue(searchTerm);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/search/${searchTerm}`);
            if (response.status === 200) {
                setProductsSearch(response.data);
                setNotFound(response.data.length === 0);
                setDisplay(true);
            } else {
                console.log('Not Found');
                setNotFound(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setNotFound(true);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
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
                                        className="form-control"
                                        placeholder="Search..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onBlur={() => setDisplay(false)}
                                    />
                                </div>
                            </div>
                        </div>
                        {display && (
                            <div
                                className="border rounded"
                                style={{
                                    display: noone,
                                    width: '637px',
                                    position: 'relative',
                                    bottom: '-20px',
                                    backgroundColor: 'white',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                {notFound ? (
                                    <p className="fw-bolder m-2">Product not found</p>
                                ) : (
                                    productSearch.map((product) => (
                                        <div className="list-group" style={{ display: 'flex' }} key={product.id}>
                                            <a href="#" className="list-group-item border-0 list-group-item-action" >
                                                <img
                                                    src={`http://127.0.0.1:8000/storage/product/image/${product.image}`}
                                                    height="65"
                                                    style={{ width: '50px' }}
                                                    alt="..."
                                                />
                                                <h5 className="my-4 mx-4 d-inline-block">{product.title}</h5>
                                                <hr className="w-100 mb-3" style={{ opacity: '0.1' }} />
                                                <div className="" style={{ display: 'flex', justifyContent: 'end', position: 'relative', bottom: '75px' }}>
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
    );
}          

                                    