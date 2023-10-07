import React from 'react';
import Style from '../../styles/ProgramOutlineCard.module.css';
import { Divider, Alert } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ProgramOutlineCard = ({ program }) => {
    return (
        <div className={Style.displayCardContainer}>
            <div className={`f20 ${Style.cardTitle}`}>{program?.week}</div>
            <div className={`${Style.productCardContent}`}>
             <div style={{ fontSize: '0.9rem', fontWeight:'bold'}}>{program?.objective}</div> 
             <Divider />
             <div className={Style.topic}>
                <ul>
                    {program?.topics?.map(item=><li><FiberManualRecordIcon style={{fontSize: '0.8rem', marginRight: '5px'}}/>{item}</li>)}
                </ul>
             </div>
                
            </div>

        </div>
    );
};

export default ProgramOutlineCard;
