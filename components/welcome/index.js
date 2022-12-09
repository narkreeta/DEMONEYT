import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { styled, Box, Stack } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { BiChevronRightCircle } from 'react-icons/bi';
import { AiFillUpCircle } from 'react-icons/ai';
import { useStylesWelcome } from "./style"; 
import NewReportIndex from '../newReportcard';
import ReportIndex from '../report';
import UpcommingCurrentIndex from '../upcomingCurrentReports';
import PastReportIndex from '../pastReport';
import Router from 'next/router';

const WelcomeIndex = () => {
    //const userName = localStorage != undefined ? localStorage.getItem("userName") : '';
    const [expanded, setExpanded] = useState('');
    const [userName, setUserName] = useState('');
    const [open, setOpen] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);
    const [accordionData, setAccordionData] = useState([
        {name: 'Upcoming & current reports', data: []},
        {name: 'Add / edit report cards', data: ['New report card', 'Continue last report card', 'Edit existing report card']},
        {name: 'Past reports', data: []},
        {name: 'Account setting', data: ['Reset Password', 'Logout']},
    ]);
    const [stepsData, setStepsData] = useState([]);
    const [upcommingCurrentReport, setUpcommingCurrentReport] = useState(false);
    const [pastReportOpen, setPastReportOpen] = useState(false);
    const classes = useStylesWelcome();

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        localStorage != undefined ? setUserName(`Hello, ${localStorage.getItem("userName")}`) : setUserName('Hello, ');
    }, []);

    const handleSubcontent = (data) => {
        //data == 'New report card' && setOpen(true);
        //data == 'Continue last report card' && setReportOpen(true);
        data == 'New report card' && Router.push('/new-report-card');
    }

    const handleTitle = (data) => {
        //data == 'Upcoming & current reports' && setUpcommingCurrentReport(true);
        //data == 'Past reports' && setPastReportOpen(true);
        data == 'Upcoming & current reports' &&  Router.push('/upcoming-current-report');
        data == 'Past reports' && Router.push('/past-reports');
    }

    const handleIcon = (data) => {
        data == 'Upcoming & current reports' &&  Router.push('/upcoming-current-report');
        data == 'Past reports' && Router.push('/past-reports');
    }

    return (
        <div className={classes.root}>
            <Card sx={{ boxShadow: 2 }} className={classes.card}>
                <CardMedia
                    component="img"
                    height="150"
                    image={Banner.src}
                    alt="Banner"
                    title="Contemplative Reptile"
                /> 
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="h4"
                        className={classes.bannerContent}
                    >
                        {userName}
                    </Typography>
                <CardContent className={classes.cardContent}>
                    <Box className={classes.cardContentTitle}>
                        <h3>What would you like to do today?</h3>
                    </Box>
                    <Box className={classes.accordionMain}> 
                        {accordionData?.map((data, index) => {
                            return (
                                <Accordion key={data?.name} className={`${classes.accordion} ${data?.data?.length > 0 ? '' : classes.zeroMargin}`} expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                                    <AccordionSummary
                                        expandIcon={ expanded === `panel${index+1}` ?
                                            <AiFillUpCircle className={classes.accordionIcon} onClick={() => handleIcon(data?.name)} /> :
                                            <AddCircleOutlineIcon className={classes.accordionIcon} onClick={() => handleIcon(data?.name)} />
                                        }
                                        aria-controls={`panel${index+1}bh-content`}
                                        id={`panel${index+1}bh-header`}
                                        className={classes.accordionSummary}
                                        style={{backgroundColor: expanded === `panel${index+1}` && '#E9FAF4'}}
                                    >
                                        <Typography className={classes.accordionHeadContent} onClick={() => handleTitle(data?.name)}> 
                                            {data?.name}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.accordionDetails}>
                                        <Typography>
                                            {data?.data?.map((data, ind) => {
                                                return (
                                                    <Box className={classes.accordionDetailsBox} key={ind}>
                                                        <Button className={classes.accordionDetailsBoxBtn} onClick={() => handleSubcontent(data)}>
                                                            <BiChevronRightCircle className={classes.accordionDetailsBoxIcon} />
                                                            <Typography className={classes.accordionDetailsBoxContent}>{data}</Typography>
                                                        </Button>
                                                    </Box>
                                                )
                                            })}
                                        </Typography>
                                    </AccordionDetails> 
                                </Accordion>
                            )
                        })}
                        <Typography className={classes.reportIssue}>Report an issue</Typography>
                    </Box>
                </CardContent>
            </Card>
            {/* <NewReportIndex
                open={open} 
                setOpen={setOpen} 
                stepsData={stepsData}
                setStepsData={setStepsData}
            /> */}
            {/* <UpcommingCurrentIndex
                upcommingCurrentReport={upcommingCurrentReport}
                setUpcommingCurrentReport={setUpcommingCurrentReport}
                userName={userName}
            /> */}
            <PastReportIndex 
                pastReportOpen={pastReportOpen}
                setPastReportOpen={setPastReportOpen}
            />
            {/* <ReportIndex reportOpen={reportOpen} setReportOpen={setReportOpen} /> */}
        </div>
    )
}

export default WelcomeIndex