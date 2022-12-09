import React, { useState } from 'react';
import UpcommingCurrentIndex from '../components/upcomingCurrentReports';

const UpcomingCurrentReport = () => {
    const [stateDelay, setStateDelay] = useState(false)
    React.useLayoutEffect(() => {
        setStateDelay(true)
    }, [])
    return (
        <>
            {stateDelay && <UpcommingCurrentIndex userName="test" />}
        </>
    )
}

export default UpcomingCurrentReport