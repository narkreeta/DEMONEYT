import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';
//import AnimatedNumber from "react-animated-numbers";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Adults = ({title, stepQueAns, setStepQueAns, activeStepData}) => {
    const classesSteps = useStyleSteps();
    // const [number, setNumber] = useState(0);

    // const increaseNumber = () => {
    //     setNumber(number + 1);
    // };

    // const decreaseNumber = () => {
    //     setNumber(number - 1);
    // };
    // console.log(number, 'number')

    const upperLimit = 10;
    const lowerLimit = 0;
    const [count, setCount] = useState(
        stepQueAns.filter((val) => val?.type == 'Counter')?.[0]?.ans ? 
        stepQueAns.filter((val) => val?.type == 'Counter')?.[0]?.ans : lowerLimit
    );

    const increment = () => {
        if(count < upperLimit)
            setCount(_count => _count + 1)
    }

    const decrement = () => {
        if(count > lowerLimit)
            setCount(_count => _count - 1)
    }

    useEffect(() => {
        let data = stepQueAns?.map((data) => data?.type);
        if (data.includes('Counter')){
            let arr = [...stepQueAns];
            let arr2 = arr.filter((val) => val?.type == 'Counter')?.[0];
            arr2['ans'] = count;
            setStepQueAns(arr)
        }
        else {
            setStepQueAns([...stepQueAns, {name: activeStepData?.name, type: activeStepData?.type, ans: count}])
        }
    }, [count]);

    return (
        <Box className={classesSteps.adultsChildren}>
            <Typography variant='h5' className={classesSteps.adultsChildrenLeft} >
                {title}
            </Typography>
            <Box className={classesSteps.adultsChildrenRight}>
                <div className={classesSteps.countPlusMinus}>
                    <div className={classesSteps.countPlusMinusSub}>
                        <RemoveCircleOutlineIcon onClick={decrement} />
                    </div>
                    {/* <div className={classesSteps.countPlusMinusSub} style={{ borderLeft: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf' }}>
                        <AnimatedNumber animateToNumber={number - 2} fontStyle={{ fontSize: 8 }} />
                        <AnimatedNumber animateToNumber={number - 1} fontStyle={{ fontSize: 12 }} />
                        <AnimatedNumber
                            fontStyle={{ fontSize: 26 }}
                            animateToNumber={number}
                            includeComma
                            config={{ tension: 89, friction: 35 }}
                            onStart={() => console.log("onStart")}
                            onFinish={() => console.log("onFinish")}
                            animationType={"calm"}
                        />
                        <AnimatedNumber animateToNumber={number + 1} fontStyle={{ fontSize: 12 }} />
                        <AnimatedNumber animateToNumber={number + 2} fontStyle={{ fontSize: 8 }} />
                    </div> */}
                    <div className={classesSteps.countPlusMinusSub} style={{ borderLeft: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf' }}>
                        <Box className={classesSteps.counterSection}>
                            <Box className={`${classesSteps.counterTop} ${classesSteps.counterTopAbove}`}>
                                {count !== lowerLimit ? count - 1 : ''}
                            </Box>
                            <Box className={classesSteps.counterTop}>
                                {count !== lowerLimit ? count - 1 : ''}
                            </Box>
                            <Box className={classesSteps.counterMiddle}>
                                {count}
                            </Box>
                            <Box className={classesSteps.counterBottom}>
                                {count !== upperLimit ? count + 1 : ''}
                            </Box>
                            <Box className={`${classesSteps.counterBottom} ${classesSteps.counterBottomBelow}`}>
                                {count !== upperLimit ? count + 1 : ''}
                            </Box>
                        </Box>
                    </div>
                    <div className={classesSteps.countPlusMinusSub}>
                        <ControlPointIcon onClick={increment} />
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Adults