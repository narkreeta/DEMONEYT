import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesWelcome = makeStyles({
    root: {
        height: '100%',
        minHeight: '100vh', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        //width: '65%',
        //margin: 'auto',
        maxWidth: '80%',
        margin: '2rem auto',
        borderRadius: 0,
        borderBottom: '5px solid #00D084',
        position: 'relative',
        ['@media (max-width:640px)']: { 
            maxWidth: '90%'
        }
    },
    bannerContent: {
        position: "absolute",
        top: "52px",
        width: "100%",
        textAlign: "left",
        color: '#fff',
        paddingLeft: '40px',
        fontSize: '34pt !important',
        fontWeight: 'bold !important',
        //left: '10%'
        ['@media (max-width:767px)']: { 
            fontSize: '28pt !important',
        },
        ['@media (max-width:640px)']: { 
            paddingLeft: '20px !important',
            fontSize: '25pt !important',
        }
    },
    accordionSummary: {
        flexDirection: 'row-reverse',
        padding: '0px 10px',
        transform: 'none',
        transform: 'none !important',
        WebkitTransform: 'none !important',
        //backgroundColor: '#E9FAF4'
        // "&.MuiAccordionSummary-expandIconWrapper": {
        //     border: '2px solid green'
        // } 
    }, 
    cardContent: {
        padding: '0 !important',
    },
    cardContentTitle: {
        color: '#00D084',
        fontSize: '18pt !important',
        borderBottom: '1px solid #cdcdcd !important',
        padding: '12px 12px 12px 40px !important',
        ['@media (max-width:767px)']: { 
            fontSize: '16pt !important',
        },
        ['@media (max-width:640px)']: { 
            paddingLeft: '20px !important',
            fontSize: '14pt !important',
            lineHeight: '1.5'
        }
    },
    accordionMain: {
        // width: '80%',
        // margin: 'auto'
        margin: '0px 40px 30px 40px',
        ['@media (max-width:640px)']: { 
            margin: '0px 20px 30px 20px !important',
        }
    }, 
    accordion: {
        boxShadow: 'none !important',
        '&:last-child': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '0'
        }
    },
    zeroMargin: {
        margin: '0 !important',
        '& .MuiAccordionSummary-root': {
            minHeight: '48px !important',
        },
        '& .MuiAccordionSummary-content': {
            margin: '12px 0px !important',
            display: 'block'
        },
        '& .MuiAccordionDetails-root': {
            padding: '0 !important'
        }
    },
    accordionIcon: {
        color: '#00D084',
        fontSize: '28px !important',
        transform: 'none !important',
        WebkitTransform: 'none !important',
        //marginRight: '15px'
        ['@media (max-width:767px)']: { 
            fontSize: '25px !important',
        },
    },
    accordionHeadContent: {
        marginLeft: '15px !important',
        fontSize: '16pt !important',
        fontWeight: 'bold !important',
        ['@media (max-width:767px)']: { 
            fontSize: '14pt !important',
        },
        ['@media (max-width:640px)']: { 
            fontSize: '13pt !important',
        },
    },
    accordionDetails: {
        padding: '0px 0px 0px 60px !important',
        ['@media (max-width:640px)']: { 
            paddingLeft: '15px !important'
        },
    },
    accordionDetailsBox: {
        borderBottom: '1px solid #cdcdcd',
        padding: '10px',
        '&:last-child': {
            borderBottom: '0',
        }
    },
    accordionDetailsBoxBtn: {
        padding: '0 !important'
    },
    accordionDetailsBoxIcon: {
        color: '#00D084',
        fontSize: '25px'
    },
    accordionDetailsBoxContent: {
        marginLeft: '15px !important',
        fontSize: '14pt !important',
        color: '#000',
        textTransform: 'initial',
        ['@media (max-width:767px)']: { 
            fontSize: '12pt !important',
        },
        ['@media (max-width:767px)']: { 
            fontSize: '11pt !important',
        },
    },
    reportIssue: {
        marginTop: '50px !important',
        fontWeight: 'bold !important',
        fontSize: '13px !important',
        cursor: 'pointer',
        display: 'inline-block',
        textDecoration: 'underline'
    } 
});
