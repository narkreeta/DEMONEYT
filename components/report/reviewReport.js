import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStylesReport } from './style';
import HappyGreen from '../../public/asset/images/HappyGreen.png';
import SadGreen from '../../public/asset/images/SadGreen.png';
import Image from 'next/image'

const ReviewReport = () => {
    const [Data, setData] = useState([]);
    const classesReport = useStylesReport();

    useEffect(() => {
        if (localStorage != undefined) {
            let data = localStorage != undefined ? JSON.parse(localStorage.getItem("LastReviewReport")) : '';
            setData(data);
        }
    }, []);

    return (
        <Box>
            {/* <Typography className={classesReport.reviewReportTitle}>Adults & Children</Typography>
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
                        <Box className={`${classesReport.reviewReportTwoBlockSub} ${classesReport.happySad}`} style={{ borderBottom: '0', paddingBottom: '0' }}>
                            <Image src={HappyGreen} />
                            <Typography className={classesReport.reviewReportQue}>5</Typography>
                        </Box>
                        <Box className={`${classesReport.reviewReportTwoBlockSub} ${classesReport.happySad}`} style={{ borderBottom: '0', paddingBottom: '0' }}>
                            <Image src={SadGreen} />
                            <Typography className={classesReport.reviewReportQue}>1</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classesReport.reviewReportTwoBlockSub}>
                    <Typography className={classesReport.reviewReportTitle}>Event Costs</Typography>
                    <Typography className={classesReport.reviewReportQue}>$148.50</Typography>
                </Box>
            </Box> */}
            <Box className={classesReport.reviewReportTwoBlock}>
                {Data?.map((data) => {
                    return (
                        <Box className={classesReport.reviewReportTwoBlockSub}>
                            <Typography className={classesReport.reviewReportTitle}>{data?.type}</Typography>
                            <Typography className={classesReport.reviewReportQue}>{`${data?.name}: ${data?.type == 'Timer' ? `${data?.ans?.hour}:${data?.ans?.minute}` : data?.ans}`}</Typography>
                        </Box>
                    )
                })}
            </Box>

        </Box>
    )
}

export default ReviewReport