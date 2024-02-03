import Style from "../../styles/Pay.module.css"
import bannerImage from '../../svg/profileImage.png';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EditIcon from '@mui/icons-material/Edit';
import { getCartById, applyDiscount, removeDiscount } from "../ApiOperation/ApisManagement/cart"
import PageNotFound from './PageNotFound';
import Accordian from '../CommonComponent/Accordian';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Pay() {
    const nevigate = useNavigate();
    let { handle } = useParams();
    let [discountBug, setDiscountBug] = useState(null)
    let [coupon, setCoupon] = useState(null);
    let [cart, setCart] = useState([]);
    let [product, setProduct] = useState({});
    let [invoice, setInvoice] = useState({})
    let [isReadOnly,setReadOnly] = useState(false)

    let [pageNotFound, setPageNotFound] = useState(false);
    let [seo, setSeo] = useState({});

    const setUseState = async () => {
        const diviceId = localStorage.getItem('deviceId')

        if (!diviceId) goBack()
        const cart = await getCartById(diviceId)
        if (cart.data.data) {
            setCart(cart.data.data)
            setProduct(cart.data.data.line_items)
            setInvoice(cart.data.data.invoice)
            setCoupon(cart.data.data.invoice.discount.code)
        } else {
            setPageNotFound(true)
        }
    }

    function goBack() {
        nevigate(`/mock-interview/${product.handle}`)
    }

    function onCouponChange(e) {
        const code = e?.target?.value || e;
        console.log("onCouponChange code",code)
        setCoupon(code)
    }
    

    async function applyCouponOnClick(code=null) {
        // console.log("Discount", coupon)
        // console.log("Code",typeof code)
        const offerCode = typeof code == "string" ? code : coupon;
        // console.log("offerCode", offerCode)
        const res = await applyDiscount(cart.id, cart.diviceId, offerCode)
        console.log("removeCouponOnClick", res.data.statusId)
        if (res.data.statusId == 0) {
            setDiscountBug(res.data.message)
            setTimeout(() => { setDiscountBug(null) }, 3000)
        }else{
            setUseState()
        }
       
    }
    async function removeCouponOnClick(code) {
        const res = await removeDiscount(cart.id, cart.diviceId)
        console.log("removeCouponOnClick", res.data)
        setUseState()
    }
    async function bookTheSlot() {
        // setLoading(true)
        nevigate("/thankyou")
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setUseState()
    }, [])

    return pageNotFound ? <PageNotFound /> : (
        <div>
            {console.log("product", product)}
            {console.log("cart", cart)}
            <div className={Style.containerPay} >
                <div className={Style.userContainer}>
                    <div className={Style.mockHeaderPay}>
                        <div>
                            <h1>{product.title}</h1>
                        </div>
                        <img src={bannerImage} style={{ objectFit: 'contain' }} alt='Master Node.js with Prashant' />
                    </div>
                    {/** !selected course information */}
                    <div className={Style.courseDetailPay}>

                        <div className={Style.courseInfo}>
                            <CalendarTodayIcon style={{ fontSize: "20px" }}></CalendarTodayIcon>
                            &nbsp;<div>{cart.slotBooked}</div>
                        </div>
                        <EditIcon className={Style.editEvent} onClick={goBack}></EditIcon>
                    </div>
                    {/** !selected course information */}
                    <div className={Style.discount}>
                        <span>Discount code</span>
                        <div className={Style.apply}>
                            <input type='text' placeholder='coupon code' onChange={onCouponChange} value={coupon ? coupon : ""} className={invoice?.discount?.code == null ? Style.enable : Style.disable}></input>
                            {invoice?.discount?.code == null ? <a onClick={applyCouponOnClick}>Apply</a> : <a onClick={removeCouponOnClick} style={{backgroundColor:"#789461"}}>Remove</a>}
                        </div>
                        {discountBug ? <p style={{ color: "red" }}>{discountBug}</p> : ""}
                    </div>
                    {/** !Coupon Alert */}
                    {invoice?.discount?.code != null ?
                        <div className={Style.couponAppliedAlert}>
                            <CelebrationIcon fontSize='large' style={{ marginTop: "3px" }} />
                            <div>{invoice?.discount?.message}</div>
                        </div> : ""}
                    {/** !List offer */}
                    <div className={Style.availableOffers}>
                        <Accordian offers={cart?.availableOffers} setCoupon={onCouponChange} setStateOnApply={applyCouponOnClick}></Accordian>
                    </div>
                    {/** !user details */}
                    <div className={Style.userDetails}>
                        <div className={Style.inputSection}>
                            <label><span>*</span> Your Name </label> <br />
                            <input type='text'></input>
                        </div>
                        <div className={Style.inputSection}>
                            <label><span>*</span> Email</label> <br />
                            <input type='text'></input>
                        </div>

                        <div className={Style.inputSection}>
                            <label><span>*</span> Share your LinkedIn Profile</label> <br />
                            <input type='text'></input>
                        </div>


                        <div className={Style.inputSection}>
                            <label><span>*</span> How much experience do you have?</label> <br />
                            <input type='text'></input>
                        </div>

                        <div className={Style.inputSection}>
                            <label><span>*</span>Phone number</label> <br />
                            <input type='number'></input>
                        </div>
                    </div>

                    <div className={Style.whatElseYouGet}>
                        <div className={Style.context}>
                            <h3>Get free session recording</h3>
                            <p>Session recording to help you retain your learnings</p>
                        </div>
                        <div className={Style.button}>

                            <div> Add</div>
                        </div>
                    </div>

                    {/** !submit */}

                    <div className={Style.finalSubmition}>
                        <div className={Style.price}>
                            <div><span className='mrp' style={{ fontSize: "0.9rem" }}><s>₹{invoice?.subtotal}</s> &nbsp; </span><strong style={{ color: 'green' }}>  ₹{invoice?.cartTotal}</strong></div>
                        </div>
                        <div className={Style.sumbit} onClick={bookTheSlot}>
                            Confirm and Pay
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pay;