import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';
import { useStylesReport } from '../report/style';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const EventRate = () => {
    const classesReport = useStylesReport();
    const classesSteps = useStyleSteps();
    const steps = ['', '', '', '', '', ''];
    const [activeStep, setActiveStep] = useState('');

    const handleRating = (id) => {
        setActiveStep(id);
    }

    return (
        <div className={classesSteps.eventRateMain}>
            <Typography fontWeight='bold' variant='h5' >How would you rate todays event</Typography>
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