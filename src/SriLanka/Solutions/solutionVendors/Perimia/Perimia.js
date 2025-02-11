import React from 'react';
import './Perimia.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import connections from '../../../../config';
import { useNavigate } from 'react-router-dom';
import SLNavbar from "../../../Navbar/Navbar";
import SLChat from "../../../ChatBot/Chat";
import SLFooter from "../../../Footer/Footer";

function Perimia() {
    const [vendors, setVendors] = useState([]);
    const [show, setShow] = useState(false);
    const [currentVendor, setCurrentVendor] = useState(null);
    const navigate = useNavigate();
    const serverlink = connections.serverLink;

    useEffect(() => {
        const values = {
            query: "SELECT name,des,wlink,status,image_data,cnt,Perimeter_and_internal_security FROM Vendor WHERE Perimeter_and_internal_security='true' AND status=1 AND cnt=1;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, values).then((response) => {
            setVendors(response.data);
        }).catch((err) => {
            console.log(err);
        });

        console.log(vendors);

    }, []);

    const handleCardClick = (vend) => {
        navigate(`/SL/Solutions/Perimia/${vend.name}`, { state: { vend } });
    };

    return (
        <>
            <SLNavbar />
            <SLChat />
            <section className='heroSolution'>
                <div className="container">
                    <div className='row '>
                        <div className="row text headingrow">
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100">
                                <hr/>
                            </div>
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Perimeter And
                                Internal Security</p></div>
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100">
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">

                        {vendors && vendors.map((vend, index) => (
                            <div className="col" key={index}>

                                <div className="card h-100" onClick={() => {
                                    handleCardClick(vend);
                                }}>
                                    {vend.image_data ? (
                                        <>
                                            <img
                                                src={`data:image/jpeg;base64,${vend.image_data}`}
                                                alt={vend.title}
                                                className="card-img-top"

                                            />
                                        </>
                                    ) : (
                                        <p>No Image Available</p>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title vendorTitel">{vend.name}</h5>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>


                    {/* <SingleVendor vendorName={currentVendor && currentVendor.name} imageSrc={currentVendor && currentVendor.image_data} description={currentVendor && currentVendor.des} websiteLink={currentVendor && currentVendor.wlink}/> */}

                </div>
            </section>
            <SLFooter />
        </>
    );
}

export default Perimia;
