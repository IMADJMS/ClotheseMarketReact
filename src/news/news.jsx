<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function News() {
    const [searchTerm, setSearchTerm] = useState('');
    const [productSearch, setProductSearch] = useState([]);
    const [display, setDisplay] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate(); // Hook to handle navigation

    const handleItemClick = (product) => {
        // Navigate to the SingleProduct page with the product's ID as a parameter
        navigate(`/shop/${product.idProducts}`);
    };

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setDisplay(false);
            return;
        }

        axios.get(`http://127.0.0.1:8000/api/searchProducts?term=${searchTerm}`)
            .then(response => {
                setProductSearch(response.data);
                setDisplay(true);
                setNotFound(response.data.length === 0);
            })
            .catch(error => {
                console.error(error);
            });
    }, [searchTerm]);

    return (
        <div className="autocomplete-search">
            <br /><br /><br /><br /><br /><br /><br />
            <input
                type="text"
                placeholder="Search for products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {display && (
                <div className="listSearch border rounded">
                    {notFound ? (
                        <p className="fw-bolder">Product not found</p>
                    ) : (
                        productSearch.map((product) => (
                            <div className="productSearch" key={product.idProducts}>
                                <a className="list-group-item border-0 w-100" onClick={() => handleItemClick(product)}>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/product/image/${product.image}`}
                                        height="50"
                                        style={{ width: '50px' }}
                                        alt="..."
                                    />
                                    <h5 className="my-4 mx-4 d-inline-block">{product.title}</h5>
                                    <div>
                                        <h6>{product.prix} DH</h6>
                                    </div>
                                </a>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
=======
>>>>>>> Stashed changes
