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
    const [formatedDate, setFormatedDate] = useState('');
    const classesSteps = useStyleSteps();

    useEffect(() => {
        if (Date !== ''){
            let dd = String(Date?.getDate()).padStart(2, '0');
            let mm = String(Date?.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = Date?.getFullYear();

            let finalDate = dd + '/' + mm + '/' + yyyy;
            setFormatedDate(finalDate);
        }
    }, [Date]);

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('Date')) {
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'Date')?.[0];
            arr2['ans'] = formatedDate;
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, { name: activeStepData?.name, type: activeStepData?.type, ans: formatedDate }])
        }
    }, [formatedDate]);

    const handleDate = (val) => {
        setDate(val)
    }

    return (
        <div>
            <Typography variant='h5' className={classesSteps.feedbackTitle} >{title}</Typography>
            <div className={classesSteps.datePicker}>
                <DatePicker selected={Date} onChange={(date) => handleDate(date)} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
    )
}

export default DateStep