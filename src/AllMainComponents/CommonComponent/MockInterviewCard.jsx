import Style from '../../styles/Mock.module.css'; // !CSS
import { Divider, Alert, Button } from '@mui/material';
import { Link } from 'react-router-dom'
function MockInterviewCard({ product }) {
    return (


        <Link className={Style.displayCardContainer} to={`/mock-interview/${product.handle}`}>
            <div className={Style.head}>
                <h2>{product.title}</h2>
                <span className={Style.right}></span>
            </div>

            {product.description}
            <Divider></Divider>
            <div className={Style.price}>
                <div>60 min meeting</div>
                <div><span className='mrp' style={{ fontSize: "0.9rem" }}><s>₹{product?.compare_at_price}</s> &nbsp; </span><strong style={{ color: 'green' }}>  ₹{product?.price}</strong></div>
            </div>
        </Link>

    )
}


export default MockInterviewCard;