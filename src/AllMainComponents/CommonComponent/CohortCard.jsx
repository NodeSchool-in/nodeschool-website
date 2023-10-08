import React from 'react';
import Style from '../../styles/CohortCard.module.css';
import { Divider, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HtmlParser from './HtmlParser';
import { Link } from 'react-router-dom';

const CohortCard = ({ cohortData }) => {
    return (
        <div className={Style.displayCardContainer}>
            <div className={`f20 ${Style.cardTitle}`}>{cohortData?.cohortTitle}</div>
            <div className={`${Style.productCardContent}`}>
                <div>{cohortData?.startsFrom}</div>
                <div>{cohortData?.durationAndSeats}</div>
                <HtmlParser htmlString={cohortData?.time}/><br />
                <div><strong>Buy Now</strong></div>
                <div style={{ color: 'red', marginBottom: '1rem'}}><strong>{cohortData?.price}</strong> <span style={{ color: '#4a4a4a' }}>({cohortData?.tax})</span></div>

                <Divider />
                <div style={{marginTop:'1rem'}}>YOU'LL GET</div>
                {cohortData?.whatyouWillGet?.map(point=><div className='normal_text_div'><CheckIcon style={{color: 'green', padding:'2px', margin:'5px 3px 0 0', fontSize:'1.2rem'}}/><span>{point}</span></div>)}
                
            </div>
            <Alert severity="warning">{cohortData?.note}</Alert>
            <Alert severity="info">{cohortData?.doubtsClaification}</Alert>
            <Link className={Style.cardButton} to="/contact">Register</Link>
        </div>
    );
};

export default CohortCard;
