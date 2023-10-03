import React from 'react';
import Reviews from '../../json/review.json';
import Style from '../../styles/Course.module.css';
import DisplayCard from '../CommonComponent/DisplayCard';
import ReviewCard from '../CommonComponent/ReviewCard';

const ReviewComponent = ({ reviews }) => {
  return (
    <div className={Style.courseComponent}>
      <div className={Style.courseHead}>
        <div className='f30'>
          <span className='color-red'>#</span> What people say about this course
          ?
        </div>
        <div className='f14 color-purple'>
          Some testimonials from the people who recently took my courses.
        </div>
      </div>
      <div className={Style.dataContainer}>
        {reviews.map((data) => (
          <ReviewCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;
