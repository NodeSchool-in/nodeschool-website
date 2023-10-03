import React, { useEffect, useState } from 'react';
import Banner from './Components/Banner';
import CourseComponent from './Components/CourseComponent';
import ReviewComponent from './Components/ReviewComponent';
import { api_homePage } from './ApiOperation/ApisManagement/home';
import ContactForm from './CommonComponent/ContactForm';
import SeoHelmet from './CommonComponent/SeoHelmet'

const MainPage = () => {
  const [reviews, setReviews] = useState([]);
  const [courses, setCourses] = useState([]);

  const updateUseState = async ()=>{
    let content = await api_homePage();
    if (content?.data?.statusId === 1) {
      setCourses(content?.data?.data?.courses);
      setReviews(content?.data?.data?.reviews);
    }
  }

  useEffect(() => {
      updateUseState()
  }, []);

  return (
    <>
    <SeoHelmet title='Learn nodejs from prashant| NodeJs masterclass | nodeschool.in' href='https://nodeschool.in/'/>
    <div>
      {/* <Navbar /> */}
      <Banner />
      {reviews?.length > 0 && <ReviewComponent reviews={reviews} />}
      {courses?.length > 0 && <CourseComponent courses={courses} />}
      <ContactForm />
      {/* <Footer /> */}
    </div>
    </>
  );
};

export default MainPage;
