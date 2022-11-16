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

const Edit = () => {
    const classes = useStylesNewreport();
    const welcomeClasses = useStylesWelcome();
    const editClasses = useStylesEdit();
    
    const [expanded, setExpanded] = useState('');
    const [editData, setEditData] = useState([
        { name: 'Timer', data: [] },
        { name: 'Date', data: [] },
        { name: 'Counter', data: ['Attendees', 'Children', 'Adults', 'Boys', 'Girls', 'Over 18', 'Under 18', 'Over 60s'] },
        { name: 'A / B Choice', data: [] }
    ]);
    const [counterData, setCounterData] = useState([]);

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
        <div>
            <Input className={classes.inputBox} />
            <Typography variant='h5' className={editClasses.categoryTitle}>Select your Category & Data Point</Typography>
            {editData?.map((data, index) => {
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
                        <AccordionDetails className={editClasses.accordionDetails}>
                                {data?.data?.map((data, ind) => {
                                    console.log(data, 'dtt t')
                                    return (
                                        <Box className={`${editClasses.accordionDetailsBox} ${counterData?.includes(data) ? editClasses.accordionDetailsBoxActive : ''}`} onClick={() => handleSubcontent(data)}>
                                            <Typography style={{fontWeight: 'bold'}}>{data}</Typography>
                                        </Box>
                                    )
                                })}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default Edit