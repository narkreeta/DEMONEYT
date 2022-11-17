import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Backdrop from '@mui/material/Backdrop';
import { useStylesNewreport } from '../newReportcard/style';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useStylesReport } from './style';
import AdultsChildren from '../steps/adultsChildren';
import EventRate from '../steps/eventRate';
import Feedback from '../steps/feedback';
import Form from '../steps/form';

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

const ReportIndex = ({ reportOpen, setReportOpen }) => {
  const classesNewreport = useStylesNewreport();
  const classesReport = useStylesReport();
  const steps = ['', '', '', '', '', ''];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const handleClose = () => setReportOpen(false);

  const isStepOptional = (step) => {
    //return step === 1;
    return;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(activeStep, 'activeStep');

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={reportOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={reportOpen}>
        <Box sx={style}>
          <CardMedia
            component="img"
            height="150"
            image={Banner.src}
            alt="Banner"
            title="Contemplative Reptile"
          />
          <Box className={classesNewreport.bannerContent}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              fontWeight="bold"
            >
              Making a report:
            </Typography>
            <Button className={classesNewreport.bannerContentBtn} onClick={() => handleClose()}>
              <HighlightOffIcon style={{ fontSize: '30px' }} />
            </Button>
          </Box>
          <CardContent className={classesNewreport.cardContent}>
            <Box>
              <Box className={classesReport.stepperTop}>
                <Typography variant='h5' className={classesReport.stepperTopLeft}>Step 1 of {activeStep + 1}</Typography>
                <Stepper activeStep={activeStep} className={classesReport.stepperTopRight}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //   labelProps.optional = (
                    //     <Typography variant="caption">Optional</Typography>
                    //   );
                    // }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps} style={{ padding: '0' }} className={classesReport.stepperIcon}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                  { activeStep == 0 && <AdultsChildren />}
                  { activeStep == 1 && <EventRate />}
                  { activeStep == 2 && <Feedback />}
                  { activeStep == 3 && <Form />}
                  <Box className={classesNewreport.btnPart}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={`${classesNewreport.btnPartBtn} ${classesNewreport.backBtn}`}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                      <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                        Skip
                      </Button>
                    )}
                    <Button className={`${classesNewreport.btnPartBtn} ${classesNewreport.saveBtn}`} onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </CardContent>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ReportIndex