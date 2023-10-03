import React from 'react';
import Style from '../../styles/CourseElement.module.css';
import CheckIcon from '@mui/icons-material/Check';

const CourseElement = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={Style.courseHeadContainer}>
        <div className={Style.courseDetailsSection}>
          <div className={Style.textCourseName}>Course Name</div>
          <div className={Style.courseSummary}>Course Summary</div>
          <div className={Style.befefits}>
            <div className={Style.befefitsHead}>YOU'LL GET :</div>
            <ul className={Style.befefits}>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
              <li className={Style.eachBenefits}>
                <CheckIcon style={{ color: 'green', fontSize: '20px' }} />{' '}
                <span>1</span>
              </li>
            </ul>
          </div>
          <div className={Style.lastUpdate}>
            <div>Last Updated</div>
            <div>Language</div>
          </div>
        </div>
        <div className={Style.coursePriceSection}>
          <div className={Style.courseFeesHead}>Course Fees</div>
          <div className={Style.coursePrice}>₹ 4000/-</div>
          <div className={Style.enrollButton}>Enroll Now</div>
        </div>
      </div>

      <div>
        <div>Course Summary</div>
        <div></div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default CourseElement;
