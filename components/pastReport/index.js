import React, { useEffect, useState } from 'react';
import ReviewReport from '../report/reviewReport';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { useStylesNewreport } from '../newReportcard/style';
import { useStylesPaststep } from './style';
import { useStylesReport } from '../report/style';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CardContent from '@mui/material/CardContent';

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

const PastReportIndex = ({ pastReportOpen, setPastReportOpen }) => {
    const handleClose = () => setPastReportOpen(false);
    const newReportClasses = useStylesNewreport();
    const classes = useStylesPaststep();
    const [reportName, setReportName] = useState('');
    const classesReport = useStylesReport();

    useEffect(() => {
        setReportName(localStorage.getItem("LastReviewReportName"));
    }, []);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={pastReportOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={pastReportOpen}>
                    <Box sx={style} className={newReportClasses.boxStyle}>
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
                            <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                                <HighlightOffIcon style={{ fontSize: '30px' }} />
                            </Button>
                        </Box>
                        <CardContent className={classes.cardContent}>
                            <ReviewReport />
                            <Box className={newReportClasses.btnPart}>
                                <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.backBtn}`} onClick={() => handleClose()} >Back</Button>
                                <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.saveBtn}`} >Download</Button>
                            </Box>
                        </CardContent>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default PastReportIndex