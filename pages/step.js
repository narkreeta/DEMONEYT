import React, { useState } from 'react'
import ReportIndex from '../components/report'

const Step = () => {
    const [reportOpen, setReportOpen] = useState(true);
    return (
        <div>
            <ReportIndex reportOpen={reportOpen} setReportOpen={setReportOpen} />
        </div>
    )
}

export default Step