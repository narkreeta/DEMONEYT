import React from 'react';
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
import { useStylesCardSave } from '../cardSave/style';
import rightIcon from '../../public/asset/images/rightIcon.png';
import Image from 'next/image'

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

const ReportSave = ({ reportSaved, setReportSaved }) => {
  const newReportClasses = useStylesNewreport();
  const classes = useStylesCardSave();
  const handleClose = () => setReportSaved(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={reportSaved}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={reportSaved}>
        <Box sx={style} className={newReportClasses.boxStyle}>
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
            <Box className={classes.cardSavedMain}>
              <Image src={rightIcon} />
              <Typography className={classes.cardSavedMainTitle} variant='h5'>Your card has been successfully sent.</Typography>
              <Button className={classes.cardSavedMainBtn} onClick={() => handleClose()}>Back</Button>
            </Box>
          </CardContent>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ReportSave