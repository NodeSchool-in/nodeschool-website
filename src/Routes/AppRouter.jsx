import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import MainPage from '../AllMainComponents/MainPage';
import CourseElement from '../AllMainComponents/Components/CourseElement';
import CoursePage from '../AllMainComponents/Components/CoursePage';
import PageNotFound from "../AllMainComponents/Components/PageNotFound";
import Navbar from '../AllMainComponents/CommonComponent/Navbar';
import Footer from '../AllMainComponents/CommonComponent/Footer';
import About from '../AllMainComponents/Components/About';
import Legal from '../AllMainComponents/Components/Legal'
import Contact from '../AllMainComponents/Components/Contact';
import BlogPost from '../AllMainComponents/Components/BlogPost';
import Blog from '../AllMainComponents/Components/Blog'
import MockInterview from '../AllMainComponents/Components/MockInterview';
import InterviewPage from '../AllMainComponents/Components/InterviewPage';
import Pay from '../AllMainComponents/Components/Pay';

const AppRouter = () => {
  let location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/course' element={<CourseElement />} /> */}
        <Route path='/course/:handle' element={<CoursePage />} />
        <Route path='/refund-policy' element={<Legal type="refund" />} />
        <Route path='/terms-conditions' element={<Legal type="terms" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<Legal type="privacy" />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/:handle' element={<BlogPost />} />
        <Route path='/mock-interview' element={<MockInterview />} />
        <Route path='/mock-interview/:handle' element={<InterviewPage />} />
        <Route path='/mock-interview/:handle/pay' element={<Pay />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {!location.pathname.includes("mock") ? <Footer /> : ''}

    </div>
  );
};

export default AppRouter;
