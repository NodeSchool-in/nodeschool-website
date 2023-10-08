import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../AllMainComponents/MainPage';
import CourseElement from '../AllMainComponents/Components/CourseElement';
import CoursePage from '../AllMainComponents/Components/CoursePage';
import PageNotFound from "../AllMainComponents/Components/PageNotFound";
import Navbar from '../AllMainComponents/CommonComponent/Navbar';
import Footer from '../AllMainComponents/CommonComponent/Footer';
import About from '../AllMainComponents/Components/About';
import Legal from '../AllMainComponents/Components/Legal'
import Contact from '../AllMainComponents/Components/contact';


const AppRouter = () => {
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
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/privacy-policy' element={<Legal type="privacy" />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
