import { makeStyles } from '@material-ui/core/styles'; 

export const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    }, 
    card: {
        maxWidth: '80%',
        margin: '2rem auto',
        borderRadius: 0,  
        borderBottom: '5px solid #00D084',
        ['@media (max-width:640px)']: {
            maxWidth: '90%',
        }
    },
    cardContent: { 
        textAlign: 'center', 
        padding: '20px 50px',
        ['@media (max-width:640px)']: { 
            padding: '20px'
        }
    },
    inputBox: {
        boxShadow: '0px 0px 10px #bfbfbf inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
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
        },
        '& .MuiInputBase-input::-webkit-input-placeholder': {
            color: "#000 !important",
        },
        '& .MuiInputBase-input:-ms-input-placeholder': {
            color: "#000 !important",
        },
        '& .MuiInputBase-input::placeholder': {
            color: "#000 !important",
        },
    },
    buttonHead: {
        display: 'flex',
        marginTop: '20px',
        gap: '20px',
        ['@media (max-width:640px)']: { 
            flexDirection: 'column-reverse',
            alignItems: 'center'
        }
    },
    button: {
        width: '50%',
        borderRadius: '15px !important',
        height: '50px',
        fontWeight: 'bold !important',
        fontSize: '20px !important',
        ['@media (max-width:640px)']: { 
            width: '100%',
            fontSize: '18px !important',
        }
    },
    buttonHelp: {
        border: '1px solid red'
    },
    errorMsg: {
        margin: '25px 0px',
        color: 'red',
        fontSize: '14px',
        fontWeight: 'bold'
    }
}));