import { makeStyles } from '@material-ui/core/styles';

export const useStylesReport = makeStyles({
    stepperTop: {
        display: 'flex',
        borderBottom: '1px solid #cdcdcd',
        paddingBottom: '15px',
        marginBottom: '20px',
        ['@media (max-width:767px)']: {
            flexDirection: 'column',
            borderBottom: '0'
        }
    },
    stepperTopLeft: {
        width: '30%',
        color: '#00D084',
        fontWeight: 'bold !important',
        ['@media (max-width:767px)']: {
            width: '100%',
            marginBottom: '20px !important',
            textAlign: 'center'
        },
    },
    stepperTopRight: {
        width: '70%',
        ['@media (max-width:767px)']: {
            width: '100%',
        },
    },
    stepperIcon: {
        border: '1px solid #00D084',
        height: '35px',
        width: '35px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& span": {
            paddingRight: '0 !important'
        },
        "& svg": {
            color: 'transparent',
            height: '25px',
            width: '25px'
        },
        "& span.Mui-active svg": {
            color: '#00D084',
        },
        "& span.Mui-completed svg": {
            color: '#939598',
        },
        "& span.Mui-active svg text": {
            fontSize: '0px'
        },
        '& span.Mui-completed': {
            '& path': {
                opacity: 0,
            },
            '& svg': {
                borderRadius: '50%',
                background: '#cccccc'
            }
        },
        ['@media (max-width:767px)']: {
            height: '25px',
            width: '25px',
            "& svg": {
                height: '15px',
                width: '15px'
            }
        },
    },
    reviewReportMain: {},
    reviewReportTitle: {
        color: '#00D084',
        fontSize: '14px !important',
        fontWeight: 'bold !important',
        marginBottom: '5px !important'
    },
    reviewReportQue: {
        fontSize: '26px !important',
        fontWeight: 'bold !important',
        ['@media (max-width:640px)']: {
            fontSize: '22px !important'
        }
    },
    reviewReportDesc: {},
    reviewReportBlock: {
        display: 'flex',
        marginBottom: '30px',
        borderBottom: '1px solid #00D084',
        paddingBottom: '15px'
    },
    reviewReportTwoBlock: {
        display: 'flex',
        marginBottom: '30px',
        gap: '30px',
        flexFlow: 'column',
        ['@media (max-width:640px)']: {
            flexDirection: 'column',
            gap: '10px'
        }
    },
    reviewReportTwoBlockSub: {
        //width: '50%',
        borderBottom: '1px solid #00D084',
        paddingBottom: '15px',
        ['@media (max-width:640px)']: {
            width: '100%'
        }
    },
    happySad: {
        "& img": {
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '15px',
            marginTop: '5px'
        },
        "& p": {
            display: 'inline-block',
            verticalAlign: 'top',
        }
    },
    reviewReportSubpart: {
        borderBottom: '0 !important',
        marginBottom: '0 !important',
    },
    bannerTitle: {
        '& p:nth-child(1)': {
            fontSize: '20px',
        },
        '& p:nth-child(2)': {
            fontSize: '26px',
            fontWeight: 'bold',
            textTransform: 'capitalize'
        },
    }
});