import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import axios from "axios";
import SLNavbar from "../../Navbar/Navbar";
import SLChat from "../../ChatBot/Chat";
import SLFooter from "../../Footer/Footer";
import Swal from 'sweetalert2';
import connections from '../../../config';

import { Modal, Button } from 'react-bootstrap'; // Import other Bootstrap components

const UpcomingNews = () => {
    const videoRef = useRef(null); // Create a ref for the video element
    const [sLUpEv, setSLUpEv] = useState([]);
    const [currentUpcoming, setcurrentUpcoming] = useState(null);

    useEffect(() => {

        axios.post(slupevserverlink).then((response) => {
            setSLUpEv(response.data);
        }).catch((err) => {
            console.log(err);
        });

        console.log(sLUpEv);;

    }, []);

    const [lgShow, setLgShow] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        designation: '',
        company: '',
        email: '',
        contact: '',
        province: '',
        city: ''

    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        console.log(formData);
    };

    const validate = () => {
        let errors = {};
        if (!formData.title) errors.title = 'Title is required';
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.designation) errors.designation = 'Designation is required';
        if (!formData.company) errors.company = 'Company name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.contact) {
            errors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(formData.contact)) {
            errors.contact = 'Contact number must be 10 digits';
        }
        if (!formData.city) errors.city = 'City is required';
        if (!formData.province) errors.province = 'Province is required';
        return errors;
    };

    const serverlink1234 = connections.slupreg;
    const slupevserverlink = connections.slupcoming;
    const slseatupdate = connections.slseatUpdate;
    const slupseatcount = connections.slupcomingseat;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const value33 = {
                    query: "",
                    value1: currentUpcoming && currentUpcoming.id,
                    value2: formData.title,
                    value3: formData.name,
                    value4: formData.designation,
                    value5: formData.company,
                    value6: formData.email,
                    value7: formData.contact,
                    value8: formData.province,
                    value9: formData.city,
                    value10: 1,
                    key: "FKoaDwCi7C"
                };

                const seatCount = {
                    id: currentUpcoming && currentUpcoming.id,
                };

                const responseSeat = await axios.post(slupseatcount, seatCount);
                // console.log("Seats COunt-----------", responseSeat.data[0].seats);

                const intresponseSeat = parseInt(responseSeat.data[0].seats);

                // alert(intresponseSeat);

                if (!isNaN(intresponseSeat)) {
                    if (intresponseSeat > 0) {
                        // alert("Seat count is ok");
                        // Submit the Form

                        // console.log(value33);
                        // console.log(intresponseSeat);
                        const response123 = await axios.post(serverlink1234, value33);
                        // const response123 = null;
                        // console.log(response123);
                        if (response123.status === 200) {
                            // if (true) {

                            const newSeatCount = intresponseSeat - 1;
                            const StringnewSeatCount = newSeatCount.toString();
                            // console.log("New Seat Count",StringnewSeatCount);

                            const seatCount1234 = {
                                query: "",
                                value1: StringnewSeatCount,
                                value2: currentUpcoming && currentUpcoming.id,
                                key: "FKoaDwCi7C"
                            };

                            const response123456 = await axios.post(slseatupdate, seatCount1234);
                            // const response123456 = null;
                            // console.log("Sending data",seatCount1234);

                            if (response123456.status === 200) {
                                Swal.fire({
                                    // position: "top-end",
                                    icon: "success",
                                    title: "Successfully Submitted",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setFormData({
                                    title: '',
                                    name: '',
                                    designation: '',
                                    company: '',
                                    email: '',
                                    contact: '',
                                    province: '',
                                    city: ''
                                });
                                setLgShow(false);
                                setcurrentUpcoming(null);
                                window.location.reload();
                            } else {
                                alert(' Error reducing the seat count');
                            }


                        } else {
                            alert('Failed to submit the form.');
                        }
                    } else {
                        Swal.fire({
                            // position: "top-end",
                            icon: "error",
                            title: "No Seats are currently available",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setFormData({
                            title: '',
                            name: '',
                            designation: '',
                            company: '',
                            email: '',
                            contact: '',
                            province: '',
                            city: ''
                        });
                        setLgShow(false);
                        setcurrentUpcoming(null);
                    }
                } else {
                    // If it is online seat count is unlimited. So run this code
                    console.log("Seat Count is not a number section", value33);
                    const response123 = await axios.post(serverlink1234, value33);
                    // const response123 = null;
                    console.log(response123);
                    if (response123.status === 200) {
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: "Successfully Submitted",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setFormData({
                            title: '',
                            name: '',
                            designation: '',
                            company: '',
                            email: '',
                            contact: '',
                            province: '',
                            city: ''
                        });
                        setLgShow(false);
                        setcurrentUpcoming(null);
                    } else {
                        alert('Failed to submit the form.');
                    }
                }

                if (responseSeat) {

                }


            } catch (error) {
                console.error('Error submitting the form', error);
                alert('An error occurred while submitting the form.');
            }
            // setLgShow(false);
        }
    };

    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className="container">
                <div className='row'>
                    <div className="row text">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='UpcomingNewsText'>Upcoming <br /> Events & News</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    {sLUpEv && sLUpEv.map((slup, ind) => (
                        <div className="row" >
                            <div className="card mb-3 cards2" key={ind}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`data:image/jpeg;base64,${slup.image_data}`} className="img-fluid rounded-start blogimg" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className='row'>
                                                <h3 className="card-title " >{slup.title}</h3>
                                            </div>
                                            <br />
                                            <div className='row buttnRow'>
                                                <div className='col-md-5 '>
                                                    <h5>Date :  {slup.date} </h5>
                                                    <h5>Time :  {slup.time} </h5>
                                                    <h5>Mode :  {slup.mode} </h5>
                                                    <h5>Remaining Seats: {slup.seats} </h5>
                                                </div>
                                                <div className='col-md-7'>
                                                    <button className="btn btn-info read-more" onClick={() => { setLgShow(true); setcurrentUpcoming(slup); }}>Register </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <Modal
                    size="xl"
                    show={lgShow}
                    backdrop="static"
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    className='modal'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Event Register
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6" style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
                                    <h4 className='upheading'>{currentUpcoming && currentUpcoming.title}</h4>
                                    <h6>Date :  {currentUpcoming && currentUpcoming.date} </h6>
                                    <h6>Time :  {currentUpcoming && currentUpcoming.time} </h6>
                                    <h6>Mode :  {currentUpcoming && currentUpcoming.mode} </h6>
                                    <h6>Remaining Seats:   {currentUpcoming && currentUpcoming.seats} </h6>
                                    <p className='upcomingDis'>{currentUpcoming && currentUpcoming.description}</p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit} id='upcomingregform'>
                                        <div className='row'>
                                            <div className="col-md-2 form-group">
                                                <label htmlFor="title">Title</label>
                                                <select
                                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                                    id="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled selected>Select Title</option>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                    <option value="Miss">Miss</option>
                                                </select>
                                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                            </div>

                                            <div className="col-md-10 form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="designation">Designation</label>
                                            <input type="text" className={`form-control ${errors.designation ? 'is-invalid' : ''}`} id="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" />
                                            {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company Name</label>
                                            <input type="text" className={`form-control ${errors.company ? 'is-invalid' : ''}`} id="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" />
                                            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contact">Contact Number</label>
                                            <input type="text" className={`form-control ${errors.contact ? 'is-invalid' : ''}`} id="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" />
                                            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                                        </div>


                                        <div className='row locationSelect'>
                                            <div className="form-group col-md-5">
                                                <label htmlFor="province">Province</label>
                                                <select
                                                    className={`form-control ${errors.province ? 'is-invalid' : ''}`}
                                                    id="province"
                                                    value={formData.province}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled selected>Select Province</option>
                                                    <option value="Western">Western </option>
                                                    <option value="Southern">Southern</option>
                                                    <option value="Central">Central</option>
                                                    <option value="Eastern">Eastern</option>
                                                    <option value="North Central">North Central</option>
                                                    <option value="Northern">Northern</option>
                                                    <option value="North Western">North Western</option>
                                                    <option value="Sabaragamuwa">Sabaragamuwa	</option>
                                                    <option value="Uva">Uva</option>
                                                </select>
                                                {errors.province && <div className="invalid-feedback">{errors.province}</div>}
                                            </div>

                                            <div className="col-md-7 form-group">
                                                <label htmlFor="city">City</label>
                                                <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} id="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" />
                                                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                            </div>
                                        </div>



                                        <Button className="form-group" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div >
            <SLFooter />
        </>
    );
}

export default UpcomingNews;
