import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesCardSave = makeStyles({
    cardContent: {
        padding: '25px !important'
    },
    cardSaveDetailsDateTime: {
        display: 'flex',
        gap: '15px'
    },
    timeDateTop: {
        display: 'flex',
        gap: '10px'
    },
    cardSaveDetailsDateTimeFieldTitle: {
        marginBottom: '10px !important',
        fontWeight: '600 !important',
    },
    cardSaveDetailsTitle: {
        fontWeight: 'bold !important',
        borderBottom: '1px solid #cdcdcd',
        paddingBottom: '30px',
        marginBottom: '25px !important'
    },
    cardSaveDetailsDate: {
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        //height: '50px',
        color: '#000',
        width: '150px',
        '& fieldset': {
            border: '0'
        }
    },
    cardSaveDetailsTime: {
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        //height: '50px',
        color: '#000',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "&:before, &:after": {
            content: 'none !important'
        },
        '& .MuiInputBase-input': {
            color: "#000 !important",
            "-webkit-text-fill-color": "#000 !important",
        },
        '& input': {
            padding: '10px',
            border: '0',
            outline: '0'
        },
        '& fieldset': {
            border: '0'
        }
    },
    cardSaveDetailsDateTimeInputBox: {
        marginTop: '30px',
        width: '100%',
    },
    cardSaveDetailsDateTimeInputBoxInput: {
        boxShadow: '0px 0px 10px inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        opacity: '25%',
        border: '0',
        height: '50px',
        padding: '15px',
        color: '#000',
        width: '100%',
        "&:before, &:after": {
            content: 'none !important'
        },
        '& .MuiInputBase-input': {
            color: "#000 !important",
            "-webkit-text-fill-color": "#000 !important",
        }
    },
    cardSavedMain: {
        textAlign: 'center',
        padding: '30px'
    },
    cardSavedMainTitle: {
        margin: '30px 0px',
        fontSize: '30px',
        fontWeight: 'bold'
    },
    cardSavedMainDesc: {
        marginBottom: '50px',
        fontSize: '18px',
    },
    cardSavedMainBtn: {
        border: '2px solid #bfbfbf',
        width: '130px',
        color: '#808080',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: '18px'
    }
});