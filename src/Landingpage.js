import './Landingpage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from "./Image/routing-banner.jpg";

const LandingPage = () => {
    return(
        <>
        <div className='main'>
        <div className='component1'>
        <img src={Image} alt='image1' width={400} height={600}/>
        </div>
        <div className='component2'>
        <p>InstaClone Landing Page</p>
        <Link to='/Postview'><button type='button' className='btn'>Enter</button></Link>
        </div>
        </div>
        </>
    )
}
export default LandingPage;