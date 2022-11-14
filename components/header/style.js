import { makeStyles } from '@material-ui/core/styles'; 

export const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    }, 
    card: {
        width: '45%',  
        margin: 'auto',  
        borderRadius: 0,  
        borderBottom: '5px solid #00D084'
    },
    cardContent: { 
        textAlign: 'center', 
        padding: '20px 50px',
    },
    inputBox: {
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        height: '50px',
        padding: '15px',
        color: '#000',
        "&:before, &:after": {
            content: 'none !important'
        },
        '& .MuiInputBase-input': {
            color: "#000 !important",
            "-webkit-text-fill-color": "#000 !important",
        }
    },
    buttonHead: {
        display: 'flex',
        marginTop: '20px',
        gap: '20px'
    },
    button: {
        width: '50%',
        borderRadius: '15px !important',
        height: '50px',
        fontWeight: 'bold !important',
        fontSize: '20px !important',
    },
    buttonHelp: {
        border: '1px solid red'
    }
}));