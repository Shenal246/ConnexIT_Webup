import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Contact.css';
import mapThl from '../../../images/map/thailand.png';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
import ThaiNavbar from '../Navbar/Navbar';
import ThaiChat from '../Navbar/Navbar';
import ThaiFooter from '../Footer/Footer';
import connections from '../../../config';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef();

    const serverlink = connections.serverLinkInsert;

    const onSubmit = async (data) => {
        // if (!isHuman) {
        //     alert('Please verify that you are a human!');
        //     return;
        // }

        const values = [data.firstName, data.lastName, data.Company, data.contactNumber, data.email, data.comments];

        const value33 = {
            query: "INSERT INTO contactus(firstname, lastname, company, tpno,email,comment,countryid,statusid) VALUES (?,?,?,?,?,?,?,?)",
            value1: values[0],
            value2: values[1],
            value3: values[2],
            value4: values[3],
            value5: values[4],
            value6: values[5],
            value7: 2,
            value8: 1,
            key: "FKoaDwCi7C"
        };

        console.log(value33);

        try {
            const response = await axios.post(serverlink, value33);
            if (response.status === 200) {
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Successfully Submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('An error occurred while submitting the form.');
        }
    };


    const { t } = useTranslation();
    const { Thaicont1, Thaicont2, Thaicont3, Thaicont4, Thaicont5, Thaicont6, Thaicont7,
        Thaicont8, Thaicont9, Thaicont10, Thaicont11, Thaicont12, Thaicont13, Thaicont14, Thaicont15, Thaicont16,
        Thaicont17, Thaicont18, Thaicont19, Thaicont20, Thaicont21, Thaicont22, Thaicont23, Thaicont24, Thaicont25,
        Thaicont26, Thaicont27, Thaicont28, Thaicont29, Thaicont30
    } = t('Thaicontsec', { returnObjects: true });

    return (
        <>
            {/* <ThaiNavbar/> */}
            <ThaiChat />

            <div className="container">
                <div className='row'>
                    <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <div className="col-md-4"><hr /></div>
                        <div className="col-md-4"><p id='Text'>{Thaicont1}</p></div>
                        <div className="col-md-4"><hr /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <h1 className='h1'>{Thaicont2}<br /> {Thaicont3}</h1>
                        <h2 className='h2'>{Thaicont4}<br /> {Thaicont5} <br />{Thaicont6} <br /> {Thaicont7}</h2>
                    </div>
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating col-md-mb-2">
                                <div className="row mt-4 mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            placeholder={Thaicont8}
                                            aria-label={Thaicont8}
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <span className="text-danger">{Thaicont9}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            placeholder={Thaicont10}
                                            aria-label={Thaicont10}
                                            {...register('lastName', { required: true })}
                                        />
                                        {errors.lastName && <span className="text-danger">{Thaicont11}</span>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                            placeholder={Thaicont12}
                                            aria-label={Thaicont12}
                                            {...register('Company', { required: true })}
                                        />
                                        {errors.Company && <span className="text-danger">{Thaicont13}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                            placeholder={Thaicont14}
                                            aria-label={Thaicont14}
                                            {...register('contactNumber', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: Thaicont15,
                                                },
                                                validate: {
                                                    length: (value) => value.length === 10 || Thaicont15,
                                                },
                                            })}
                                        />
                                        {errors.contactNumber && <span className="text-danger">{errors.contactNumber.message || 'Contact number is required'}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md mb-3">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="floatingInput"
                                    placeholder={Thaicont16}
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: Thaicont17,
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                            </div>

                            <div className="col-md">
                                <textarea
                                    className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                    placeholder={Thaicont30}
                                    id="floatingTextarea2"
                                    {...register('comments', { required: true })}
                                ></textarea>
                                {errors.comments && <span className="text-danger">{Thaicont18}</span>}
                            </div>

                            <div className="form-check formcheck">
                                <input
                                    className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register('acceptTerms', { required: true })}
                                />
                                <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                    {Thaicont19}
                                </label>
                                {errors.acceptTerms && <span className="text-danger">{Thaicont20}</span>}
                            </div>

                            <div className="row mt-4 btnContainer">
                                <div className="col-md-6 mb-2">
                                    <button type="submit" className="btn btn-success">{Thaicont21}</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="reset" className="btn btn-danger" onClick={() => reset()}>{Thaicont22}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 countryData">
                        <h1 className='countryName address3'>{Thaicont23}</h1>
                        <h3>{Thaicont24}</h3>
                        <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                            {Thaicont25}<br />
                            <span className='address'>{Thaicont26}</span><br />
                            <span className='address'>{Thaicont27}</span><br />
                            <span className='address'>{Thaicont28}</span>
                        </p>
                        <button
                            className="neon-button"
                            onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0918992814586!2d100.57137787589524!3d13.773331296793016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1e570cdf27%3A0xa3b67073f54a5f10!2sPNP%20International%20Legal%20Co.%2C%20Ltd.!5e0!3m2!1sen!2slk!4v1718093144399!5m2!1sen!2slk')}
                        >
                            {Thaicont29}
                        </button>
                        <hr className='line'></hr><hr className='line'></hr>
                    </div>
                    <div className="col-md-6">
                        <img src={mapThl} className='mapThl' />
                    </div>
                </div>
            </div>

            <ThaiFooter />
        </>
    );
}

export default Contact;
