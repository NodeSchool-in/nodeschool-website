import { useEffect} from "react"
import Style from "../../styles/ThankYou.module.css"
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import { useNavigate} from "react-router-dom"
function ThankYou() {
const nevigate = useNavigate()
function onClick(){
  nevigate(`/`)
}
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
  return (
    <div className={Style.container}>
      <div className={Style.ThankYouContainer}>
        <div className={Style.leftSide}>
          <div className={Style.header}>
            <WorkHistoryRoundedIcon fontSize="large" />
            <h3>Thank you for booking with us!!</h3>
            <h3>Your order is currently under process!</h3>
            <p>You will receive the confirmation on your email Id and mobile number in a few minutes. for queries write us on <span style={{fontWeight:"bold"}}>support@nodeschool.in</span></p>
            <div onClick={onClick}>Explore What's New</div>
          </div>
        </div>
        <div className={Style.rightSide}>
          <h3>PRICE DETAILS</h3>
          <div className={Style.invoice}>
            <div>
              <span>Items(s) Total</span>
              <span>₹2247</span>
            </div>
            <div>
              <span>Savings</span>
              <span style={{ color: "green" }}>- ₹1448</span>
            </div>
            
            <div className={Style.total}>
              <h4>Order Total</h4>
              <h4>₹800</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou;