import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesReport = makeStyles({
    stepperTop: {
        display: 'flex',
        borderBottom: '1px solid #cdcdcd',
        paddingBottom: '15px',
        marginBottom: '20px'
    },
    stepperTopLeft: {
        width: '30%',
        color: '#00D084',
        fontWeight: 'bold !important'
    },
    stepperTopRight: {
        width: '70%',
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
            color: 'transparent'
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
        }
    },
});