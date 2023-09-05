import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function News() {
    const navigate= useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [productSearch, setProductsSearch] = useState([]);
    const [display, setDisplay] = useState(false);

    const search = async (e) => {
        const searchTerm = e.target.value;
        setInputValue(searchTerm);

        if (searchTerm === '') {
            setProductsSearch([]);
            setDisplay(false);
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/search/${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setProductsSearch(data);
                setDisplay(true);
            } else {
                console.log('Not Found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleItemClick = (e) => {
        navigate('shop');
    };

    return (
        <>
            <br /><br /><br /><br /><br /><br />
            <input
                type="search"
                onClick={() => setDisplay(true)}
                list="datalistOptions"
                className="form-control w-75 border-0"
                placeholder="Search..."
                value={inputValue}
                onChange={search}
            />
            {display && (
                <div className="border rounded" style={{ width: '637px', position: 'relative', left: '-4px', bottom: '681px', backgroundColor: 'white', flexDirection: 'column' }}>
                    {productSearch.map((i) => (
                        <div className="list-group" style={{ display: 'flex' }} key={i.id}>
                            <a href="#" className="list-group-item border-0 list-group-item-action" onClick={() => handleItemClick(i)}>
                                <img
                                    src={`http://127.0.0.1:8000/storage/product/image/${i.image}`}
                                    height="65"
                                    style={{ width: '50px' }}
                                    alt="..."
                                />
                                <h5 className="my-4 mx-4 d-inline-block">{i.title}</h5>
                                <hr className="w-100 mb-3" style={{ opacity: '0.1' }} />
                                <div className="" style={{ display: 'flex', justifyContent: 'end', position: 'relative', bottom: '75px' }}>
                                    <h6>{i.prix}DH</h6>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default News;
