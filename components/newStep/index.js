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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const NewstepIndex = ({ stepOpen, setStepOpen }) => {
    const newReportClasses = useStylesNewreport();
    const editReportClasses = useStylesEdit();
    const welcomeClasses = useStylesWelcome();
    const handleClose = () => setStepOpen(false);
    const [addData, setAddData] = useState([
        { name: 'Timer', data: [] },
        { name: 'Date', data: [] },
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
                        {addData?.map((data, index) => {
                            return (
                                <Accordion key={data?.name} className={`${welcomeClasses.accordion} ${data?.data?.length > 0 ? '' : welcomeClasses.zeroMargin}`} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                    <AccordionSummary
                                        expandIcon={expanded === `panel${index + 1}` ?
                                            <AiFillUpCircle className={welcomeClasses.accordionIcon} /> :
                                            <AddCircleOutlineIcon className={welcomeClasses.accordionIcon} />
                                        }
                                        aria-controls={`panel${index + 1}bh-content`}
                                        id={`panel${index + 1}bh-header`}
                                        className={welcomeClasses.accordionSummary}
                                        style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4' }}
                                    >
                                        <Typography className={welcomeClasses.accordionHeadContent}>
                                            {data?.name}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={editReportClasses.accordionDetails}>
                                        {data?.data?.map((data, ind) => {
                                            console.log(data, 'dtt t')
                                            return (
                                                <Box className={`${editReportClasses.accordionDetailsBox} ${counterData?.includes(data) ? editReportClasses.accordionDetailsBoxActive : ''}`} onClick={() => handleSubcontent(data)}>
                                                    <Typography style={{ fontWeight: 'bold' }}>{data}</Typography>
                                                </Box>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </CardContent>
                </Box>
            </Fade>
        </Modal>
    )
}

export default NewstepIndex