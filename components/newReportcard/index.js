import React, { useState } from 'react';
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '90%',
    overflowY: 'scroll',
    paddingBottom: '30px',
    borderBottom: '5px solid #00D084'
};

const NewReportIndex = ({ open, setOpen, stepsData, setStepsData }) => {
    const classes = useStylesNewreport();
    const handleClose = () => setOpen(false);
    const [state, setState] = useState([]);
    const [edit, setEdit] = useState(false);
    const [reportName, setReportName] = useState('');
    const [stepOpen, setStepOpen] = useState(false);
    const [cardSaveDetailsOpen, setCardSaveDetailsOpen] = useState(false);
    const [activeEditData, setActiveEditData] = useState('');

    const handleBack = () => {
        setEdit(false)
        setOpen(false)
    }

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
            setCardSaveDetailsOpen(true);
            localStorage.setItem("ReportCard", JSON.stringify({ name: reportName, step: state }));
        }
    }

    const handleEdit = (data) => {
        setActiveEditData(data);
        setEdit(true);
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className={classes.boxStyle}>
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
                            <Button className={classes.bannerContentBtn} onClick={() => handleClose()}>
                                <HighlightOffIcon style={{ fontSize: '30px' }} />
                            </Button>
                        </Box>
                        <CardContent className={classes.cardContent}>
                            {edit ?
                                <Edit activeEditData={activeEditData} setActiveEditData={setActiveEditData} /> :
                                <>
                                    <Input placeholder='Report card name' className={classes.inputBox} value={reportName} onChange={(e) => setReportName(e.target.value)} />
                                    {state?.map((data) => {
                                        return (
                                            <Box className={classes.reportData}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box className={classes.reportDataIcon}>
                                                        <RiArrowUpDownFill color='#00D084' />
                                                    </Box>
                                                    <Typography style={{ fontWeight: 'bold' }}>{data?.name}: Tap to edit</Typography>
                                                </div>
                                                <Typography className={classes.reportDataBtn} onClick={() => handleEdit(data)}>Edit</Typography>
                                            </Box>
                                        )
                                    })}
                                    <Box className={`${classes.reportData} ${classes.addAnotherStep}`}>
                                        <Box className={classes.reportDataIcon} onClick={() => setStepOpen(true)}>
                                            <AddIcon color='#00D084' />
                                        </Box>
                                        <Typography>Add a step</Typography>
                                    </Box>
                                </>
                            }
                            <Box className={classes.btnPart}>
                                <Button className={`${classes.btnPartBtn} ${classes.backBtn}`} onClick={() => handleBack()}>Back</Button>
                                <Button className={`${classes.btnPartBtn} ${classes.saveBtn}`} onClick={() => handleSave()}>Save</Button>
                            </Box>
                        </CardContent>
                    </Box>
                </Fade>
            </Modal>
            <NewstepIndex
                stepOpen={stepOpen}
                setStepOpen={setStepOpen}
                stepsData={stepsData}
                setStepsData={setStepsData}
                state={state}
                setState={setState}
            />
            <CardSaveDetails
                cardSaveDetailsOpen={cardSaveDetailsOpen}
                setCardSaveDetailsOpen={setCardSaveDetailsOpen}
            />
        </>
    )
}

export default NewReportIndex