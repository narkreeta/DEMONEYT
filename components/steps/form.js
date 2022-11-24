import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Input } from '@mui/material'; 
import { useStyleSteps } from './style';

const Form = ({title, stepQueAns, setStepQueAns}) => {
  const classesSteps = useStyleSteps();
  const [questions, setQuestions] = useState([
    {que: 'Did anything out of the usual happen?', ans: ''},
    {que: 'Question two goes here', ans: ''},
  ]);

  const handleChange = (que, e) => {
    let arr = [...questions];
    let arr2 = arr.filter((data) => data?.que == que)?.[0];
    arr2['ans'] = e;
    setQuestions(arr)
  }
  return (
    <div>
        <Typography className={classesSteps.feedbackTitle} variant='h5' >{title}</Typography>
        {questions?.map((data, index) => {
            return (
                <Box className={classesSteps.formQueBox}>
                    <Typography className={classesSteps.formQueTitle}>{`${index + 1}. ${data?.que}`}</Typography>
                    <Input onChange={(e) => handleChange(data?.que, e.target.value)} className={classesSteps.formQueInput} placeholder="Begin typing here..." />
                </Box>
            )
        })}
    </div>
  )
}

export default Form