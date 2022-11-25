import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { useStyleSteps } from './style';
import Typography from '@mui/material/Typography';

const Timer = ({ title, stepQueAns, setStepQueAns, activeStepData }) => {
    const [hour, setHour] = useState(
        stepQueAns.filter((val) => val?.type == 'Timer')?.[0]?.ans?.hour ?
        stepQueAns.filter((val) => val?.type == 'Timer')?.[0]?.ans?.hour : ''
    );
    const [minute, setMinute] = useState(
        stepQueAns.filter((val) => val?.type == 'Timer')?.[0]?.ans?.minute ?
        stepQueAns.filter((val) => val?.type == 'Timer')?.[0]?.ans?.minute : ''
    );
    const classesSteps = useStyleSteps();

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('Timer')) {
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'Timer')?.[0];
            arr2['ans'] = {hour: hour, minute: minute};
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, { name: activeStepData?.name, type: activeStepData?.type, ans: {hour: hour, minute: minute} }])
        }
    }, [hour, minute]);

    return (
        <div>
            <Typography variant='h5' className={classesSteps.feedbackTitle} >{title}</Typography>
            <Box className={classesSteps.timerTop}>
                <Input type='number' className={classesSteps.timerInput} value={hour} onChange={(e) => setHour(e.target.value)} />
                <Input type='number' className={classesSteps.timerInput} value={minute} onChange={(e) => setMinute(e.target.value)} />
            </Box>
        </div>
    )
}

export default Timer