import React, { useState, useEffect } from 'react';
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
import ReviewReport from './reviewReport';
import ReportSave from './reportSave';
import AbChoice from '../steps/abChoice';
import DateStep from '../steps/datePicker';
import Timer from '../steps/timer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: 'auto',
  maxHeight: '90%',
  overflowY: 'scroll',
  paddingBottom: '30px',
  borderBottom: '5px solid #00D084'
};

const ReportIndex = ({ reportOpen, setReportOpen }) => {
  const classesNewreport = useStylesNewreport();
  const classesReport = useStylesReport();

  const [activeStep, setActiveStep] = useState(0);
  const [activeStepData, setActiveStepData] = useState('');
  const [skipped, setSkipped] = React.useState(new Set());
  const [reportSaved, setReportSaved] = useState(false);
  const [reportName, setReportName] = useState('');
  const [stepData, setStepData] = useState([]);
  const [stepQueAns, setStepQueAns] = useState([]);
  const steps = stepData;
  const handleClose = () => setReportOpen(false);

  console.log(stepQueAns, 'stepQueAns')
  
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
    if (activeStep === steps?.length - 1){
      console.log(stepQueAns, 'stepQueAns before save')
      let arr = stepQueAns?.filter((data) => data.name == 'Date')?.[0];
      console.log(typeof(arr?.ans), 'arr ans')
      localStorage.setItem("LastReviewReport", JSON.stringify(stepQueAns));
      localStorage.setItem("LastReviewReportName", reportName);
    }
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


  useEffect(() => {
    if (localStorage != undefined) {
      let data = localStorage != undefined ? JSON.parse(localStorage.getItem("ReportCard")) : '';
      setReportName(data?.name);
      setStepData(data?.step);
    }
  }, []);

  useEffect(() => {
    setActiveStepData(steps?.filter((data, ind) => ind == activeStep)?.[0]);
  }, [activeStep, steps]);

  return (
    <>
      {/* <Modal
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
        <Fade in={reportOpen}> */}
        <Box className={classesReport.stepperMain}>
          <Box
            //sx={style} 
            className={classesNewreport.boxStyleMain}
          >
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
                {activeStep === steps?.length ? (
                  <div className={classesReport.bannerTitle}>
                    <Typography>Review your report</Typography>
                    <Typography>{reportName}</Typography>
                  </div>
                ) : (
                  <div className={classesReport.bannerTitle}>
                    <Typography>Making a report: <span style={{ fontWeight: 'bold' }}>{reportName}</span></Typography>
                    <Typography>
                      {activeStepData?.name} 
                      {/* {activeStepData?.type} */}
                    </Typography>
                  </div>
                )
                }
              </Typography>
              {/* <Button tabIndex="-1" className={classesNewreport.bannerContentBtn} onClick={() => handleClose()}>
                <HighlightOffIcon style={{ fontSize: '30px' }} />
              </Button> */}
            </Box>
            <CardContent className={classesNewreport.cardContent}>
              <Box>
                {activeStep !== steps?.length && <Box className={classesReport.stepperTop}>
                  <Typography variant='h5' className={classesReport.stepperTopLeft}>Step {activeStep + 1} of {steps?.length}</Typography>
                  <Stepper activeStep={activeStep} className={classesReport.stepperTopRight}>
                    {steps?.map((label, index) => {
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
                        <Step key={label?.name} {...stepProps} style={{ padding: '0' }} className={classesReport.stepperIcon}>
                          <StepLabel {...labelProps}></StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Box>}
                {activeStep === steps?.length ? (
                  <>
                    <ReviewReport stepQueAns={stepQueAns} />
                    <Box className={classesNewreport.btnPart}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={`${classesNewreport.btnPartBtn} ${classesNewreport.backBtn}`}
                      >
                        Back
                      </Button>
                      <Button onClick={() => setReportSaved(true)} className={`${classesNewreport.btnPartBtn} ${classesNewreport.saveBtn}`}>
                        Send
                      </Button>
                    </Box>
                  </>
                ) : (
                  <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    {/* {activeStep == 0 && <AdultsChildren />}
                  {activeStep == 1 && <EventRate />}
                  {activeStep == 2 && <Feedback />}
                  {activeStep == 3 && <Form />} */}
                    {activeStepData?.type == 'Timer' &&
                      <Timer
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />
                    }
                    {activeStepData?.type == 'Date' &&
                      <DateStep
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />
                    }
                    {activeStepData?.type == 'Counter' &&
                      <AdultsChildren
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />}
                    {activeStepData?.type == 'Rating' &&
                      <EventRate
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />}
                    {activeStepData?.type == 'Text field' &&
                      <Feedback
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />}
                    {activeStepData?.type == 'A / B Choice' &&
                      <AbChoice
                        title={activeStepData?.name}
                        stepQueAns={stepQueAns}
                        setStepQueAns={setStepQueAns}
                        activeStepData={activeStepData}
                      />
                    }
                    {/* {activeStepData?.type == 'A / B Choice' && <Form title={activeStepData?.name} stepQueAns={stepQueAns} setStepQueAns={setStepQueAns} />} */}
                    <Box className={classesNewreport.btnPart}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={`${classesNewreport.btnPartBtn} ${classesNewreport.backBtn}`}
                        tabIndex="-1"
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      {isStepOptional(activeStep) && (
                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                          Skip
                        </Button>
                      )}
                      <Button tabIndex="-1" className={`${classesNewreport.btnPartBtn} ${classesNewreport.saveBtn}`} onClick={() => handleNext()}>
                        {activeStep === steps?.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Box>
            </CardContent>
          </Box>
        </Box>
        {/* </Fade>
      </Modal> */}
      <ReportSave reportSaved={reportSaved} setReportSaved={setReportSaved} />
    </>
  )
}

export default ReportIndex