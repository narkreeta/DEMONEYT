import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyleSteps } from './style';

const AdultsChildren = () => {
    const classesSteps = useStyleSteps();
    return (
        <div>
            <Box className={classesSteps.adultsChildren}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }} >
                    Adults
                </Typography>
            </Box>
            <Box className={classesSteps.adultsChildren}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                    Children
                </Typography>
            </Box>
        </div>
    )
}

export default AdultsChildren