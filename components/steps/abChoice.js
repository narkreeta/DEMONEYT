import React, {useState, useEffect} from 'react';
import { useStylesNewstep } from '../newStep/style';
import Happy from '../../public/asset/images/Happy.svg';
import Sad from '../../public/asset/images/Sad.svg';
import HappyWhite from '../../public/asset/images/s1.svg';
import SadWhite from '../../public/asset/images/s2.svg';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useStyleSteps } from './style';
import Typography from '@mui/material/Typography';

const AbChoice = ({ title, stepQueAns, setStepQueAns, activeStepData }) => {
    const classesNewstep = useStylesNewstep();
    const classesSteps = useStyleSteps();
    const [value, setValue] = useState(
        stepQueAns.filter((val) => val?.type == 'A / B Choice')?.[0]?.ans ?
        stepQueAns.filter((val) => val?.type == 'A / B Choice')?.[0]?.ans : ''
    );

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('A / B Choice')) {
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'A / B Choice')?.[0];
            arr2['ans'] = value;
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, { name: activeStepData?.name, type: activeStepData?.type, ans: value }])
        }
    }, [value]);

    return (
        <div>
            <Typography variant='h5' className={classesSteps.feedbackTitle} >{title}</Typography>
            <Box className={classesNewstep.summaryRight} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '30px' }}>
                <div onClick={() => setValue('happy')} className={`${classesNewstep.happySad} ${classesSteps.happySad} ${value == 'happy' ? classesSteps.happyActive : ''}`} style={{ borderRight: '1px solid rgb(191, 191, 191)' }} ><Image src={value == 'happy' ? HappyWhite : Happy} /></div>
                <div onClick={() => setValue('sad')} className={`${classesNewstep.happySad} ${classesSteps.happySad} ${value == 'sad' ? classesSteps.sadActive : ''}`}><Image src={value == 'sad' ? SadWhite : Sad} /></div>
            </Box>
        </div>
    )
}

export default AbChoice