import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

export default function Users() {
    const [user, setUset] = useState([]);
    const [value , setValue]= useState();

    // useEffect(() => {
    //     axios.get("https://api.github.com/users").then((res) => {
    //         setUset(res.data)
    //     })
    // },[])

    // const delet = (id) => {
    //     if (window.confirm('Is deleted')) {
    //         const deleteParId = user.filter(item => item.id !== id)
    //         setUset(deleteParId)

    //     }
    // }



    const Search = ()=>{
        axios.get(`https://api.github.com/users/${value}`).then((res) => {
            setUset(res.data)
        })

        
        

    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <input type="text" onChange={(e)=>{setValue(e.target.value)}} />
                    <button className='btn btn-primary' onClick={Search}>Search</button>
                    </div>

                        <div className="col-lg-4 mt-3">
                            {/* <div key={user.id} className="card" style={{ width: "18rem" }}>
                                <img src={user.avatar_url} class="card-img-top" alt="..." />
                                <div class="card-body"> */}
                                    <h5 class="card-title">{user.login}</h5>
                                    {/* <p class="card-text">{user.subscriptions_url}</p>
                                    <a href={user.html_url} target='_blank' class="btn btn-primary">Show Profile</a>
                                    <button className='btn btn-danger m-2' onClick={() => delet(user.id)}>Delet</button> */}
                                {/* </div>
                            </div> */}
                        </div>



                </div>
            </div>



        </>
    )

}
