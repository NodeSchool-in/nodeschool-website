import React from 'react';
import Styles from '../../styles/Banner.module.css';
import bannerImage from '../../svg/profileImage.png';

const Banner = () => {
  return (
    <div className={Styles.bannerContainer}>
      <div className={Styles.imageContainer}>
        <img src={bannerImage} style={{ objectFit: 'contain' }} alt='Master Node.js with Prashant' />
      </div>
      <div className={`bannerContent ${Styles.bannerContentContainer}`}>
        <h1>Hi, I am Prashant</h1>
        <h3 className='color-red'>
          CS Engineer | Passionate Engineer | Building Products | Expert NodeJs Tutor
        </h3>
        <br />
        <h3 className='common-text'>
          I am a CS engineer passionate about building system that scale and
          currently working with{' '}
          <span className='color-red'>Sugar Cosmetics</span> as a
          <span className='color-red'> Engineering Team Lead </span> throughout
          my carrer, I have worked across variety of domains and have built
          system, services and platforms that scales to billion of users i have
          worked at companies like{' '}
          <span className='color-red'>
            Sugar Cosmetics , Byjus , IIFL (NeoSoft Tech) and SDL
          </span>{' '}
          <strong>master Node.js with Prashant</strong> (your expert nodejs tutor)
          .
        </h3>
      </div>
    </div>
  );
};

export default Banner;
