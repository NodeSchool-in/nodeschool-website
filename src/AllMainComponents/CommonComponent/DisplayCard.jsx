import React from 'react';
import Style from '../../styles/DisplayCard.module.css';

const DisplayCard = ({ data }) => {
  return (
    <div className={Style.displayCardContainer}>
      <div className={`f20 ${Style.cardTitle}`}>{data?.title}</div>
      <div className={`f14 ${Style.productCardContent}`}>{data?.content}</div>
      <div className={Style.cardButton}>Read More</div>
    </div>
  );
};

export default DisplayCard;
