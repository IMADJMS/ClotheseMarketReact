import React from 'react';
import '../news/style.css';
import { FaStar ,FaEye, FaHeart} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';


const News = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href="#" className="image">
                                <img className="pic-1 " src="./image/pexels-photo-14344830.jpeg" alt="Product 1" />
                                <img className="pic-2 " src="./image/website.s_three_columns_default_image_1.jpg" alt="Product 1" />
                            </a>
                            <span className="product-sale-label">News!</span>
                            <ul className="social">
                                <li><a href="#" data-tip="Quick View"><FaEye /></a></li>
                                <li><a href="#" data-tip="Add to wishlist"><FaHeart /></a></li>
                            </ul>
                            <div className="product-rating">
                                <ul className="rating">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <a className="add-to-cart" href="#">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3 className="title fw-bolder"><a href="#" >Men's Shirt</a></h3>
                            <div className="price"><span className='old-n'>$28.00</span >$20.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
