import { useState, useEffect } from "react";
import Style from "../../styles/DatePicker.module.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function getOneMonthLaterDate() {
    const today = new Date();

    // Clone the current date to avoid modifying the original date
    const oneMonthLaterDate = new Date(today);

    // Increment the month by 1
    oneMonthLaterDate.setMonth(today.getMonth() + 1);

    return { todaysDate: today, oneMonthLater: oneMonthLaterDate };
}

function getDatesBetween() {
    const dates = [];
    const date = getOneMonthLaterDate()
    let currentDate = new Date(date.todaysDate);
    let endDate = date.oneMonthLater;

    while (currentDate <= endDate) {
        const currDate = new Date(currentDate);
        dates.push(currDate.toString());
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}


function DatePicker({setState}) {
    const [getDate, setDate] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dateSelectedIndex, setdateSelectedIndex] = useState(0)
    function formatDates(props) {
        const dateData = getDatesBetween().map(date => {
            const temp = date;
            date = date.split(" ");
            return {
                day: date[0],
                month: date[1],
                date: date[2],
                fullDate: temp
            };
        })
        console.log("dateData.length", dateData)
        setDate(dateData);
    }

    useEffect(() => {
        formatDates();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % getDate.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return (prevIndex - 1 + getDate.length) % getDate.length
            } else {
                return 0
            }

        });
    };

    const onDateSelect = (e) => {
        //console.log("props", props)
        console.log("e.target.getAttribute", e.target.getAttribute("date"))
        setState(e.target.getAttribute("date"))
        setdateSelectedIndex(e.target.getAttribute("index"))
    }

    return (
        <>
            <strong style={{ margin: "5px", padding: "5px" }}>pick a date</strong>
            <div className={Style.container}>
                {console.log(getDate.length)}

                <div className={Style.button}>
                    <ArrowBackIosIcon onClick={prevSlide}></ArrowBackIosIcon>
                </div>
                <div className={Style.sliderContainer}>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            transition: "transform 0.5s ease-in-out",
                            transform: `translateX(-${currentIndex * 70}px)`, // Adjust based on your item width
                        }}
                    >
                        {getDate.map((item, index) => (
                            <div key={index} className={dateSelectedIndex != index ? Style.dateDiv : Style.dateDivSelect} onClick={onDateSelect} index={index} date={item.fullDate} >
                                {item.day} <br></br>
                                {item.date} {item.month}
                            </div>
                        ))}
                    </div>

                </div>
                <div className={Style.button}>
                    <ArrowForwardIosIcon onClick={nextSlide}></ArrowForwardIosIcon>
                </div>

            </div>
        </>
    );
}

export default DatePicker;