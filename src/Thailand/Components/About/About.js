import React from 'react';
import headlogo from '../../../images/ThaiGroup/ThailandGroup.jpg'
import arrowleft from '../../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../../images/map/map trans.png';
import { useTranslation } from 'react-i18next';
import ThaiNavbar from '../Navbar/Navbar';
import ThaiChat from '../ChatBot/Chat';
import ThaiFooter from '../Footer/Footer';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >

        </div>
    );
}

const About = () => {

    const { t } = useTranslation();

    const { ThaiourSTopic, ThaiourSText, ThaiourVTopic, ThaiourVText, ThaiourMTopic, ThaiourMText, ThaisureshName, ThaisureshText, ThaishamalName, ThaishamalText, ThaidilshanName, ThaidilshanText, ThairohanName, ThairohanText, ThairajivName,
        ThairajivText, ThaipatricName, ThaipatricText, ThaierangaName, ThaierangaText, ThaijananiName, ThaijananiText, ThairomeshName, ThairomeshText, ThaiKiththiName, ThaiKiththiText
    } = t('Thaiourstory', { returnObjects: true });


    const data = [
        {
            name: ThaisureshName,
            img: '/quots/Suresh.jpg',
            quote: ThaisureshText,
            post: 'Founder / CEO',
        },
        {
            name: ThaishamalName,
            img: '/quots/Shamal.jpg',
            quote: ThaishamalText,
            post: 'CMO',
        },
        {
            name: ThaidilshanName,
            img: '/quots/Dilshan_Silva.jpg',
            quote: ThaidilshanText,
            post: 'COO',
        },
        {
            name: ThairohanName,
            img: '/quots/Rohan.jpg',
            quote: ThairohanText,
            post: 'CTO',
        },
        {
            name: ThairajivName,
            img: '/quots/Rajiv.jpg',
            quote: ThairajivText,
            post: 'Director',
        },
        {
            name: ThaipatricName,
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: ThaipatricText,
            post: 'CIRO',
        },
        {
            name: ThaierangaName,
            img: '/quots/Eranga.jpg',
            quote: ThaierangaText,
            post: 'CRO',
        },
        {
            name: ThaijananiName,
            img: '/quots/Janani_Siriardhane.jpg',
            quote: ThaijananiText,
            post: 'Director',
        },
        {
            name: ThairomeshName,
            img: '/quots/romesh.jpg',
            quote: ThairomeshText,
            post: 'Director',
        },
        {
            name: ThaiKiththiName,
            img: '/quots/Kiththi.jpg',
            quote: ThaiKiththiText,
            post: 'Director of Connex Thailand',
        }

    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <ThaiNavbar />
            <ThaiChat />
            <section id='t1'>
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                                <div className='story'>
                                    <h1 className='topic'>{ThaiourSTopic}</h1>
                                    <p><br />{ThaiourSText}</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                                <div className='story bdround bdround1'>
                                    <h1 className='topic'>{ThaiourVTopic}</h1>
                                    <p><br />{ThaiourVText}</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='story bdround bdround2'>
                                    <h1 className='topic'>{ThaiourMTopic}</h1>
                                    <p><br />{ThaiourMText}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section id='t2'>
                <div className='slider'>
                    <Slider {...settings}>

                        {data.map((d) => (<>

                            <div className='sl bdound'>
                                <div class="row">
                                    <div class="col-sm ">
                                        <img src={d.img}></img>
                                    </div>
                                    <div class="col-sm ">
                                        <h3>{d.quote}</h3>
                                        <div>
                                            <h4>{d.name}</h4>
                                            <p>{d.post}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>

                        ))}

                    </Slider>


                </div>





            </section>

            {/* <div className='row imageMap'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                    <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  />
                    </div>
                    <div className='col-'>
                        
                    </div>
                    

                </div> */}

            <div className='row imageMap'>
                <div className="row gy-3 text">
                    <div className="col-2" ></div>
                    <div className="col-8" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo" /></div>
                    <div className="col-2" ></div>
                </div>
            </div>
            <ThaiFooter />
        </>);


}

export default About;