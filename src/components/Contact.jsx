import React from 'react';

import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
            <div className="container contact"  id='contact'>
                <h2 style={{marginBottom:"20px", marginTop:"50px",textAlign:"left",backgroundColor:"black",padding:"20px"}}>Contact Me</h2>
                <div className="contact-icon" data-aos="fade-down"
     data-aos-duration="1000">
                    <a href="mailto:dhrumi.vaidy@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="items"><BiLogoGmail className='icons' /></div></a>
                    <a href="https://linkedin.com/in/dhrumi-vaidya" target='_blank' rel="noopener noreferrer">
                    <div className="items"><FaLinkedin className='icons' /></div></a>
                    <a href="https://github.com/DhrumiV" target='_blank' rel="noopener noreferrer"><div className="items"><FaGithub className='icons' /></div></a>
                    <a href="https://whatsapp.com" target='_blank' rel="noopener noreferrer"><div className="items"><FaWhatsapp className='icons' /></div></a>
                </div>

            </div>

        </>
    )
}

export default Contact
