import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`http://192.168.11.144:8015/product/show-product-detail?id=${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div>
            <h2>{product.nomProduit}</h2>
            <p>Price: {product.prix}</p>
            {/* Add more product details here */}
        </div>
    );
}
