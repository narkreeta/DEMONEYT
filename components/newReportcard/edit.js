import React, { useState } from 'react';
import { useStylesNewreport } from "./style";
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import { RiArrowUpDownFill } from 'react-icons/ri';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useStylesWelcome } from '../welcome/style';
import { AiFillUpCircle } from 'react-icons/ai';
import { Button } from '@mui/material';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useStylesEdit } from './editStyle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useStylesNewstep } from '../newStep/style';
import { useStyleSteps } from '../steps/style';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Happy from '../../public/asset/images/Happy.svg';
import Sad from '../../public/asset/images/Sad.svg';
import Image from 'next/image'

import TimerImg from '../../public/asset/images/Frame3.svg';
import CounterImg from '../../public/asset/images/counter.svg';
import HappySadImg from '../../public/asset/images/choice.svg';
import DateImg from '../../public/asset/images/date.svg';
import InputImg from '../../public/asset/images/empty.svg';


const Edit = ({activeEditData, setActiveEditData}) => {
    console.log(activeEditData, 'activeEditData frm edit')
    const classes = useStylesNewreport();
    const welcomeClasses = useStylesWelcome();
    const editClasses = useStylesEdit();
    const newStepClasses = useStylesNewstep();
    const classesSteps = useStyleSteps();

    const [expanded, setExpanded] = useState('');
    // const [editData, setEditData] = useState([
    //     { name: 'Timer', data: [] },
    //     { name: 'Date', data: [] },
    //     { name: 'Counter', data: ['Attendees', 'Children', 'Adults', 'Boys', 'Girls', 'Over 18', 'Under 18', 'Over 60s'] },
    //     { name: 'A / B Choice', data: [] }
    // ]);
    const [editData, setEditData] = useState([
        { name: 'Timer', data: [] },
        { name: 'Date', data: [] },
        //{ name: 'Counter', data: ['Attendees', 'Children', 'Adults', 'Boys', 'Girls', 'Over 18', 'Under 18', 'Over 60s'] },
        { name: 'Counter', data: [{ id: Math.random().toString(16).slice(2), value: '' }] },
        { name: 'A / B Choice', data: [] },
        { name: 'Text field', data: [] },
        { name: 'Rating', data: [] }
    ]);
    const [counterData, setCounterData] = useState([]);

    const upperLimit = 10;
    const lowerLimit = 0;
    const [count, setCount] = useState(lowerLimit);
    const [value, setValue] = useState('');

    console.log(value, 'value')

    const handleRadio = (event) => {
        console.log(event.target.value, 'etv')
        setValue(event.target.value);
        setActiveEditData({id: activeEditData?.id, name: activeEditData?.name, type: event.target.value })
    };

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

    return (
        <div>
            <Input
                className={classes.inputBox} 
                value={activeEditData?.name} 
                onChange={(e) => setActiveEditData({id: activeEditData?.id, name: e.target.value, type: activeEditData?.type })}
            />
            <Typography variant='h5' className={editClasses.categoryTitle}>Select your Category & Data Point</Typography>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleRadio}
            >
            {editData?.map((ele, index) => {
                return (
                    <Accordion key={ele?.name} className={`${welcomeClasses.accordion} ${ele?.data?.length > 0 ? '' : welcomeClasses.zeroMargin}`} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>

                    <div className={`${newStepClasses.accordionSummaryTop} ${newStepClasses.cardContent}`} style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4' }}>
                        
                        <FormControlLabel checked={activeEditData?.type == ele?.name} value={ele?.name} control={<Radio />} />

                            {/* <AccordionSummary
                                                expandIcon={expanded === `panel${index + 1}` ?
                                                    <AiFillUpCircle className={welcomeClasses.accordionIcon} /> :
                                                    <AddCircleOutlineIcon className={welcomeClasses.accordionIcon} />
                                                }
                                                aria-controls={`panel${index + 1}bh-content`}
                                                id={`panel${index + 1}bh-header`}
                                                className={`${welcomeClasses.accordionSummary} ${classes.accordionSummary}`}
                                                style={{ backgroundColor: expanded === `panel${index + 1}` && '#E9FAF4' }}
                                            >

                                            </AccordionSummary> */}
                            <div className={newStepClasses.accordionSummaryRight}>
                                <div className={newStepClasses.accordionSummaryData}>
                                    <Typography className={`${welcomeClasses.accordionHeadContent} ${classes.accordionHeadContent}`}>
                                        {ele?.name}
                                    </Typography>
                                    {ele?.name == 'Timer' &&
                                        // <Box className={newStepClasses.summaryRight}>
                                        //     <Input className={newStepClasses.summaryRightInput} disabled />
                                        //     <Input className={newStepClasses.summaryRightInput} disabled />
                                        // </Box>
                                        <Image src={TimerImg} />
                                    }
                                    {ele?.name == 'Date' &&
                                        // <Box className={newStepClasses.summaryRight}>
                                        //     <Input className={newStepClasses.summaryRightInput} disabled />
                                        //     <Input className={newStepClasses.summaryRightInput} disabled />
                                        //     <Input className={newStepClasses.summaryRightInput} disabled />
                                        // </Box>
                                        <Image src={DateImg} />
                                    }
                                    {ele?.name == 'Counter' &&
                                        // <Box className={newStepClasses.summaryRight}>
                                        //     <div className={`${classesSteps.countPlusMinus} ${newStepClasses.counterSection}`}>
                                        //         <div className={classesSteps.countPlusMinusSub}>
                                        //             <RemoveCircleOutlineIcon style={{ cursor: 'default' }} />
                                        //         </div>

                                        //         <div className={classesSteps.countPlusMinusSub} style={{ borderLeft: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf' }}>
                                        //             <Box className={`${classesSteps.counterSection}`}>
                                        //                 <Box className={`${classesSteps.counterTop} ${classesSteps.counterTopAbove} ${classes.counterTopAbove}`}>
                                        //                     {count !== lowerLimit ? count - 1 : ''}
                                        //                 </Box>
                                        //                 <Box className={`${classesSteps.counterTop} ${classes.counterTop}`}>
                                        //                     {count !== lowerLimit ? count - 1 : ''}
                                        //                 </Box>
                                        //                 <Box className={`${classesSteps.counterMiddle} ${classes.counterMiddle}`}>
                                        //                     {count}
                                        //                 </Box>
                                        //                 <Box className={`${classesSteps.counterBottom} ${classes.counterBottom}`}>
                                        //                     {count !== upperLimit ? count + 1 : ''}
                                        //                 </Box>
                                        //                 <Box className={`${classesSteps.counterBottom} ${classesSteps.counterBottomBelow} ${classes.counterBottomBelow}`}>
                                        //                     {count !== upperLimit ? count + 1 : ''}
                                        //                 </Box>
                                        //             </Box>
                                        //         </div>
                                        //         <div className={classesSteps.countPlusMinusSub}>
                                        //             <ControlPointIcon style={{ cursor: 'default' }} />
                                        //         </div>
                                        //     </div>
                                        // </Box>
                                        <Image src={CounterImg} />
                                    }
                                    {ele?.name == 'A / B Choice' &&
                                        // <Box className={newStepClasses.summaryRight}>
                                        //     <div className={newStepClasses.happySad} style={{ borderRight: '1px solid rgb(191, 191, 191)' }} ><Image src={Happy} /></div>
                                        //     <div className={newStepClasses.happySad}><Image src={Sad} /></div>
                                        // </Box>
                                        <Image src={HappySadImg} />
                                    }
                                    {ele?.name == 'Text field' &&
                                        // <Box className={newStepClasses.summaryRight}>
                                        //     <Input className={newStepClasses.summaryRightInput} />
                                        // </Box>
                                        <Image src={InputImg} />
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <AccordionSummary
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
                        <AccordionDetails className={editClasses.accordionDetails}>
                                {data?.data?.map((data, ind) => {
                                    console.log(data, 'dtt t')
                                    return (
                                        <Box className={`${editClasses.accordionDetailsBox} ${counterData?.includes(data) ? editClasses.accordionDetailsBoxActive : ''}`} onClick={() => handleSubcontent(data)}>
                                            <Typography style={{fontWeight: 'bold'}}>{data}</Typography>
                                        </Box>
                                    )
                                })}
                        </AccordionDetails> */}
                    </Accordion>
                )
            })}
        </RadioGroup>
        </div >
    )
}

export default Edit