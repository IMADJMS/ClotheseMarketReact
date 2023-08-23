// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import Footer from "../Footer/footer";
// export default function News() {

//     const navigate = useNavigate();

//     const [title, setTitle] = useState('')
//     const [prix, setPrix] = useState('')
//     const [image, setImage] = useState('')

//     const changeHandler = (e) => {
//         setImage(e.target.files[0]);
//         console.log(e.target.files[0])
//     }

//     const createProduct = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('title', title)
//         formData.append('prix', prix)
//         formData.append('image', image)

//         console.log(formData)
//         await axios.post('http://127.0.0.1:8000/api/product', formData)
//             .then(({ data }) => {
//                 console.log(data.message)
//                 navigate('/news')
//             }).catch(({ response }) => {
//                 if (response.status == 422) {
//                     console.log(response.data.errors)
//                 } else {
//                     console.log(response.data.message)
//                 }
//             })
//     }

//     const [inputValue, setInputValue] = useState(0);
//     const [maxValue, setMaxValue] = useState(0);
//     const [minValue, setMinValue] = useState(0);

//     useEffect(() => {
//         if (inputValue > maxValue) {
//             setMaxValue(inputValue);
//         }

//         if (inputValue < minValue) {
//             setMinValue(inputValue);
//         }
//     }, [inputValue]);

//     return (
//         <>
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="conl-12 col-sm-12 col-md-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <h3 className="card-title"> Create Form</h3>
//                             <hr></hr>
//                             <div className="from-wrapper">

//                                 <form onSubmit={createProduct}>

//                                     <div className="mb-3">
//                                         <label className="form-label">Title  </label>
//                                         <input type="text" className="form-control"
//                                             value={title}
//                                             onChange={(e) => { setTitle(e.target.value) }}
//                                         />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Example textarea</label>
//                                         <input className="form-control"
//                                             value={prix}
//                                             onChange={(e) => { setPrix(e.target.value) }}
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label">Title  </label>
//                                         <input type="file" className="form-control"

//                                             onChange={changeHandler}
//                                         />
//                                     </div>

//                                     <div className="mb-3">
//                                         <button type="submit" className="btn btn-primary mb-3">  Save</button>
//                                     </div>

//                                 </form>



//                             </div>


//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>

// {/* <Footer/> */}

//         </>
//         // <>
//         //     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         //     <input type="range" min={0} max={100} value={inputValue} onChange={(event) => setInputValue(Number(event.target.value))} />
//         //     <div>
//         //         Maximum Value: {maxValue}
//         //     </div>
//         //     <div>
//         //         Minimum Value: {minValue}
//         //     </div>
//         // </>

//     )




// }


import React, { useState } from "react";
// import "./SearchBar.css"; // Don't forget to create and import the CSS file for styling

function News({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <span className="search-icon">&#128269;</span> // Search icon (you can use an appropriate Unicode character)
                    ) : (
                        <span className="close-icon" onClick={clearInput}>&times;</span> // Close icon (you can use an appropriate Unicode character)
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank" key={key}>
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default News;
