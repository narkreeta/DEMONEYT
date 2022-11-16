import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Banner from '../../public/asset/images/Applogo-Banner-2.png';
import { useStylesNewreport } from "./style";
import CardContent from '@mui/material/CardContent';
import { Input } from '@mui/material';
import { RiArrowUpDownFill } from 'react-icons/ri';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Edit from './edit';
import NewstepIndex from '../newStep';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const NewReportIndex = ({ open, setOpen }) => {
    const classes = useStylesNewreport();
    const handleClose = () => setOpen(false);
    const [state, setState] = useState(['Step1']);
    const [edit, setEdit] = useState(false);
    const [reportName, setReportName] = useState('');
    const [stepOpen, setStepOpen] = useState(false);

    const handleBack = () => {
        setEdit(false)
    }

    return (
        <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={Banner.src}
                        alt="Banner"
                        title="Contemplative Reptile"
                    />
                    <Box className={classes.bannerContent}>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="h4"
                            fontWeight="bold"
                        >
                            Creating new report card
                        </Typography>
                        <Button className={classes.bannerContentBtn} onClick={() => handleClose()}>
                            <HighlightOffIcon style={{ fontSize: '30px' }} />
                        </Button>
                    </Box>
                    <CardContent className={classes.cardContent}>
                        {edit ?
                            <Edit /> :
                            <>
                                <Input placeholder='Report card name' className={classes.inputBox} value={reportName} onChange={(e) => setReportName(e.target.value)} />
                                {state?.map((data) => {
                                    return (
                                        <Box className={classes.reportData}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Box className={classes.reportDataIcon}>
                                                    <RiArrowUpDownFill color='#00D084' />
                                                </Box>
                                                <Typography style={{ fontWeight: 'bold' }}>{data}: Tap to edit</Typography>
                                            </div>
                                            <Typography className={classes.reportDataBtn} onClick={() => setEdit(true)}>Edit</Typography>
                                        </Box>
                                    )
                                })}
                                <Box className={`${classes.reportData} ${classes.addAnotherStep}`}>
                                    <Box className={classes.reportDataIcon} onClick={() => setStepOpen(true)}>
                                        <AddIcon color='#00D084' />
                                    </Box>
                                    <Typography>Add another step</Typography>
                                </Box>
                            </>
                        }
                        <Box className={classes.btnPart}>
                            <Button className={`${classes.btnPartBtn} ${classes.backBtn}`} onClick={() => handleBack()}>Back</Button>
                            <Button className={`${classes.btnPartBtn} ${classes.saveBtn}`}>Save</Button>
                        </Box>
                    </CardContent>
                </Box>
            </Fade>
        </Modal>
        <NewstepIndex stepOpen={stepOpen} setStepOpen={setStepOpen} />
        </>
    )
}

export default NewReportIndex