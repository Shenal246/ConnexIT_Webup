import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import { useTranslation } from 'react-i18next';

import './Vendors.css';

// Import your image files
import ven2 from '../../../../images/ThaiVendors/2.png';
import ven3 from '../../../../images/ThaiVendors/3.png';
import ven4 from '../../../../images/ThaiVendors/4.png';
import ven5 from '../../../../images/ThaiVendors/5.png';
import ven6 from '../../../../images/ThaiVendors/6.png';
import ven7 from '../../../../images/ThaiVendors/7.png';
import ven8 from '../../../../images/ThaiVendors/8.png';
import ven9 from '../../../../images/ThaiVendors/9.png';
import ven11 from '../../../../images/ThaiVendors/11.png';
import ven12 from '../../../../images/ThaiVendors/12.jpg';
// Add import statements for all your images here...

const imagePaths = [ven2, ven3, ven4, ven5, ven6, ven7, ven8, ven9, ven11, ven12]; // Add all your image paths to this array

const Vendors = () => {
  const { t } = useTranslation();
  const { Thaiventopic, ThaivenText1, ThaivenText2 } = t('Thaivendorsec', { returnObjects: true });

  return (
    <section className='vendors'>
      <div className='container'>
        {/* Vendors Text */}
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <div className="col-4"><hr /></div>
          <div className="col-4"><p id='ourVendorsText'>{Thaiventopic}</p></div>
          <div className="col-4"><hr /></div>
        </div>

        <div className='row vendorText' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <p>{ThaivenText1}<br />{ThaivenText2}</p>
        </div>

        <div className='row' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
          <div className='col-lg-1'></div>
          <div className='col-lg-10'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 550,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {imagePaths.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className='image-container'>
                    <img src={path} alt={`ven${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
