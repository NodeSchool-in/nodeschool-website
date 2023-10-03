import './css/App.css';
import AppRouter from './Routes/AppRouter';
import {HelmetProvider} from 'react-helmet-async'
function App() {
  return (
    <div className='app'>
      <HelmetProvider> <AppRouter /></HelmetProvider>
      {/* <Navbar />
      <BannerContainer /> */}
      {/* <Review question="What people say about this course ?" supportingText="Some testimonials from the people who recently took my courses."/>
      <CardContainer cards={cardsData} />
      <Review question="Courses" supportingText="Super practical courses, with a no-nonsense approach, are designed to spark engineering curiosity and help you ace your career"/>
      <CardContainer cards={courseData} /> */}
      <hr />
      {/* <button onClick={animalClick}>Add Animal</button>
             <div className="animal-list">{renderedAnimal}</div> */}
    </div>
  );
}

export default App;
