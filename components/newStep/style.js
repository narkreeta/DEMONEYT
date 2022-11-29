import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesNewstep = makeStyles({
    accordion: {
        marginBottom: '0 !important',
        paddingLeft: '15px',
        '& div.MuiAccordionDetails-root': {
            paddingBottom: '0',
            paddingRight: '25px'
        },
        '&.active': {
            backgroundColor: '#e6faf3'
        }
    },
    accordionSummaryTop: {
        display: 'flex',
        minHeight: '78px'
    },
    accordionSummary: {
        //display: 'block',
    },
    accordionSummaryRight: {
        display: 'block',
        width: '100%',
        paddingRight: '25px'
    },
    accordionSummaryData: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        ['@media (max-width:500px)']: {
            flexDirection: 'column',
            padding: '15px 0px'
        }
    },
    accordionHeadContent: {
        marginLeft: '0px !important',
        ['@media (max-width:500px)']: {
            marginLeft: '0 !important',
            marginBottom: '10px !important'
        }
    },
    accordionDetails: {
        ['@media (max-width:500px)']: {
            paddingRight: '0 !important',
        }
    },
    summaryRight: {
        display: 'flex',
        boxShadow: '0px 0px 10px #ddd',
        borderRadius: '10px',
        height: '60px',
        width: '170px',
        alignItems: 'center',
        background: '#fff',
        '& .MuiInputBase-root': {
            borderRight: '1px solid #bfbfbf'
        },
        '& div.MuiInputBase-root:last-child': {
            borderRight: '0'
        },
        ['@media (max-width:500px)']: {
            height: '45px'
        }
    },
    summaryRightInput: {
        //width: '70px',
        border: 0,
        padding: '10px',
        "&:before, &:after": {
            content: 'none !important'
        },
        ['@media (max-width:500px)']: {
            padding: '5px'
        }
    },
    counterSection: {
        height: '100% !important',
        width: '100%',
        '& svg': {
            height: '25px !important',
            width: '25px !important'
        }
    },
    counterTopAbove: {
        fontSize: '7px !important'
    },
    counterTop: {
        fontSize: '9px !important'
    },
    counterMiddle: {
        fontSize: '16px !important'
    },
    counterBottomAbove: {
        fontSize: '7px !important'
    },
    counterBottom: {
        fontSize: '9px !important'
    },
    happySad: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    counterMain: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #cdcdcd',
        minHeight: '50px',
        '&:last-child': {
            borderBottom: '0'
        }
    },
    counterLeft: {
        display: 'flex',
        '& div.makeStyles-reportDataIcon-24': {
            height: '20px',
            width: '20px',
            '& svg': {
                fontSize: '10px'
            }
        }
    },
    counterRight: {
        display: 'flex',
        '& p': {
            color: '#00D084',
            fontWeight: 'bold',
            cursor: 'pointer'
        },
        ['@media (max-width:500px)']: {
            '& p': {
                fontSize: '13px',
                marginRight: '5px !important',
                paddingRight: '5px !important'
            }
        }
    },
    counterRightActive: {
        '& p:first-child': {
            borderRight: '1px solid #00D084',
            marginRight: '15px',
            paddingRight: '15px'
        },
        ['@media (max-width:500px)']: {
            marginRight: '5px',
            paddingRight: '5px'
        }
    },
    counterLeftContent: {
        color: '#bfbfbf',
        ['@media (max-width:500px)']: {
            '& input': {
                fontSize: '13px !important'
            }
        }
    },
    counterInput: {
        "&:before, &:after": {
            content: 'none !important'
        }
    },
    cardContent: {
        "& .Mui-checked": {
            color: '#00D084 !important'
        }
    },
    errorMsg: {
        color: 'red',
        fontSize: '13px !important',
        fontWeight: 'bold !important',
        position: 'relative',
        top: '-10px'
    }
});