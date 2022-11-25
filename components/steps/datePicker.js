import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStyleSteps } from './style';
import Typography from '@mui/material/Typography';

const DateStep = ({ title, stepQueAns, setStepQueAns, activeStepData }) => {
    const [Date, setDate] = useState(
        stepQueAns.filter((val) => val?.type == 'Date')?.[0]?.ans ?
        stepQueAns.filter((val) => val?.type == 'Date')?.[0]?.ans : ''
    );
    const classesSteps = useStyleSteps();

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('Date')) {
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'Date')?.[0];
            arr2['ans'] = Date;
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, { name: activeStepData?.name, type: activeStepData?.type, ans: Date }])
        }
    }, [Date]);

    return (
        <div>
            <Typography variant='h5' className={classesSteps.feedbackTitle} >{title}</Typography>
            <div className={classesSteps.datePicker}>
                <DatePicker selected={Date} onChange={(date) => setDate(date)} />
            </div>
        </div>
    )
}

export default DateStep