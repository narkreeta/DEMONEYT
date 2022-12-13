import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import { useStylesNewreport } from "./style";
import CardContent from '@mui/material/CardContent';
import { Input } from '@mui/material';
import { RiArrowUpDownFill } from 'react-icons/ri';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Edit from './edit';
import NewstepIndex from '../newStep';
import CardSaveDetails from '../cardSave/cardSaveDetails';
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

const NewReportIndex = ({ open, setOpen, stepsData, setStepsData }) => {
    const classes = useStylesNewreport();
    const handleClose = () => setOpen(false);
    const [state, setState] = useState([]);
    const [reportList, setReportList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [reportName, setReportName] = useState('');
    const [reportNameError, setReportNameError] = useState('');
    const [stepError, setStepError] = useState('');
    const [stepOpen, setStepOpen] = useState(false);
    const [cardSaveDetailsOpen, setCardSaveDetailsOpen] = useState(false);
    const [activeEditData, setActiveEditData] = useState('');

    const handleBack = () => {
        setEdit(false)
        Router.push('/welcome');
        //setOpen(false)
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    console.log(state, 'state frm new report')

    const handleSave = () => {
        if (edit) {
            if (activeEditData?.name === '') {
                setEdit(true);
            }
            else {
                setEdit(false);
                let arr = [...state];
                let arr2 = arr.filter((data) => data?.id == activeEditData?.id)?.[0];
                arr2['name'] = activeEditData?.name;
                arr2['type'] = activeEditData?.type;
                setState(arr);
            }
        }
        else {
            if (reportName !== '' && state?.length > 0) {
                setCardSaveDetailsOpen(true);
                localStorage.setItem("ReportCard", JSON.stringify({ name: reportName, step: state }));
                setReportList([...reportList, { name: reportName, date: today }]);
                localStorage.setItem("ReportList", JSON.stringify([...reportList, { name: reportName, date: today }]));
            }
            else {
                reportName === '' && setReportNameError('* You must enter a name for this report');
                state?.length == 0 && setStepError('* You must enter a step for this report')
            }
        }
    }

    const handleEdit = (data) => {
        setActiveEditData(data);
        setEdit(true);
    }

    console.log(reportList, 'reportList')

    useEffect(() => {
        state?.length > 0 && setStepError('');
    }, [state]);

    useEffect(() => {
        setReportList(JSON.parse(localStorage.getItem("ReportList")));
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("ReportList", JSON.stringify(reportList));
    // }, [reportList]);

    const handleReportName = (val) => {
        setReportName(val);
        val == '' ? setReportNameError('* You must enter a name for this report') : setReportNameError('');
    }

    return (
        <Box className={classes.newReportCardMain}>
            {!stepOpen &&
            <Box
                //sx={style} 
                className={classes.boxStyleMain}
            >
                <CardMedia
                    component="img"
                    height="150"
                    image={Banner.src}
                    alt="Banner"
                    title="Contemplative Reptile"
                />
                <Box className={classes.bannerContent}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="h4"
                        fontWeight="bold"
                    >
                        Creating new report card
                    </Typography>
                    {/* <Button tabindex="-1" className={classes.bannerContentBtn} onClick={() => handleClose()}>
                        <HighlightOffIcon style={{ fontSize: '30px' }} />
                    </Button> */}
                </Box>
                <CardContent className={classes.cardContent}>
                    {edit ?
                        <Edit activeEditData={activeEditData} setActiveEditData={setActiveEditData} /> :
                        <>
                            <Input inputProps={{ tabIndex: "-1" }} placeholder='Report card name' className={classes.inputBox} value={reportName} onChange={(e) => handleReportName(e.target.value)} />
                            <Typography className={classes.errorMsg} style={{ marginBottom: '10px' }}>{reportNameError}</Typography>
                            {state?.map((data) => {
                                return (
                                    <Box className={classes.reportData}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Box className={classes.reportDataIcon}>
                                                <RiArrowUpDownFill color='#00D084' />
                                            </Box>
                                            <Typography style={{ fontSize: '21pt', color: '#000' }}>{data?.name}</Typography>
                                        </div>
                                        <Typography className={classes.reportDataBtn} onClick={() => handleEdit(data)}>Edit</Typography>
                                    </Box>
                                )
                            })}
                            <Box className={`${classes.reportData} ${classes.addAnotherStep}`} onClick={() => setStepOpen(true)}>
                                <Box className={classes.reportDataIcon}>
                                    <AddIcon color='#00D084' />
                                </Box>
                                <Typography>Add a step</Typography>
                            </Box>
                            <Typography className={classes.errorMsg} style={{ marginBottom: '10px', marginTop: '30px' }}>{stepError}</Typography>
                        </>
                    }
                    <Box className={classes.btnPart}>
                        <Button tabindex="-1" className={`${classes.btnPartBtn} ${classes.backBtn}`} onClick={() => handleBack()}>Back</Button>
                        <Button tabindex="-1" className={`${classes.btnPartBtn} ${classes.saveBtn}`} onClick={() => handleSave()}>Save</Button>
                    </Box>
                </CardContent>
            </Box>
            }
            {stepOpen &&
                <NewstepIndex
                    stepOpen={stepOpen}
                    setStepOpen={setStepOpen}
                    stepsData={stepsData}
                    setStepsData={setStepsData}
                    state={state}
                    setState={setState}
                />
            }
            <CardSaveDetails
                cardSaveDetailsOpen={cardSaveDetailsOpen}
                setCardSaveDetailsOpen={setCardSaveDetailsOpen}
            />
        </Box>
    )
}

export default NewReportIndex