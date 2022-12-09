import React, { useState } from 'react';
import PastReportPageIndex from '../components/pastReportPage';

const PastReports = () => {
    const [stateDelay, setStateDelay] = useState(false)
    React.useLayoutEffect(() => {
        setStateDelay(true)
    }, [])
    return (
        <>
            {stateDelay && <PastReportPageIndex />}
        </>
    )
}

export default PastReports