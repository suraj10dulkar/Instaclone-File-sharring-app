import React from 'react';
import {useEffect, useState} from 'react';
import './postview.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Image from "./Image/insta.jpg";
import camera from "./Image/camera.jpg"

function Postview() {
    const [postData, setPostData] = useState([]);
    useEffect(()=>{
        axios.get("https://suraj-file-sharing.herokuapp.com/image").then((res)=>{
            let data = res.data.reverse();
            setPostData(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

     return (
            <>
        <header className='head'>
                <img src={Image} alt='insta' width={160} height={50} className='inst_font'/>
                <div className='click'>
                <Link to='/Postform'><img src={camera} alt="camera" className='camera'></img></Link>
                </div>
        </header>
        <hr></hr>
        <div className='cart'>
            {postData.map((data, index) => {
                return (
                    <ul key={index} className='cart_child' type="none">
                        <li className='row1 '>
                            <div className='margin'>
                                <h2>{data.author}</h2>
                                <span className='loc'>{data.location}</span>
                            </div>
                            <div className='dots'>
                            <span class="material-symbols-outlined Margin"><b>more_horiz</b></span>
                            </div>
                        </li>
                        <li className='row2'>
                            <img src={data.image} alt='Post' width="100%"  height={250}/>
                        </li>
                        <li className='row1'>
                            <div className='row3'>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined">near_me</span>
                                <h6 className='like'>{data.likes}  Likes</h6>
                            </div>
                            <span className='date'>{data.date}</span>
                        </li>
                        <li>
                            <h4 className='row1 des'>{data.description}</h4>
                        </li>
                    </ul>
                )
            })}
        </div>
        </>
     )

} 
export default Postview;