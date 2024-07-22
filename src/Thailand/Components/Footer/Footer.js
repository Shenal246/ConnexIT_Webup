// import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  const { ThaifootHeadTopic, ThaiheadLine1, ThaiheadLine2, ThaiheadLine3,ThaiheadLine4, ThaifootConTopic, ThaiconLine1,
    ThaiconLine2, ThaiconLine3, ThaiconLine4, ThaiconLine5, ThairesTopic, Thaires1, Thaires2, Thaires3
    } = t('Thaifootersec', { returnObjects: true });


    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <h3>{ThaifootHeadTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                            {ThaiheadLine1}<br />
                                <span>{ThaiheadLine2}</span><br />
                                <span> {ThaiheadLine3}</span> <br />
                                <i className="fas fa-phone-volume callIcon1" ></i>{ThaiheadLine4}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                            <h3>{ThaifootConTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                            {ThaiconLine1}<br />
                                <span>{ThaiconLine2}</span><br />
                                <span> {ThaiconLine3}</span> <br />
                                <span>{ThaiconLine4}</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>{ThaiconLine5}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 resources">
                            <h3>{ThairesTopic}</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Events&News">{Thaires1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/FAQs">{Thaires2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">{Thaires3}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row rowlast">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <div className="footer-icons img icons">
                                <a className="" href="https://www.facebook.com/profile.php?id=61558366792000" target="_blank"><i className="fab fa-facebook facebook"></i></a>
                                {/* <a className="" href="/"><i className="fa-brands fa-x-twitter twitter" target="_blank"></i></a> */}
                                {/* <a className="" href="https://www.instagram.com/connexinformationtechnologies?igsh=MjYxNnpkN3FqNTd0" target="_blank"><i className="fab fa-instagram instagram"></i></a> */}
                                <a className="" href="https://www.linkedin.com/showcase/connex-thailand1/" target="_blank"><i className="fab fa-linkedin-in linkedIn"></i></a>
                                {/* <a className="" href="https://www.youtube.com/@connexinformationtechnologies" target="_blank"><i class="fa-brands fa-square-youtube youtube"></i></a> */}
                            </div>
                        </div>
                        <div className=" col-md-4  ft-1 address2">
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 ownerRights">
                            <h6>Developed by ConnexIT</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
