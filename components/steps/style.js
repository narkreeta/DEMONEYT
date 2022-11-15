import { makeStyles } from '@material-ui/core/styles'; 

export const useStyleSteps = makeStyles({
    adultsChildren: {
        borderBottom: '1px solid #cdcdcd',
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center'
    },
    adultsChildrenLeft: {
        fontWeight: 'bold !important',
        width: '40%'
    },
    adultsChildrenRight: {
        width: '60%',
    },
    eventRateMain: {
        textAlign: 'center',
        marginBottom: '150px'
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
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        color: '#000',
    },
    feedbackTitle: {
        textAlign: 'center',
        fontWeight: 'bold !important',
        margin: '30px auto !important'
    },
    formQueBox: {
        marginBottom: '20px'
    },
    formQueTitle: {
        fontWeight: 'bold !important',
        marginBottom: '10px !important'
    },
    formQueInput: {
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        width: '100%',
        opacity: '25%',
        border: '0',
        height: '50px',
        padding: '15px',
        color: '#000',
        "&:before, &:after": {
            content: 'none !important'
        },
    },
    countPlusMinus: {
        borderRadius: '10px',
        display: 'flex',
        boxShadow: '0px 0px 10px #ddd',
        height: '80px',
        '& svg': {
            color: '#808080',
            height: '40px',
            width: '40px',
            cursor: 'pointer'
        }
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
})