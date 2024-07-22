import React from 'react';
import { useLocation } from 'react-router-dom';
import './SVendor.css';
import SLNavbar from "../Navbar/Navbar";
import SLChat from "../ChatBot/Chat";
import SLFooter from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import DOMPurify from 'dompurify';

const SingleVendor = () => {
    const location = useLocation();
    const { vend } = location.state;

    const htmlContent = vend.des;
    // Sanitize HTML content
    const sanitizedHtml = DOMPurify.sanitize(htmlContent);

    return (
        <>
            <SLNavbar />
            <SLChat />
            <section>
                <div className="container sectionVendor">
                    <div className='row'>
                        <div className='col-2 imgbgrd'>
                            <img className='vendorpic1' src={`data:image/jpeg;base64,${vend.image_data}`} alt={vend.name}></img>
                        </div>
                        <div className='col-10'>
                            {/* <h1 className='vendorNameSingle'>{vend.name}</h1> */}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-10'>
                            <div className='contentVendor1'>
                                <div className='svendordescription' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>

                    <div className='row'>
                        <div className='bton'>
                            <a href={vend.wlink} target='_blank' rel='noopener noreferrer'>
                                <button className='websiteButton1'>More </button>
                                <NavLink to='/KH/ContactUs'><button className='websiteButton'> Inquiry</button></NavLink>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <SLFooter />
        </>
    );
};

export default SingleVendor;
