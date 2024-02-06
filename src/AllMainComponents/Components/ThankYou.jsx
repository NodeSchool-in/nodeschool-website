import { useEffect, useState } from "react"
import Style from "../../styles/ThankYou.module.css"
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import { thankYouPageApiCall } from "../ApiOperation/ApisManagement/order"
import { useNavigate, useParams } from "react-router-dom"
import PageNotFound from "./PageNotFound";
import { firebase } from "../../utils/firebase"
function ThankYou() {  
  const nevigate = useNavigate();
  const { orderId } = useParams();
  const [invoice, setInvoice] = useState({})
  const [discount, setDiscount] = useState(0)
  let [pageNotFound, setPageNotFound] = useState(false);

  async function setUseState() {
    const order = await thankYouPageApiCall(orderId)
    if (order.data.statusId != 1) {
      setPageNotFound(true)
    }
    setInvoice(order.data.data)
    const invoice = order.data.data;
    const discount = (invoice.subtotal - invoice.cartTotal);
    setDiscount(discount)
    firebase.logEvent(firebase.analytics, "purchase_event", {
      "page_path": `/thankyou`,
      "invoice": invoice
  })
  }
  function onClick() {
    nevigate(`/`)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setUseState()
    
  }, [])
  return pageNotFound ? <PageNotFound /> : (
    <div className={Style.container}>
      <div className={Style.ThankYouContainer}>
        <div className={Style.leftSide}>
          <div className={Style.header}>
            <WorkHistoryRoundedIcon fontSize="large" />
            <h3>Thank you for booking with us!!</h3>
            <h3>Your order is currently under process!</h3>
            <p>You will receive the confirmation on your email Id and mobile number in a few minutes. for queries write us on <span style={{ fontWeight: "bold" }}>support@nodeschool.in</span></p>
            <div onClick={onClick}>Explore What's New</div>
          </div>
        </div>
        <div className={Style.rightSide}>
          <h3>PRICE DETAILS</h3>
          <div className={Style.invoice}>
            <div>
              <span>Items(s) Total</span>
              <span>₹{invoice?.subtotal}</span>
            </div>
            <div>
              <span>Savings</span>
              <span style={{ color: "green" }}>- ₹{discount}</span>
            </div>

            <div className={Style.total}>
              <h4>Order Total</h4>
              <h4>₹{invoice?.cartTotal}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou;