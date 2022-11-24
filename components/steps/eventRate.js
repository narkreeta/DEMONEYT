import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';
import { useStylesReport } from '../report/style';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const EventRate = ({title, stepQueAns, setStepQueAns, activeStepData}) => {
    const classesReport = useStylesReport();
    const classesSteps = useStyleSteps();
    const steps = ['', '', '', '', ''];
    const [activeStep, setActiveStep] = useState(
        stepQueAns.filter((val) => val?.type == 'Rating')?.[0]?.ans ? 
        stepQueAns.filter((val) => val?.type == 'Rating')?.[0]?.ans - 1 : ''
    );

    const handleRating = (id) => {
        console.log(id, 'id')
        setActiveStep(id);
    }

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('Rating')){
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'Rating')?.[0];
            arr2['ans'] = activeStep + 1;
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, {name: activeStepData?.name, type: activeStepData?.type, ans: activeStep + 1}])
        }
    }, [activeStep]);

    return (
        <div className={classesSteps.eventRateMain}>
            <Typography fontWeight='bold' variant='h5' >{title}</Typography>
            <Typography color='#bfbfbf' style={{ fontWeight: 'bold', marginTop: '5px' }}>1 being awful, 5 being great</Typography>
            <Stepper activeStep={activeStep} className={`${classesReport.stepperTopRight} ${classesSteps.eventStepper}`}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps} style={{ padding: '0', cursor: 'pointer' }} className={classesReport.stepperIcon}>
                            <StepLabel onClick={() => handleRating(index)} style={{ cursor: 'pointer' }} {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    )
}

export default EventRate