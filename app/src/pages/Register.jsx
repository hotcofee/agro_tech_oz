import React, { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useState } from 'react'
import { loadPhoto } from '../firebase/fireabse.config'
import { getData, postData } from '../axios/axios.api'
import Code from '../components/Code'
//componentes and librarys

function Register() {
    // data set
    const [data, setData] = useState({
        user_id: "",
        img_profile: "",
        full_name: "",
        email: "",
        number: "",
        profession: "",
        roll_company: ""
    })
    // photo set
    const [file, setFile] = useState(null)
    // handlechange, input text load
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    // useEffect load primary function
    useEffect(() => {
        async function getDataF() {
            const peticion = await getData()
            console.log(peticion);
        }
        getDataF()
    },)
    // load photo and send data to API function
    const submit = async e => {
        e.preventDefault()

        const send = await postData(data);
        console.log(send);

    }
    const temporal_upload = async e => {
        e.preventDefault()
        try {
            const url = await loadPhoto(file)
            setData(prevData => ({
                ...prevData,
                img_profile: url
            }));
            document.getElementById("left_box_url").classList.add("act")
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const location_false = async () => {
        document.getElementById("false").classList.add("act")
        document.getElementById("true").classList.add("des")
        toast.error("Error location!")
    }

    const location_true = () => {
        document.getElementById("false").classList.remove("act")
        document.getElementById("true").classList.remove("des")
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            alert(lat, lon)
        })
    }

    window.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
            document.getElementById("temporal").classList.remove("act")
            document.getElementById("left_box_url").classList.remove("act")
        }
    })
    return (
        <div>
            {/* temporal code */}
            <Toaster position='bottom-right' />
            <Code />
            <div className="register_container">
                {/* <div className="circles_desing">
                    <div className="circle_one">
                        <div className="circle_two">
                            <div className="circle_three">
                                <div className="circle_four"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* menu register start */}
                {/* <div className="menu_register_container">
                        <div>
                            <Link to="/">Register</Link>
                            <Link to='/'>Log in</Link>
                        </div>
                    </div> */}
                {/* menu regisgter end */}
                <div className="register_data">
                    <div className="register_form_data">
                        <form onSubmit={submit}>

                            <div className="first_form_section">
                                <div className="filter">
                                    <div className="text">
                                        <p>Create your account!</p>
                                        <span>And describe the world</span>
                                    </div>
                                </div>
                            </div>
                            <div className="second_form_section">
                                <div className="div">
                                    <input type="text" placeholder='Full name' name='full_name' id='name' onChange={handleChange} required />
                                    <button type='button' className='show_box_img' onClick={() => {
                                        document.getElementById("temporal").classList.add("act")
                                    }}> <ion-icon name="camera-outline"></ion-icon>Upload a photo</button>
                                </div>
                                <div className="div">
                                    <input type="email" placeholder='Email' required name='email' onChange={handleChange} />
                                    <input type="number" placeholder='Number' required name='number' onChange={handleChange} />
                                </div>
                                <div className="div">
                                    <input type="text" placeholder='Profession' required name='profession' onChange={handleChange} />
                                    <input type="text" placeholder='Roll company' required name='roll_company' onChange={handleChange} />
                                </div>

                                <div className="line">
                                    <hr />
                                    <label>o</label>
                                    <hr />

                                </div>

                                <div className="div">
                                    <div className="location">
                                        <span>Do you can share your location?</span>
                                        <div className="location_bottons">
                                            <button className='no' id='false' onClick={location_false} type='button'>No</button>
                                            <button className='yes' id='true' onClick={location_true} type='button'>Yes</button>
                                        </div>
                                    </div>
                                    {/* <div className="workers">
                                        <p>Worker team</p>
                                        <div className="numer_workers_section">
                                            <span>3 <sup>+</sup></span>
                                            <span>5 <sup>+</sup></span>
                                            <span>7 <sup>+</sup></span>
                                        </div>
                                    </div> */}

                                </div>
                                <div className="register_up_botton">
                                    <button type='submit'>Register now</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* formulario temporal */}
            <div className="left_box_url" id='left_box_url'>
                <img src={data.img_profile} alt="" />
                <a href={data.img_profile}>View your photo</a>
            </div>
            <div className="temporal_form" id='temporal'>
                <form className='temporal_form_data' onSubmit={temporal_upload}>
                    <label htmlFor="upload_file_input">Select Img</label>
                    <input type="file" name='upload_file_input' id='upload_file_input' required onChange={e => setFile(e.target.files[0])} />
                    <button type='submit'>Viva el rojo (upload)</button>
                </form>
            </div>
        </div>
    )
}

export default Register
