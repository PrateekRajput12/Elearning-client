import React from 'react'
import './footer.css'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (

        <footer footer >
            <div className='footer-content'>
                <p className=''>
                    &copy; 2024 Your E-Learning Platform. All rights reserved.<br />
                    Made with <a href=''>Prashant Kumar</a>
                </p>
                <div className='social-links'>
                    <a href=''><AiFillFacebook></AiFillFacebook></a>
                    <a><AiOutlineTwitter /></a>
                    <a><AiFillInstagram /></a>

                </div>
            </div>
        </footer >
    )
}

export default Footer