import React, { useState } from 'react';
import Styles from '../../styles/Navbar.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Breadcum from './Breadcum';
import { Link } from 'react-router-dom';


let courses = [
  'Fullstack MERN developer',
  'Node.js Backend developer',
  'React.js Frontend developer',
  'Javascript Developer',
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={Styles.navbarContainer}>
        <div>
          <Link to="/">
            <span className='color-red'>#</span>
            <span>node</span>
            <span className='color-red'>S</span>
            <span>chool</span>
          </Link>
        </div>
        <div className={Styles.navbarElementDesktop}>
          <div>
            <Link to="/">
            <span>H</span>
            <span className='color-red'>o</span>
            <span>me</span>
            </Link>
          </div>
          <div onClick={handleClick}>
            <span>Co</span>
            <span className='color-red'>u</span>
            <span>rses</span>
          </div>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {courses.map((ele) => (
              <MenuItem onClick={handleClose}>{ele}</MenuItem>
            ))}
          </Menu>
          <div>
            <Link to="/about">
            <span>A</span>
            <span className='color-red'>b</span>
            <span>out</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={Styles.mobileNavbar}>
        <Accordion style={{ width: '100%' }}>
          <AccordionSummary
            expandIcon={<DehazeIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              <div className={Styles.navSize}>
                <span className='color-red'>#</span>
                <span>node</span>
                <span className='color-red'>S</span>
                <span>chool</span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div className={Styles.eachContain}>
                <Link to="/">
                <span>H</span>
                <span className='color-red'>o</span>
                <span>me</span>
                </Link>
              </div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>
                    <div onClick={handleClick}>
                      <span>Co</span>
                      <span className='color-red'>u</span>
                      <span>rses</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {courses.map((ele) => (
                      <MenuItem onClick={handleClose}>{ele}</MenuItem>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <div className={Styles.eachContain}>
                <Link to="/about">
                <span>A</span>
                <span className='color-red'>b</span>
                <span>out</span>
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <Breadcum /> */}
    </>
  );
};

export default Navbar;
