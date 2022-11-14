import React from 'react';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useStyleSteps } from './style';

const Feedback = () => {
  const classesSteps = useStyleSteps();
  return (
    <div>
        <Typography variant='h5' className={classesSteps.feedbackTitle} >Feedback field</Typography>
        <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Begin typing here..."
            className={classesSteps.FeedbackTextarea}
        />
    </div>
  )
}

export default Feedback