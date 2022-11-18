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
import { useStylesCardSave } from './style';

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

const CardSave = ({reportSaved, setReportSaved}) => {
  return (
    <div>CardSave</div>
  )
}

export default CardSave