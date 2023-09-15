import React, { useState , useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Users = () => {
    const [user, setUser] = useState([]);
    const [value, setValue] = useState('');
    const [time , setTime] = useState('is null');


const getUsers = ()=>{
    axios.get("https://api.github.com/users").then((res) => {
                setUser(res.data)
            })
}

useEffect(() => {
    getUsers();
}, [])

    const fetchData = () => {
        if (value == "") {
            axios.get("https://api.github.com/users").then((res) => {
                
                setUser(res.data)
            
            })
        } else {
            setUser("")
            axios.get(`https://api.github.com/search/users?q=${value}`).then((res) => {
            
            
        
                

                setTimeout(() => {
                setUser(res.data.items)
                
                }, 4000);            })

        }


    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 mt-3">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className='form-control d-inline-block'
                    />
                    <button onClick={fetchData} className='btn btn-primary mt-2'>Search</button>
                </div>


                {(user.length> 0) ? user.map((item) => (
                    <div className="col-lg-4 mt-4">
                        <div className="card" style={{ width: "18rem" }} >
                            <img src={item.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                                <p className="card-text">{item.subscriptions_url}</p>
                                <a href={item.html_url} target='_blank' className="btn btn-primary">Show Profile</a>
                            </div>
                        </div>
                    </div>



                )) :  (<h1>Att</h1>) }
            </div>
        </div>
    );
};

export default Users;
