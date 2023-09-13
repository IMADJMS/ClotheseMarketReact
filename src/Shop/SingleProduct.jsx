import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`http://127.0.0.1:8000/api/showDetails/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.prix}</p>
            {/* Add more product details here */}
        </div>
    );
}
