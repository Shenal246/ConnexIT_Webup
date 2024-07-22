

// import React from 'react';
import './Portal.css';
import SLFooter from "../Footer/Footer";
import React from "react";
import SLNavbar from "../Navbar/Navbar";
import SLChat from "../ChatBot/Chat";

const Portal = () => {
    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className='portal'>
                <p><span className='one'>To be launch</span><span className='two'> Soon</span> </p>
            </div>
            <SLFooter />
        </>
    );
};

export default Portal;