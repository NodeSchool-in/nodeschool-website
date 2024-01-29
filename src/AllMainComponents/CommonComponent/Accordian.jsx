import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Style from "../../styles/Pay.module.css"
import ColorLensIcon from '@mui/icons-material/ColorLens';
export default function Accordian({ offers , setCoupon , setStateOnApply }) {

  async function applyCoupon(e){
      const code = e.target.getAttribute("code");
      console.log("code",code)
      //setCoupon(code)
      setStateOnApply(code)
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Additional offers / Promos for you</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {offers?.map((offer, index) => {
            return (
              <div className={Style.offer} key={index}>
                <div className={Style.offerImage}>
                  <img src={offer['offer-image']}></img>
                </div>
                <div className={Style.offerText}>
                  <strong>{offer.text}</strong>
                  <br></br>
                  <span code={offer.offerCode} onClick={applyCoupon}>Apply Coupon</span>
                </div>
              </div>
            )
          })
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
