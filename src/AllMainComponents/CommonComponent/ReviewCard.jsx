import React from 'react';
import Style from '../../styles/DisplayCard.module.css';

const ReviewCard = ({ data }) => {
  return (
    <div className={Style.displayCardContainer}>
      <div className={`f20 ${Style.cardTitle}`}>{data?.name}</div>
      <div className={`f14 ${Style.productCardContent}`}>{data?.review}</div>
      <a href={data?.linkedInUrl} className={Style.LinkedinCard}>
        <img src='./LinkedIn.png' alt='' style={{ height: '30px' }} />
      </a>
    </div>
  );
};

export default ReviewCard;
