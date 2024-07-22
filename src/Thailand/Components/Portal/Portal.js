// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import ThaiNavbar from '../Navbar/Navbar';
import ThaiChat from '../ChatBot/Chat';
import ThaiFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { Thaiptl1, Thaiptl2
        } = t('Thaiportalsec', { returnObjects: true });

    return (
        <>
        <ThaiNavbar/>
        <ThaiChat/>
            <div className='portal'>
                <p><span className='one'>{Thaiptl1}</span><span className='two'> {Thaiptl2}</span> </p>
            </div>
        <ThaiFooter/>
        </>
    );
};

export default Portal;
