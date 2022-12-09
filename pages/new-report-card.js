import React, { useState } from 'react';
import NewReportIndex from '../components/newReportcard';

const NewReportCard = () => {
    const [stepsData, setStepsData] = useState([]);
    const [stateDelay, setStateDelay] = useState(false)
    React.useLayoutEffect(() => {
        setStateDelay(true)
    }, [])
    return (
        <>
            {stateDelay && <NewReportIndex
                stepsData={stepsData} 
                setStepsData={setStepsData}
            />}
        </>
    )
}

export default NewReportCard