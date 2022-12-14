import { makeStyles } from '@material-ui/core/styles';

export const useStyleSteps = makeStyles({
    adultsChildren: {
        borderBottom: '1px solid #cdcdcd',
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        ['@media (max-width:640px)']: {
            flexDirection: 'column',
            marginBottom: '20px'
        },
    },
    adultsChildrenLeft: {
        fontWeight: 'bold !important',
        width: '40%',
        ['@media (max-width:640px)']: {
            width: '100%',
            fontSize: '20px'
        },
    },
    adultsChildrenRight: {
        width: '60%',
        ['@media (max-width:640px)']: {
            width: '100%',
            margin: '20px 0px'
        },
    },
    eventRateMain: {
        textAlign: 'center',
        marginBottom: '150px',
        ['@media (max-width:640px)']: {
            '& h5': {
                fontSize: '20px'
            },
            '& p': {
                fontSize: '14px'
            },
        },
    },
    eventStepper: {
        margin: 'auto',
        marginTop: '50px',
        '& span.Mui-active, span.Mui-completed': {
            '& path': {
                opacity: 0,
            },
            '& svg': {
                borderRadius: '50%',
                background: '#00D084 !important'
            }
        }
    },
    FeedbackTextarea: {
        width: '100%',
        minHeight: '200px',
        padding: '15px',
        boxShadow: '0px 0px 10px #bfbfbf inset',
        //fontWeight: 'bold !important',
        borderRadius: '15px',
        //opacity: '25%',
        border: '0',
        color: '#000',
        fontSize: '14pt',
        fontFamily: 'arial',
        '&:focus': {
            outline: 'none'
        }
    },
    feedbackTitle: {
        textAlign: 'center',
        fontWeight: 'bold !important',
        margin: '30px auto !important',
        ['@media (max-width:640px)']: {
            fontSize: '22px'
        },
    },
    formQueBox: {
        marginBottom: '20px'
    },
    formQueTitle: {
        fontWeight: 'bold !important',
        marginBottom: '10px !important',
        ['@media (max-width:640px)']: {
            fontSize: '15px'
        },
    },
    formQueInput: {
        boxShadow: '0px 0px 10px #bfbfbf inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        width: '100%',
        //opacity: '25%',
        border: '0',
        height: '50px',
        padding: '15px',
        color: '#000',
        ['@media (max-width:640px)']: {
            height: '45px',
            fontSize: '14px'
        },
        "&:before, &:after": {
            content: 'none !important'
        },
    },
    countPlusMinus: {
        borderRadius: '10px',
        display: 'flex',
        boxShadow: '0px 0px 10px #ddd',
        height: '80px',
        maxWidth: '350px',
        width: '100%',
        float: 'right',
        '& svg': {
            color: '#808080',
            height: '40px',
            width: '40px',
            cursor: 'pointer'
        },
        ['@media (max-width:640px)']: {
            //height: '60px',
            '& svg': {
                height: '30px',
                width: '30px',
            }
        },
    },
    countPlusMinusSub: {
        width: '33%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& div.animated-container:nth-child(1)': {
            color: '#e6e6e6 !important',
        },
        '& div.animated-container:nth-child(3)': {
            color: '#9a9a9a !important',
        },
        '& div.animated-container:nth-child(7)': {
            color: '#9a9a9a !important',
        },
        '& div.animated-container:nth-child(9)': {
            color: '#e6e6e6 !important',
        },
    },
    counterSection: {
        backgroundColor: '#fff',
        width: '100%',
        // height: '40px',
        marginTop: '0px',
        paddingTop: '0px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    counterTop: {
        margin: '0',
        padding: '0',
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
    },
    counterMiddle: {
        // backgroundColor: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0',
        padding: '0',
        /* @keyframes example {
             0%   {color:'red'; left:'0px'; top:'0px';}
             25%  {color:'yellow'; left:'200px'; top:'0px';}
             50%  {color:'blue'; left:'200px'; top:'200px';}
             75%  {color:'green'; left:'0px'; top:'200px';}
             100% {color:'red'; left:'0px'; top:'0px';}
           } */
    },
    counterBottom: {
        margin: '0',
        padding: '0',
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
    },
    counterTopAbove: {
        fontSize: '8px',
        color: '#e6e6e6',
        fontWeight: 'bold'
    },
    counterBottomBelow: {
        fontSize: '8px',
        color: '#e6e6e6',
        fontWeight: 'bold'
    },
    happySad: {
        cursor: 'pointer'
    },
    happyActive: {
        backgroundColor: '#00D084',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px'
    },
    sadActive: {
        backgroundColor: '#00D084',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px'
    },
    datePicker: {
        marginTop: '30px',
        textAlign: 'center',
        '& input': {
            height: '45px',
            borderRadius: '10px',
            padding: '10px',
            border: '1px solid #cdcdcd',
            background: '#fff',
            boxShadow: '0px 0px 10px #ddd',
        },
    },
    timerTop: {
        width: 'fit-content',
        height: '45px',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0px 0px 10px #ddd',
        margin: 'auto',
        marginTop: '30px',
        "& div.MuiFormControl-root:first-child": {
            borderRight: '1px solid #cdcdcd',
        },
    },
    timerInput: {
        width: '80px',
        height: '100%',
        padding: '10px',
        "& div.MuiOutlinedInput-root": {
            height: '100%',
        },
        "& fieldset": {
            height: '100%',
            border: '0'
        },
        "&:before, &:after": {
            content: 'none !important'
        },
        '& .MuiInputBase-input': {
            color: "#000 !important",
            "-webkit-text-fill-color": "#000 !important",
        }
    }
})