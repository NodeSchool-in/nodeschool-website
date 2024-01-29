import { Alert } from '@mui/material';
import Style from "../../styles/MockPage.module.css"
import DatePicker from "../CommonComponent/DatePicker";
import TimePicker from "../CommonComponent/TimePicker";
import LanguagePicker from '../CommonComponent/LanguagePicker';
import bannerImage from '../../svg/profileImage.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getProductByHandle } from "../../AllMainComponents/ApiOperation/ApisManagement/mock"
import { storeMockCart} from "../ApiOperation/ApisManagement/cart"
import PageNotFound from './PageNotFound';
import { useState, useEffect } from 'react';
import { useParams, useNavigate}  from 'react-router-dom';
function InterviewPage() {
    const nevigate = useNavigate();
    let { handle } = useParams();
    let [product, setProduct] = useState({});
    let [pageNotFound, setPageNotFound] = useState(false);
    let [selectedDate, setSelectedDate] = useState("null");
    let [selectedDay, setselectedDay] = useState("null");
    let [selectedTime, setselectedTime] = useState(null);
    let [selectedCourse, setselectedCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    let [seo, setSeo] = useState({});

    const setUseState = async () => {
        const productData = await getProductByHandle(handle)
        if (productData.data.data) {
            setProduct(productData.data.data)
        } else {
            setPageNotFound(true)
        }
    }

    function getDayFromDate(date) {

        const dateObject = new Date(date);
        const dayOfWeek = dateObject.getDay();

        // Convert the day index to a day name
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = daysOfWeek[dayOfWeek];

        return dayName; // Output: Sun

    }
    function updateSelectedDate(date) {
        setSelectedDate(date)
        setselectedDay(getDayFromDate(date))
    }
    function updateSelectedTime(time) {
        setselectedTime(time)
    }
    function updateSelectedSkill(skill) {
        setselectedCourse(skill)
    }

    async function bookTheSlot() {
        setLoading(true)
        if (!localStorage.getItem('deviceId')) {
            const timestamp = new Date().getTime();
            const randomPart = Math.floor(Math.random() * 1000); // Add a random number to handle cases where the timestamp might be the same
            const id = `${timestamp}${randomPart}`;
            localStorage.setItem('deviceId', id);
        }
        const finalData = {
             "diviceId": localStorage.getItem('deviceId'),
             "slotDate": selectedDate, "slotTime": selectedTime,
             "skill": selectedCourse,
             "productId": product.id,
             "productTitle": product.title
            };
        console.log("finalData", finalData)
        await storeMockCart(finalData)
        nevigate(`/mock-interview/${product.handle}/pay`)
    }
    useEffect(() => {
        setUseState()
    }, [])

    return pageNotFound ? <PageNotFound /> : (
        <>
            {console.log("product", product)}
            <div className={Style.container}>
                <div className={Style.userContainer}>
                    <div className={Style.mockHeader}>
                        <div>
                            <h1>{product.title}</h1>
                        </div>
                        <img src={bannerImage} style={{ objectFit: 'contain' }} alt='Master Node.js with Prashant' />
                    </div>
                    <div className={Style.priceAction}>
                        <div className={Style.price}>
                            <div><span className='mrp' style={{ fontSize: "0.9rem" }}><s>₹{product?.compare_at_price}</s> &nbsp; </span><strong style={{ color: 'green' }}>  ₹{product.selling_price}</strong></div>
                        </div>
                        <div className={Style.time}>
                            <div>
                                <CalendarMonthIcon style={{ fontSize: "25px" }}></CalendarMonthIcon>
                            </div> &nbsp;
                            <div >{product?.duration}</div>
                        </div>
                    </div>

                    <div className={Style.courseDetail}>
                        <h3>Why should you take this mock interview?</h3>
                        <ul>
                            {product?.whatyouWillGet?.map((item, index) => <li key={index}><CheckCircleIcon style={{ color: "green", fontSize: "15px" }}></CheckCircleIcon> {item}</li>)}

                        </ul>

                        <div className={Style.availableOffers}>
                            <h3>What else you'll get ?</h3>

                            <div className={Style.WhatYouGet}>
                                <div className={Style.offerText}>
                                    <span>Free javascript interview Preperation Ebook</span>
                                    <br></br>
                                    <span></span>
                                </div>
                            </div>


                        </div>

                        <div className={Style.availableOffers}>
                            <h3>Additional offers / Promos for you!</h3>
                            {product?.availableOffers?.map((offer, index) => {
                                return (
                                    <div className={Style.offer}>
                                        <div className={Style.offerImage}>
                                            <img src={offer['offer-image']}></img>
                                        </div>
                                        <div className={Style.offerText}>
                                            <strong>{offer.text}</strong>
                                            <br></br>
                                            <span>{offer.offerCode}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

                <div className={Style.slotContainer}>
                    <DatePicker setState={updateSelectedDate}></DatePicker>
                    <TimePicker selectedDay={selectedDay} setState={updateSelectedTime}></TimePicker>
                    <LanguagePicker setState={updateSelectedSkill}></LanguagePicker>

                    <br></br>

                    <div onClick={bookTheSlot} className={Style.confirm}>
                       {loading ? 'Loading...' : 'Confirm Details'}
                    </div>
                </div>

            </div>
        </>
    )
}

export default InterviewPage;