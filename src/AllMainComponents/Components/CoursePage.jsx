import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api_getCourseDataByHandle } from "../ApiOperation/ApisManagement/CourseContent"
import "../../css/course.css"
import { Alert } from '@mui/material';
import CohortCard from '../CommonComponent/CohortCard';
import ProgramOutlineCard from '../CommonComponent/ProgramOutlineCard';
import About from './About';
import PageNotFound from './PageNotFound';
import { TbBrandJavascript } from 'react-icons/tb';
import { LuDatabase } from 'react-icons/lu';
import { BiLogoNodejs , BiLogoAws } from 'react-icons/bi';
import {SiRedis , SiSpringsecurity} from 'react-icons/si'
import { MdOutlineSecurity } from 'react-icons/md'
import SeoHelmet from '../CommonComponent/SeoHelmet';
import HtmlParser from '../CommonComponent/HtmlParser';




const CoursePage = () => {
  const { handle } = useParams()
  let [courseJson, setCourseJson] = useState({});
  let [pageNotFound, setPageNotFound] = useState(false);

  const updateUseState = async () => {
    const courseData = await api_getCourseDataByHandle(handle);
    console.log("data", courseData.data.data)
    if (courseData.data.statusId == 1 && courseData.data.data.length > 0) {
      setCourseJson(courseData.data.data[0])
    } else {
      setPageNotFound(true)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    updateUseState();
  }, [])

  console.log("course Data", courseJson)

  return pageNotFound ? <PageNotFound /> : (
    <>
    <SeoHelmet title={courseJson.title} href={courseJson.url} desc={courseJson.description}/>
    
    <div className='main_container'>
      <div className='main_banner'>
        <div className='main_banner_headline'>
          <h1>{courseJson?.title?.split(" ").map((item, index) => {
            if ((index % 2 == 0)) {
              return <span style={{ color: 'red' }}>{item + " "}</span>
            }
            return item + " "
          })}</h1>
          <HtmlParser htmlString={courseJson?.subTitle} />
          <Alert severity="info" style={{ fontSize: '1.2rem', padding: '10px', display: 'flex', justifyContent: 'center' }}>{courseJson?.NextBatchStartDate}</Alert>
        </div>
      </div>
      <div className='courseHeading'> <h1>upcoming <span style={{ color: 'red' }}>cohort</span></h1>  </div>
      <div className='cohort_details_container'>
        {courseJson?.cohortDetails?.map((cohort, index) => {
          return <CohortCard cohortData={cohort} key={index}></CohortCard>
        })}
      </div>
      <div className='courseHeading'> <h1>what you'll <span style={{ color: 'red' }}>learn</span></h1>  </div>
      <div className='courseDivision'>
        <div className='courseFlyer'>
          <TbBrandJavascript className='logo' />
          <h3>Javascript</h3>
        </div>
        <div className='courseFlyer'>
          <BiLogoNodejs className='logo' />
          <h3>NodeJs & Express</h3>
        </div>
        <div className='courseFlyer'>
          <LuDatabase className='logo' />
          <h3>Mysql & MongoDB</h3>
        </div>
        <div className='courseFlyer'>
          <BiLogoAws className='logo' />
          <h3>AWS</h3>
        </div>
        <div className='courseFlyer'>
          <SiRedis className='logo' />
          <h3>Redis</h3>
        </div>
        <div className='courseFlyer'>
          <MdOutlineSecurity className='logo' />
          <h3>Backend Security</h3>
        </div>
      </div>
      <div className='courseHeading'> <h1>program <span style={{ color: 'red' }}>outline</span></h1>  </div>
      <div className='cohort_program_outline'>
        {courseJson?.program_outline?.map((program, index) => {
          return <ProgramOutlineCard program={program} key={index}></ProgramOutlineCard>
        })}
      </div>
      <div className='courseHeading'> <h1>know <span style={{ color: 'red' }}> about me</span></h1>  </div>
      <About />
    </div>
    </>
  );
};

export default CoursePage;
