import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'
import pdf from '../components/pdf/DhrumiVaidyaResume.pdf';


const Home = () => {
    const typedRef = useRef(null)
    useEffect(() => {
        const options = {
            strings: ["Welcome to my Portfolio", "MySelf  Dhrumi Vaidya", "I am a Aspiring FrontEnd Develeper", "I love to create eye-catching designs to enhance User Experince"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        }
        const typed = new Typed(typedRef.current, options)
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <div className="container home" id='home'>
            <div className="left " data-aos="fade-up-right"
                data-aos-duration="1000"
            >
                <h2 ref={typedRef}> </h2>
                <a href={pdf} download="DhrumiVaidyaResume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
            </div>
            <div className="right" data-aos="fade-up-left"
                data-aos-duration="1000">
                <div className="img">
                    <img src="./assets/girllaptop.png" alt="Myimage" />
                </div>
            </div>
        </div>
    );
}

export default Home;
