import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import { useStylesWelcome } from '../welcome/style';
import { useStylesNewreport } from '../newReportcard/style';
import CardContent from '@mui/material/CardContent';
import { BiChevronRightCircle } from 'react-icons/bi';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStylesUpcomingCurrent } from './style';
import Router from 'next/router';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: 'auto',
    maxHeight: '90%',
    overflowY: 'scroll',
    paddingBottom: '30px',
    borderBottom: '5px solid #00D084'
};

const UpcommingCurrentIndex = ({ upcommingCurrentReport, setUpcommingCurrentReport }) => {
    const handleClose = () => {
        Router.push('/welcome');
        //setUpcommingCurrentReport(false);
    }
    const classesWelcome = useStylesWelcome();
    const classes = useStylesUpcomingCurrent();
    const newReportClasses = useStylesNewreport();

    const [reportList, setReportList] = useState([]);
    const [userName, setUserName] = useState('');
    console.log(reportList, 'reportList upcoming')

    useEffect(() => {
        localStorage != undefined && setReportList(JSON.parse(localStorage.getItem("ReportList")));
        localStorage != undefined ? setUserName(localStorage.getItem("userName")) : setUserName('');
    }, []);

    return (
        <div className={classes.upcomingCurrentMain}>
            <Box
                //sx={style} 
                className={`${newReportClasses.boxStyle} ${classes.boxStyle}`}>
                <CardMedia
                    component="img"
                    height="150"
                    image={Banner.src}
                    alt="Banner"
                    title="Contemplative Reptile"
                />
                <Box className={newReportClasses.bannerContent}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="h4"
                        fontWeight="bold"
                    >
                        {userName}
                    </Typography>
                    {/* <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                        <HighlightOffIcon style={{ fontSize: '30px' }} />
                    </Button> */}
                </Box>
                <Box className={`${classesWelcome.cardContentTitle} ${classes.cardContentTitle}`}>
                    <Typography variant="h5">Upcoming & current reports</Typography>
                    <Button onClick={() => handleClose()}>Back</Button>
                </Box>
                <CardContent className={classesWelcome.cardContent}>
                    <Box className={classesWelcome.accordionMain}>
                        <div className={classesWelcome.accordionDetails}>
                                {reportList?.map((data) => {
                                    return (
                                        <Box className={classesWelcome.accordionDetailsBox}>
                                            <Button className={classesWelcome.accordionDetailsBoxBtn}>
                                                <BiChevronRightCircle className={classesWelcome.accordionDetailsBoxIcon} />
                                                <Typography className={classesWelcome.accordionDetailsBoxContent}>
                                                    {`${data?.date} | ${data?.name}`}
                                                </Typography>
                                            </Button>
                                        </Box>
                                    )
                                })}
                        </div>
                    </Box>
                </CardContent>
            </Box>
        </div>
    )
}

export default UpcommingCurrentIndex