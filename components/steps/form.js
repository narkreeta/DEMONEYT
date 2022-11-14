import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Input } from '@mui/material'; 
import { useStyleSteps } from './style';

const Form = () => {
  const classesSteps = useStyleSteps();
  const [questions, setQuestions] = useState([
    {que: 'Did anything out of the usual happen?', ans: ''},
    {que: 'Question two goes here', ans: ''},
  ]);
  return (
    <div>
        <Typography className={classesSteps.feedbackTitle} variant='h5' >Please fill out this form</Typography>
        {questions?.map((data, index) => {
            return (
                <Box className={classesSteps.formQueBox}>
                    <Typography className={classesSteps.formQueTitle}>{`${index + 1}. ${data?.que}`}</Typography>
                    <Input className={classesSteps.formQueInput} placeholder="Begin typing here..." />
                </Box>
            )
        })}
    </div>
  )
}

export default Form