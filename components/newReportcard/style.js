import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesNewreport = makeStyles({
    boxStyle: {
        '&::-webkit-scrollbar': {
            width: '10px'
        },
        '&::-webkit-scrollbar-track': {
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#00D084',
            borderRadius: '10px'
        },
    },
    bannerContent: {
        display: 'flex',
        position: "absolute",
        top: "52px",
        width: "100%",
        textAlign: "left",
        color: '#fff',
        paddingLeft: '40px',
        fontSize: '22pt !important',
        fontWeight: 'bold !important',
        justifyContent: 'space-between',
        //left: '10%'
        '& h4': {
            fontSize: '24pt !important',
        },
        ['@media (max-width:767px)']: {
            '& h4': {
                fontSize: '20pt !important',
            },
            paddingLeft: '15px',
        },
    },
    bannerContentBtn: {
        color: '#fff !important',
        paddingTop: '0 !important',
        marginRight: '35px !important',
        ['@media (max-width:640px)']: {
            marginRight: '0px !important',
        },
    },
    inputBox: {
        boxShadow: '0px 0px 10px inset',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        height: '50px',
        padding: '15px',
        color: '#000',
        width: '100%',
        marginBottom: '30px',
        fontSize: '20px !important',
        fontWeight: 'bold !important',
        "&:before, &:after": {
            content: 'none !important'
        },
    },
    cardContent: {
        padding: '25px 50px !important',
        ['@media (max-width:640px)']: {
            padding: '25px 15px !important',
        }
    },
    reportData: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 0px 15px 10px',
        alignItems: 'center',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        color: '#bfbfbf',
        fontWeight: 'bold'
    },
    reportDataBtn: {
        paddingRight: '0 !important',
        fontWeight: 'bold !important',
        color: '#00D084',
        cursor: 'pointer'
    },
    reportDataIcon: {
        marginRight: '15px',
        display: 'flex',
        height: '30px',
        width: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #00D084',
        borderRadius: '50%',
        cursor: 'pointer',
        
        ['@media (max-width:767px)']: {
            height: '25px',
            width: '25px',
            '& svg': {
                fontSize: '15px'
            },
        }
    },
    addAnotherStep: {
        justifyContent: 'flex-start !important',
        color: '#00D084 !important',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        '& p': {
            fontWeight: 'bold', 
            fontSize: '21pt',
            ['@media (max-width:767px)']: {
                fontSize: '17pt !important',
            },
            ['@media (max-width:640px)']: {
                fontSize: '15pt !important',
            },
        }
        // ['@media (max-width:767px)']: {
        //     fontSize: '22pt !important',
        // }
    },
    btnPart: {
        marginTop: '70px',
        display: 'flex',
        gap: '20px',
        ['@media (max-width:640px)']: {
            flexDirection: 'column-reverse',
            alignItems: 'center',
            gap: '15px',
            '& div.MuiBox-root.css-11qjisw': {
                display: 'none'
            },
        },
    },
    btnPartBtn: {
        width: '50%',
        borderRadius: '15px !important',
        fontSize: '18pt !important',
        textTransform: 'capitalize !important',
        height: '55px',
        fontWeight: 'bold !important',
        "&:hover": {
            backgroundColor: 'transparent !important',
        },
        ['@media (max-width:767px)']: {
            height: '48px',
            fontSize: '14pt !important'
        },
        ['@media (max-width:640px)']: {
            width: '100%',
            height: '43px',
            fontSize: '12pt !important'
        },
    },
    backBtn: {
        border: '2px solid rgba(0, 0, 0, 0.12) !important',
        color: '#939598 !important',
    },
    saveBtn: {
        backgroundColor: '#00D084 !important',
        color: '#fff !important',
        "&:hover": {
            backgroundColor: '#00D084 !important',
        },
    },
});