import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import { useStylesNewreport } from '../../components/newReportcard/style';
import { useStylesReport } from '../../components/report/style';
import { useStylesPaststep } from '../../components/pastReport/style';
import { useStylesPastReportPage } from './style';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CardContent from '@mui/material/CardContent';
import ReviewReport from '../../components/report/reviewReport';
import Router from 'next/router';

const PastReportPageIndex = () => {
    const newReportClasses = useStylesNewreport();
    const classesReport = useStylesReport();
    const [reportName, setReportName] = useState('');
    const classesPastSteps = useStylesPaststep();
    const classes = useStylesPastReportPage();

    useEffect(() => {
        setReportName(localStorage.getItem("LastReviewReportName"));
    }, []);

    const handleClose = () => {
        Router.push('/welcome');
    }

    return (
        <Box className={classes.pastReportMain}>
            <Box className={`${newReportClasses.boxStyleMain}`}>
                <CardMedia
                    component="img"
                    height="150"
                    image={Banner.src}
                    alt="Banner"
                    title="Contemplative Reptile"
                />
                <Box className={`${newReportClasses.bannerContent}`}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h6"
                        fontWeight="bold"
                    >
                        <div className={classesReport.bannerTitle}>
                            <Typography>Review your report</Typography>
                            <Typography>{reportName}</Typography>
                        </div>
                    </Typography>
                    {/* <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                        <HighlightOffIcon style={{ fontSize: '30px' }} />
                    </Button> */}
                </Box>
                <CardContent className={classesPastSteps.cardContent}>
                    <ReviewReport />
                    <Box className={newReportClasses.btnPart}>
                        <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.backBtn}`} onClick={() => handleClose()} >Back</Button>
                        <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.saveBtn}`} >Download</Button>
                    </Box>
                </CardContent>
            </Box>
        </Box>
    )
}

export default PastReportPageIndex