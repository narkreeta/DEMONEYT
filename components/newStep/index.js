import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import { useStylesNewreport } from '../newReportcard/style';
import { useStylesEdit } from '../newReportcard/editStyle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CardContent from '@mui/material/CardContent';
import { Input } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AiFillUpCircle } from 'react-icons/ai';
import { useStylesWelcome } from '../welcome/style';
import { useStylesNewstep } from './style';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '100%',
    margin: '2rem auto',
    overflowY: 'scroll',
    paddingBottom: '30px'
};

const NewstepIndex = ({ stepOpen, setStepOpen, stepsData, setStepsData }) => {
    const newReportClasses = useStylesNewreport();
    const editReportClasses = useStylesEdit();
    const welcomeClasses = useStylesWelcome();
    const classes = useStylesNewstep();

    const handleClose = () => setStepOpen(false);
    const [addData, setAddData] = useState([
        { name: 'Timer', data: ['timer'] },
        { name: 'Date', data: ['date'] },
        { name: 'Counter', data: ['Attendees', 'Children', 'Adults', 'Boys', 'Girls', 'Over 18', 'Under 18', 'Over 60s'] },
        { name: 'A / B Choice', data: [] }
    ]);
    const [counterData, setCounterData] = useState([]);
    const [expanded, setExpanded] = useState('');

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
    };

    const handleSubcontent = (data) => {
        if (counterData?.includes(data)){
            setCounterData(counterData?.filter((ele) => ele !== data))
        }
        else {
            setCounterData([...counterData, data]);
        }
    }

    const handleSave = () => {
        
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={stepOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={stepOpen}>
                <Box sx={style}>
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
                            Creating new report card
                        </Typography>
                        <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                            <HighlightOffIcon style={{ fontSize: '30px' }} />
                        </Button>
                    </Box>
                    <CardContent className={newReportClasses.cardContent}>
                        <Input placeholder='New report card' className={newReportClasses.inputBox} />
                        <Typography variant='h5' className={editReportClasses.categoryTitle}>Select your Category & Data Point</Typography>
                        {addData?.map((ele, index) => {
                            return (
                                <Accordion key={ele?.name} className={`${welcomeClasses.accordion} ${ele?.data?.length > 0 ? '' : welcomeClasses.zeroMargin}`} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                    <AccordionSummary
                                        expandIcon={expanded === `panel${index + 1}` ?
                                            <AiFillUpCircle className={welcomeClasses.accordionIcon} /> :
                                            <AddCircleOutlineIcon className={welcomeClasses.accordionIcon} />
                                        }
                                        aria-controls={`panel${index + 1}bh-content`}
                                        id={`panel${index + 1}bh-header`}
                                        className={`${welcomeClasses.accordionSummary} ${classes.accordionSummary}`}
                                        style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4'}}
                                    >
                                        <div className={classes.accordionSummaryData}>
                                            <Typography className={welcomeClasses.accordionHeadContent}>
                                                {ele?.name}
                                            </Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className={editReportClasses.accordionDetails}>
                                        {ele?.data?.map((data, ind) => {
                                            console.log(data, 'dtt t')
                                            return (
                                                <>
                                                    { ele?.name == 'Counter' && 
                                                        <Box className={`${editReportClasses.accordionDetailsBox} ${counterData?.includes(data) ? editReportClasses.accordionDetailsBoxActive : ''}`} onClick={() => handleSubcontent(data)}>
                                                            <Typography style={{ fontWeight: 'bold' }}>{data}</Typography>
                                                        </Box>
                                                    }
                                                    { ele?.name == 'Timer' && 
                                                        <Box className={classes.summaryRight}>
                                                            <Input className={classes.summaryRightInput} />
                                                            <Input className={classes.summaryRightInput} />
                                                        </Box>
                                                    }
                                                    { ele?.name == 'Date' && 
                                                        <Box className={classes.summaryRight}>
                                                            <Input className={classes.summaryRightInput} />
                                                            <Input className={classes.summaryRightInput} />
                                                            <Input className={classes.summaryRightInput} />
                                                        </Box>
                                                    }
                                                </>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                        <Box className={newReportClasses.btnPart}>
                            <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.backBtn}`} onClick={() => handleBack()}>Back</Button>
                            <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.saveBtn}`} onClick={() => handleSave()}>Save</Button>
                        </Box>
                    </CardContent>
                </Box>
            </Fade>
        </Modal>
    )
}

export default NewstepIndex