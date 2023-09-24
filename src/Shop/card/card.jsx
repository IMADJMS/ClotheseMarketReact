import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaStar, FaEye, FaHeart } from 'react-icons/fa';
import '../card/card.scss'
// import '../../news/style.css'
export default function Card(props) {

    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-9 col-xl-4 col-xxl-4   mt-3" style={{ width: '290px' }}>
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img className="pic-1 w-100"  src={`http://127.0.0.1:8000/storage/product/image/${props.item.image}`} alt="Product 1" />
                            <img className="pic-2 w-100" src={`http://127.0.0.1:8000/storage/product/image/${props.item.image}`} alt="Product 2" />
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
                        <h3 className="title fw-bolder"><a href="#" >{props.item.title}</a></h3>
                        <div className="price"><span className='old-n'>${props.item.prix}</span >${props.item.prix}</div>
                    </div>
                </div>
            </div>
        </>

    )
}




































