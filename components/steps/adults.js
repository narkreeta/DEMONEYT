import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';
import AnimatedNumber from "react-animated-numbers";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Adults = () => {
    const classesSteps = useStyleSteps();
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    const decreaseNumber = () => {
        setNumber(number - 1);
    };
    console.log(number, 'number')
    return (
        <Box className={classesSteps.adultsChildren}>
            <Typography variant='h5' className={classesSteps.adultsChildrenLeft} >
                Adults
            </Typography>
            <Box className={classesSteps.adultsChildrenRight}>
                <div className={classesSteps.countPlusMinus}>
                    <div className={classesSteps.countPlusMinusSub}>
                        <RemoveCircleOutlineIcon onClick={decreaseNumber} />
                    </div>
                    <div className={classesSteps.countPlusMinusSub} style={{ borderLeft: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf' }}>
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
                    </div>
                    <div className={classesSteps.countPlusMinusSub}>
                        <ControlPointIcon onClick={increaseNumber} />
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Adults