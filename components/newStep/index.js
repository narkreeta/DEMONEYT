import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import Happy from '../../public/asset/images/Happy.svg';
import Sad from '../../public/asset/images/Sad.svg';
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
import { useStyleSteps } from '../steps/style'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Image from 'next/image'
import { RiArrowUpDownFill } from 'react-icons/ri';
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
    const classesSteps = useStyleSteps();

    const handleClose = () => setStepOpen(false);
    const [addData, setAddData] = useState([
        { name: 'Timer', data: [] },
        { name: 'Date', data: [] },
        //{ name: 'Counter', data: ['Attendees', 'Children', 'Adults', 'Boys', 'Girls', 'Over 18', 'Under 18', 'Over 60s'] },
        { name: 'Counter', data: ['', '']},
        { name: 'A / B Choice', data: [] },
        { name: 'Text field', data: [] },
        { name: 'Rating', data: [] }
    ]);
    const [counterData, setCounterData] = useState([]);
    const [expanded, setExpanded] = useState('');
    const [cardSaveDetailsOpen, setCardSaveDetailsOpen] = useState(false);

    const upperLimit = 10;
    const lowerLimit = 0;
    const [count, setCount] = useState(lowerLimit);

    const increment = () => {
        if (count < upperLimit)
            setCount(_count => _count + 1)
    }

    const decrement = () => {
        if (count > lowerLimit)
            setCount(_count => _count - 1)
    }

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    const handleSubcontent = (data) => {
        if (counterData?.includes(data)) {
            setCounterData(counterData?.filter((ele) => ele !== data))
        }
        else {
            setCounterData([...counterData, data]);
        }
    }

    const handleSave = () => {
        setCardSaveDetailsOpen(true);
    }

    return (
        <>
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
                            New report card
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
                                <Accordion key={ele?.name} className={`${welcomeClasses.accordion} ${classes.accordion} ${ele?.data?.length > 0 ? '' : welcomeClasses.zeroMargin}`} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                    <div className={classes.accordionSummaryTop} style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4' }}>
                                        <AccordionSummary
                                            expandIcon={expanded === `panel${index + 1}` ?
                                                <AiFillUpCircle className={welcomeClasses.accordionIcon} /> :
                                                <AddCircleOutlineIcon className={welcomeClasses.accordionIcon} />
                                            }
                                            aria-controls={`panel${index + 1}bh-content`}
                                            id={`panel${index + 1}bh-header`}
                                            className={`${welcomeClasses.accordionSummary} ${classes.accordionSummary}`}
                                            style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4' }}
                                        >

                                        </AccordionSummary>
                                        <div className={classes.accordionSummaryRight}>
                                            <div className={classes.accordionSummaryData}>
                                                <Typography className={welcomeClasses.accordionHeadContent}>
                                                    {ele?.name}
                                                </Typography>
                                                {ele?.name == 'Timer' &&
                                                    <Box className={classes.summaryRight}>
                                                        <Input className={classes.summaryRightInput} />
                                                        <Input className={classes.summaryRightInput} />
                                                    </Box>
                                                }
                                                {ele?.name == 'Date' &&
                                                    <Box className={classes.summaryRight}>
                                                        <Input className={classes.summaryRightInput} />
                                                        <Input className={classes.summaryRightInput} />
                                                        <Input className={classes.summaryRightInput} />
                                                    </Box>
                                                }
                                                {ele?.name == 'Counter' &&
                                                    <Box className={classes.summaryRight}>
                                                    <div className={`${classesSteps.countPlusMinus} ${classes.counterSection}`}>
                                                        <div className={classesSteps.countPlusMinusSub}>
                                                            <RemoveCircleOutlineIcon onClick={decrement} />
                                                        </div>

                                                        <div className={classesSteps.countPlusMinusSub} style={{ borderLeft: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf' }}>
                                                            <Box className={`${classesSteps.counterSection}`}>
                                                                <Box className={`${classesSteps.counterTop} ${classesSteps.counterTopAbove} ${classes.counterTopAbove}`}>
                                                                    {count !== lowerLimit ? count - 1 : ''}
                                                                </Box>
                                                                <Box className={`${classesSteps.counterTop} ${classes.counterTop}`}>
                                                                    {count !== lowerLimit ? count - 1 : ''}
                                                                </Box>
                                                                <Box className={`${classesSteps.counterMiddle} ${classes.counterMiddle}`}>
                                                                    {count}
                                                                </Box>
                                                                <Box className={`${classesSteps.counterBottom} ${classes.counterBottom}`}>
                                                                    {count !== upperLimit ? count + 1 : ''}
                                                                </Box>
                                                                <Box className={`${classesSteps.counterBottom} ${classesSteps.counterBottomBelow} ${classes.counterBottomBelow}`}>
                                                                    {count !== upperLimit ? count + 1 : ''}
                                                                </Box>
                                                            </Box>
                                                        </div>
                                                        <div className={classesSteps.countPlusMinusSub}>
                                                            <ControlPointIcon onClick={increment} />
                                                        </div>
                                                    </div>
                                                    </Box>
                                                }
                                                {ele?.name == 'A / B Choice' &&
                                                    <Box className={classes.summaryRight}>
                                                        <div className={classes.happySad} style={{ borderRight: '1px solid rgb(191, 191, 191)' }} ><Image src={Happy} /></div>
                                                        <div className={classes.happySad}><Image src={Sad} /></div>
                                                    </Box>
                                                }
                                                {ele?.name == 'Text field' &&
                                                    <Box className={classes.summaryRight}>
                                                        <Input className={classes.summaryRightInput} />
                                                    </Box>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Box className={classes.summaryRight}>
                                        <Input className={classes.summaryRightInput} />
                                        <Input className={classes.summaryRightInput} />
                                    </Box> */}
                                    <AccordionDetails className={editReportClasses.accordionDetails}>
                                        {ele?.data?.map((data, ind) => {
                                            return (
                                                <>
                                                    {ele?.name == 'Counter' &&
                                                        // <Box className={`${editReportClasses.accordionDetailsBox} ${counterData?.includes(data) ? editReportClasses.accordionDetailsBoxActive : ''}`} onClick={() => handleSubcontent(data)}>
                                                        //     <Typography style={{ fontWeight: 'bold' }}>{data}</Typography>
                                                        // </Box>
                                                        <Box className={classes.counterMain}>
                                                            <Box className={classes.counterLeft}>
                                                                <Box className={newReportClasses.reportDataIcon}>
                                                                    <RiArrowUpDownFill color='#00D084' />
                                                                </Box>
                                                                <Typography className={classes.counterLeftContent}> Counter name </Typography>
                                                            </Box>
                                                            <Box className={classes.counterRight}>
                                                                <Typography> Add </Typography>
                                                                <Typography> Remove </Typography>
                                                            </Box>
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
        <CardSaveDetails 
            cardSaveDetailsOpen={cardSaveDetailsOpen} 
            setCardSaveDetailsOpen={setCardSaveDetailsOpen} 
        />
        </>
    )
}

export default NewstepIndex