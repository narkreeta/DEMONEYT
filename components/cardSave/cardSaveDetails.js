import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStylesNewreport } from '../newReportcard/style';
import CardContent from '@mui/material/CardContent';
import { useStylesCardSave } from './style';
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardSave from './cardSave';
import axios from 'axios';
import { postAxios } from '../../public/asset/axios/apiHandler';

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

const CardSaveDetails = ({ cardSaveDetailsOpen, setCardSaveDetailsOpen, state, reportName }) => {
    const handleClose = () => setCardSaveDetailsOpen(false);
    const newReportClasses = useStylesNewreport();
    const classes = useStylesCardSave();
    const [reportSaved, setReportSaved] = useState(false);
    const [stepsData, setStepsData] = useState([]);

    const [startTime, setStartTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [emailCard, setEmailCard] = useState('');
    const [emailReport, setEmailReport] = useState('');
    const [error, setError] = useState({
        startTime: '',
        startDate: '',
        endTime: '',
        endDate: '',
        emailCard: '',
        emailReport: ''
    });

    const [cardData, setCardData] = useState([
        {name: 'startTime', val: '', error: ''},
        {name: 'startDate', val: '', error: ''},
        {name: 'endTime', val: '', error: ''},
        {name: 'endDate', val: '', error: ''},
        {name: 'emailCard', val: '', error: ''},
        {name: 'emailReport', val: '', error: ''},
    ]);

    useEffect(() => {
        let arr = [];
        state?.map((data, i) => {
            arr.push({ name: data?.name, order: i, type: data?.apiType })
        })
        setStepsData(arr);
    }, [state]);

    console.log(stepsData, 'stepsData')

    const handleSave = async () => {
        let arr = [];
        cardData?.map((data) => {
            arr.push({
                name: data?.name,
                val: data?.val,
                error: data?.val == '' ? 'This Field is required' : ''
            })
        })
        console.log(arr, 'arr')
        setCardData(arr);
        // const cardDetail = {
        //     name: reportName,
        //     startDate: `${startDate} ${startTime}:00`,
        //     endDate: `${endDate} ${endTime}:00`,
        //     sendTo: [
        //         emailCard,
        //         emailReport
        //     ],
        //     sendAnswersTo: [
        //         emailReport
        //     ],
        //     steps: stepsData
        // }
        // let tokenStr = localStorage.getItem("Token");
        // console.log(tokenStr, 'tokenStr')
        // const data = await postAxios('http://localhost:8000/card/create', cardDetail, tokenStr);
        // console.log(data, 'data frm axios')
        // setReportSaved(true)
    }

    const handleChange = (val, name) => {
        let arr = [...cardData];
        let arr2 = arr?.filter((data) => data?.name == name)?.[0];
        arr2['val'] = val;
        setCardData(arr);
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={cardSaveDetailsOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={cardSaveDetailsOpen}>
                    <Box sx={style} className={newReportClasses.boxStyle}>
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
                                Report card saved!
                            </Typography>
                            <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                                <HighlightOffIcon style={{ fontSize: '30px' }} />
                            </Button>
                        </Box>
                        <CardContent className={`${newReportClasses.cardContent} ${classes.cardContent}`}>
                            <Typography
                                variant="h4"
                                className={classes.cardSaveDetailsTitle}
                            >
                                Card: Art Class
                            </Typography>
                            <Box>
                                <Box className={classes.cardSaveDetailsDateTime}>
                                    <Box>
                                        <Typography className={classes.cardSaveDetailsDateTimeFieldTitle} >Start time and date</Typography>
                                        <Box className={classes.timeDateTop}>
                                            <TextField
                                                id="time"
                                                type="time"
                                                className={classes.cardSaveDetailsTime}
                                                value={cardData?.filter((data) => data?.name == 'startTime')?.[0]?.val}
                                                onChange={(e) => handleChange(e.target.value, 'startTime')}
                                            />
                                            <Typography>{cardData?.filter((data) => data?.name == 'startTime')?.[0]?.error}</Typography>
                                            <TextField
                                                id="date"
                                                type="date"
                                                className={classes.cardSaveDetailsDate}
                                                value={cardData?.filter((data) => data?.name == 'startDate')?.[0]?.val}
                                                onChange={(e) => handleChange(e.target.value, 'startDate')}
                                            />
                                            <Typography>{cardData?.filter((data) => data?.name == 'startDate')?.[0]?.error}</Typography>
                                        </Box>
                                    </Box>
                                    <Box style={{ marginTop: '30px' }}>
                                        <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>End time and date</Typography>
                                        <Box className={classes.timeDateTop}>
                                            <TextField
                                                id="time"
                                                type="time"
                                                className={classes.cardSaveDetailsTime}
                                                value={cardData?.filter((data) => data?.name == 'endTime')?.[0]?.val}
                                                onChange={(e) => handleChange(e.target.value, 'endTime')}
                                            />
                                            <Typography>{cardData?.filter((data) => data?.name == 'endTime')?.[0]?.error}</Typography>
                                            <TextField
                                                id="date"
                                                type="date"
                                                className={classes.cardSaveDetailsDate}
                                                value={cardData?.filter((data) => data?.name == 'endDate')?.[0]?.val}
                                                onChange={(e) => handleChange(e.target.value, 'endDate')}
                                            />
                                            <Typography>{cardData?.filter((data) => data?.name == 'endDate')?.[0]?.error}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.cardSaveDetailsDateTimeInputBox}>
                                <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>Email address for card recipients</Typography>
                                <Input
                                    placeholder='Use a comma to separate addresses'
                                    className={classes.cardSaveDetailsDateTimeInputBoxInput}
                                    value={cardData?.filter((data) => data?.name == 'emailCard')?.[0]?.val}
                                    onChange={(e) => handleChange(e.target.value, 'emailCard')}
                                />
                                <Typography>{cardData?.filter((data) => data?.name == 'emailCard')?.[0]?.error}</Typography>
                            </Box>
                            <Box className={classes.cardSaveDetailsDateTimeInputBox}>
                                <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>Email address for report recipients</Typography>
                                <Input
                                    placeholder='Use a comma to separate addresses'
                                    className={classes.cardSaveDetailsDateTimeInputBoxInput}
                                    value={cardData?.filter((data) => data?.name == 'emailReport')?.[0]?.val}
                                    onChange={(e) => handleChange(e.target.value, 'emailReport')}
                                />
                                <Typography>{cardData?.filter((data) => data?.name == 'emailReport')?.[0]?.error}</Typography>
                            </Box>
                            <Box className={newReportClasses.btnPart}>
                                <Button onClick={() => handleClose()} className={`${newReportClasses.btnPartBtn} ${newReportClasses.backBtn}`}>Back</Button>
                                <Button onClick={() => handleSave()} className={`${newReportClasses.btnPartBtn} ${newReportClasses.saveBtn}`}>Save</Button>
                            </Box>
                        </CardContent>
                    </Box>
                </Fade>
            </Modal>
            <CardSave reportSaved={reportSaved} setReportSaved={setReportSaved} />
        </>
    )
}

export default CardSaveDetails