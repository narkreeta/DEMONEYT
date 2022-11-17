import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';
//import AnimatedNumber from "react-animated-numbers";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Children = () => {
    const classesSteps = useStyleSteps();

    // const [number, setNumber] = useState(0);

    // const increaseNumber = () => {
    //     setNumber(number + 1);
    // };

    // const decreaseNumber = () => {
    //     setNumber(number - 1);
    // };

    const upperLimit = 10;
    const lowerLimit = 0;
    const [count, setCount] = useState(lowerLimit);

    const increment = () => {
        if(count < upperLimit)
            setCount(_count => _count + 1)
    }

    const decrement = () => {
        if(count > lowerLimit)
            setCount(_count => _count - 1)
    }

    return (
        <Box className={classesSteps.adultsChildren}>
            <Typography variant='h5' className={classesSteps.adultsChildrenLeft} >
            Children
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

export default Children