import React from 'react';
import Style from '../../styles/DisplayCard.module.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ data }) => {
  return (
    <div className={Style.displayCardContainer}>
      <div className={`f20 ${Style.cardTitle}`}>{data?.title}</div>
      <div className={`f14 ${Style.productCardContent}`}>{data?.content}</div>
      {/* {data.content.length > 300 && (
        <Link to={"course/"+data?.handle} className={Style.seeMore}>
          See More
        </Link>
      )} */}
      <Link to={"course/"+data?.handle} className={Style.cardButton}>
        <div>Read More</div>
      </Link>
    </div>
  );
};

export default CourseCard;
