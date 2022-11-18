import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStylesNewreport } from '../newReportcard/style';
import CardContent from '@mui/material/CardContent';
import { useStylesCardSave } from './style';
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardSave from './cardSave';

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

const CardSaveDetails = ({cardSaveDetailsOpen, setCardSaveDetailsOpen}) => {
  const handleClose = () => setCardSaveDetailsOpen(false);
  const newReportClasses = useStylesNewreport();
  const classes = useStylesCardSave();
  const [reportSaved, setReportSaved] = useState(false);

  return (
    <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={cardSaveDetailsOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={cardSaveDetailsOpen}>
                <Box sx={style}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={Banner.src}
                        alt="Banner"
                        title="Contemplative Reptile"
                    />
                    <Box className={newReportClasses.bannerContent}>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="h4"
                            fontWeight="bold"
                        >
                            Report card saved!
                        </Typography>
                        <Button className={newReportClasses.bannerContentBtn} onClick={() => handleClose()}>
                            <HighlightOffIcon style={{ fontSize: '30px' }} />
                        </Button>
                    </Box>
                    <CardContent className={`${newReportClasses.cardContent} ${classes.cardContent}`}>
                        <Typography 
                            variant="h4" 
                            className={classes.cardSaveDetailsTitle}
                        >
                            Card: Art Class
                        </Typography>
                        <Box>
                            <Box className={classes.cardSaveDetailsDateTime}>
                                <Box>
                                    <Typography className={classes.cardSaveDetailsDateTimeFieldTitle} >Start time and date</Typography>
                                    <Box className={classes.timeDateTop}>
                                        <TextField
                                            id="time"
                                            type="time"
                                            className={classes.cardSaveDetailsTime}
                                        />
                                        <TextField 
                                            id="date"
                                            type="date"
                                            className={classes.cardSaveDetailsDate}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>End time and date</Typography>
                                    <Box className={classes.timeDateTop}>
                                        <TextField
                                            id="time"
                                            type="time"
                                            className={classes.cardSaveDetailsTime}
                                        />
                                        <TextField 
                                            id="date"
                                            type="date"
                                            className={classes.cardSaveDetailsDate}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.cardSaveDetailsDateTimeInputBox}>
                            <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>Email address for card recipients</Typography>
                            <Input className={classes.cardSaveDetailsDateTimeInputBoxInput} />
                        </Box>
                        <Box className={classes.cardSaveDetailsDateTimeInputBox}>
                            <Typography className={classes.cardSaveDetailsDateTimeFieldTitle}>Email address for report recipients</Typography>
                            <Input className={classes.cardSaveDetailsDateTimeInputBoxInput} />
                        </Box>
                        <Box className={newReportClasses.btnPart}>
                            <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.backBtn}`}>Back</Button>
                            <Button className={`${newReportClasses.btnPartBtn} ${newReportClasses.saveBtn}`}>Save</Button>
                        </Box>
                    </CardContent>
                </Box>
            </Fade>
        </Modal>
        {/* <CardSave reportSaved={reportSaved} setReportSaved={setReportSaved} /> */}
    </>
  )
}

export default CardSaveDetails