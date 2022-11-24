import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useStyleSteps } from './style';

const Feedback = ({title, stepQueAns, setStepQueAns, activeStepData}) => {
  const classesSteps = useStyleSteps();
  const [value, setValue] = useState(
    stepQueAns.filter((val) => val?.type == 'Text field')?.[0]?.ans ? 
    stepQueAns.filter((val) => val?.type == 'Text field')?.[0]?.ans : ''
  );

  useEffect(() => {
    let data = stepQueAns?.map((data) => data?.type);
    if (data.includes('Text field')){
        let arr = [...stepQueAns];
        let arr2 = arr.filter((val) => val?.type == 'Text field')?.[0];
        arr2['ans'] = value;
        setStepQueAns(arr)
    }
    else {
        setStepQueAns([...stepQueAns, {name: activeStepData?.name, type: activeStepData?.type, ans: value}])
    }
  }, [value]);

  return (
    <div>
        <Typography variant='h5' className={classesSteps.feedbackTitle} >{title}</Typography>
        <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Begin typing here..."
            className={classesSteps.FeedbackTextarea}
            value= {value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default Feedback