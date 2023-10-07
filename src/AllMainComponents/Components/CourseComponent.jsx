import React from 'react';
import Courses from '../../json/course.json';
import Style from '../../styles/Course.module.css';
import DisplayCard from '../CommonComponent/DisplayCard';
import CourseCard from '../CommonComponent/CourseCard';

const CourseComponent = ({ courses }) => {
  return (
    <div className={Style.courseComponent}>
      <div className={Style.courseHead}>
        <div className='f30'>
          <span className='color-red'>#</span> Courses
        </div>
        <div className='f14 color-purple'>
          Super practical courses, with a no-nonsense approach, are designed to
          spark engineering curiosity and help you ace your career
        </div>
      </div>
      <div className={Style.dataContainer}>
        {courses.map((data,index) => (
          <CourseCard data={data} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default CourseComponent;
