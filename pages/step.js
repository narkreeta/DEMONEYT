import React, { useState } from 'react'
import ReportIndex from '../components/report'

const Step = () => {
    const [stateDelay, setStateDelay] = useState(false)
    React.useLayoutEffect(() => {
        setStateDelay(true)
    }, [])
    const [reportOpen, setReportOpen] = useState(true);
    return (
        <div>
            {stateDelay && <ReportIndex reportOpen={reportOpen} setReportOpen={setReportOpen} />}
        </div>
    )
}

export default Step