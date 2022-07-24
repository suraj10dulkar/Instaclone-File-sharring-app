import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./postform.css";
import Image from "./Image/insta.jpg";
import camera from "./Image/camera.jpg"
import Filebase64 from "react-file-base64";

const Postform = () => {
    const Navigate = useNavigate();
    const [postdata, setFormdata] = useState({
        author: "",
        image: "",
        location: "",
        description: ""
    })
    const imageUpload = (id) => {
        setFormdata({ ...postdata, image:id })
    }
    const submitButton =  (e) => {
        e.preventDefault();
        axios({
            url:"https://suraj-file-sharing.herokuapp.com/add",
            method:"POST",
            data : postdata,
            headers :{
            }
           }).then((post)=>{
                Navigate("/Postview")
           }).catch((err)=>{
            console.log(err)
           })
           console.log(postdata)
           setFormdata({author:"",location:"",description:"",image : ""})
    }
    return (
        <>
            <header className='head'>
                <img src={Image} alt='insta' width={160} height={50} className='inst_font'/>
                <div className='click'>
                <img src={camera} alt="camera" className='camera'></img>
                </div>
            </header>
            <hr></hr>
            <div className='form_box'>
                <form className='form' onSubmit={submitButton} method='POST'>
                    <div className="file">
                        <Filebase64 type='file' multiple={false} onDone = {({base64})=> imageUpload(base64)} id="file" />
                        </div>
                    <div className='inline_box'>
                        <div className='elem1'>
                            <input type="text" id='author' value={postdata.author} name="author" placeholder='Author' onChange={e=> setFormdata({...postdata, author:e.target.value})}></input>
                        </div>
                        <div className='elem2'>
                            <input type="text" id='location' value={postdata.location} name="location" placeholder='Location' onChange={e=> setFormdata({...postdata, location:e.target.value})}></input>
                        </div>
                    </div>
                    <input type="text" id='description' value={postdata.description} name="description" className='form-description' placeholder='Description' onChange={e=> setFormdata({...postdata, description:e.target.value})}></input>
                    <div className='form-button-division'>
                        <button className='button'>Post</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Postform;