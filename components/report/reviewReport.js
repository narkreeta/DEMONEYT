import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStylesReport } from './style';

const ReviewReport = () => {
    const classesReport = useStylesReport();
    return (
        <Box>
            <Typography className={classesReport.reviewReportTitle}>Adults & Children</Typography>
            <Box className={classesReport.reviewReportTwoBlock}>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportQue}>Adults: 5</Typography>
                </Box>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportQue}>Children: 15</Typography>
                </Box>
            </Box>
            <Typography className={classesReport.reviewReportTitle}>Event Rating</Typography>
            <Box className={classesReport.reviewReportBlock}>
                <Typography className={classesReport.reviewReportQue}>Average Rating: 4.5/5</Typography>
            </Box>
            <Box className={classesReport.reviewReportTwoBlock}>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportTitle}>Overall Feelings</Typography>
                    <Box className={`${classesReport.reviewReportTwoBlock} ${classesReport.reviewReportSubpart}`}>
                        <Box className={classesReport.reviewReportTwoBlockSub} style={{ borderBottom: '0', paddingBottom: '0' }}>
                            <Typography className={classesReport.reviewReportQue}>5</Typography>
                        </Box>
                        <Box className={classesReport.reviewReportTwoBlockSub} style={{ borderBottom: '0', paddingBottom: '0' }}>
                            <Typography className={classesReport.reviewReportQue}>1</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportTitle}>Event Costs</Typography>
                    <Typography className={classesReport.reviewReportQue}>$148.50</Typography>
                </Box>
            </Box>
            <Box className={classesReport.reviewReportTwoBlock}>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportTitle}>Event Start Time</Typography>
                    <Typography className={classesReport.reviewReportQue}>10:50am</Typography>
                </Box>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportTitle}>Event End Time</Typography>
                    <Typography className={classesReport.reviewReportQue}>11:43am</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewReport