import React from 'react';
import Style from '../../styles/Footer.module.css';
import {Link} from 'react-router-dom'

const socialMedia = [
  {
    id: '1',
    name: 'Youtube',
    link: '/',
  },
  {
    id: '2',
    name: 'LinkedIn',
    link: '/',
  },
  {
    id: '3',
    name: 'Github',
    link: '/',
  },
];

const footerData = [
  {
    id: '1',
    title: 'Writing and video',
    data: [
      {
        id: '11',
        name: 'Blog',
        link: '/',
      },
      {
        id: '2',
        name: 'Videos',
        link: '/',
      },
    ],
  },
  {
    id: '2',
    title: 'Courses',
    data: [
      {
        id: '22',
        name: 'Node.js Backend development masterclass',
        link: '/course/nodejs-backend-development-masterclass',
      }
    ],
  },
  {
    id: '3',
    title: 'Legal and Contact',
    data: [
      {
        id: '31',
        name: 'About Me',
        link: '/about',
      },
      {
        id: '32',
        name: 'Terms and Condition',
        link: '/terms-conditions',
      },
      {
        id: '32',
        name: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        id: '33',
        name: 'contact',
        link: '/contact',
      },
    ],
  },
  {
    id: '4',
    title: 'Everythings Else',
    data: [
      {
        id: '41',
        name: 'Notes',
        link: '/',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={Style.footerContainer}>
      <div className={Style.nodeSchoolBanner}>
        <div className={Style.nodeSchoolBanner2}>
          {/* <span className='color-red'>#</span> */}
          <span>Node</span>
          <span className='color-red'>S</span>
          <span>chool</span>
        </div>
      </div>
      <FooterContent />
      <Social />
      <RightReserved />
    </div>
  );
};

const FooterContent = () => {
  return (
    <div className={Style.footerDataContainer}>
      {footerData?.map((data) => (
        <div className={Style.eachFooterData}>
          <div className={Style.footerContainHead}>{data?.title}</div>
          <div className={Style.dataEleContainer}>
            {data?.data?.map((ele) => (
              <Link className={Style.dataEle} to={ele?.link}>{ele?.name}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Social = () => {
  return (
    <div className={Style.socialMediaCont}>
      {socialMedia?.map((ele) => {
        return (
          <a className={`f14 ${Style.eleText}`} href={ele?.link}>
            {ele?.name}
          </a>
        );
      })}
    </div>
  );
};

const RightReserved = () => {
  return (
    <div className={Style.allRightsReserve}>
      <span className={`f12 ${Style.rightsText}`}>
        @2023 All Rights Reserved
      </span>
      {/* <span className='color-red'>#</span> */}
      <span>Node</span>
      <span className='color-red'>S</span>
      <span>chool</span>
    </div>
  );
};

export default Footer;
