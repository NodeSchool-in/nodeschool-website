import "./css/App.css";
import Navbar from "./components/navbar";
import AnimalShow from "./AnimalShow";
import BannerContainer from "./components/bannerContainer";
import Review from "./components/section";
import CardContainer from "./components/container";
import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  let [animal, setAnimal] = useState([]);
  const cardsData = [
  
    {
      id: 7,
      title: "Nityananda Gohain",
      content: "One thing I can guarantee that after this course you can read any kind of system design book/blog with confidence and you will be able to relate to Arpits classes in someway or the other, also Arpit designed the course in such a way that you will be ggdg brgdgd"
    },
    {
      id: 8,
      title: "Varsha Chourasia",
      content: "Nice explanation. Teaching in detailed way and explanation is good. Till now what I learned from your classes. Every thing is good"
    },
    {
      id: 9,
      title: "Rohan Chougule",
      content: "One thing I can guarantee that after this course you can read any kind of system design book/blog with confidence and you will be able to relate to Arpits classes in someway or the other, also Arpit designed the course in such a way that you will be able to relate to previous classes and bring out patters in solving problems. My best investment ever :)"
    },
    {
      id: 10,
      title: "Nityananda Gohain",
      content: "One thing I can guarantee that after this course you can read any kind of system design book/blog with confidence and you will be able to relate to Arpits classes in someway or the other, also Arpit designed the course in such a way that you will be able to relate to previous classes and bring out patters in solving problems. My best investment ever :)"
    },
  ];
  const courseData = [
  
    {
      id: 7,
      title: "Fullstack MERN developer",
      content: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)"
    },
    {
      id: 7,
      title: "Node.js Backend developer",
      content: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)"
    },
    {
      id: 7,
      title: "React.js Frontend developer",
      content: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)"
    },
    {
      id: 7,
      title: "Javascript Developer",
      content: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)"
    },
  ];

  const getRandomAnimal = function () {
    const animal = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animal[Math.floor(Math.random() * animal.length)];
  };

  const renderedAnimal = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  const handleClick = () => {
    if (count === undefined) count = 0;
    setCount(count + 1);
  };

  const animalClick = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <Navbar />
      <BannerContainer />
      <Review question="What people say about this course ?" supportingText="Some testimonials from the people who recently took my courses."/>
      <CardContainer cards={cardsData} />
      <Review question="Courses" supportingText="Super practical courses, with a no-nonsense approach, are designed to spark engineering curiosity and help you ace your career"/>
      <CardContainer cards={courseData} />
       <hr/>
      {/* <button onClick={animalClick}>Add Animal</button>
             <div className="animal-list">{renderedAnimal}</div> */}
    </div>
  );
}

export default App;
