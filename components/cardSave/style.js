import { makeStyles } from '@material-ui/core/styles';

export const useStylesCardSave = makeStyles({
    cardContent: {
        padding: '25px !important',
        ['@media (max-width:500px)']: {
            padding: '25px 15px !important',
        }
    },
    cardSaveDetailsDateTime: {
        display: 'flex',
        flexDirection: 'column',
        ['@media (max-width:767px)']: {
            flexDirection: 'column'
        }
    },
    timeDateTop: {
        display: 'flex',
        gap: '10px',
        ['@media (max-width:500px)']: {
            flexDirection: 'column'
        }
    },
    cardSaveDetailsDateTimeFieldTitle: {
        marginBottom: '10px !important',
        fontWeight: '600 !important',
        ['@media (max-width:500px)']: {
            fontSize: '15px !important'
        }
    },
    cardSaveDetailsTitle: {
        fontWeight: 'bold !important',
        borderBottom: '1px solid #cdcdcd',
        paddingBottom: '30px',
        marginBottom: '25px !important',
        ['@media (max-width:767px)']: {
            fontSize: '26px !important'
        }
    },
    cardSaveDetailsDate: {
        boxShadow: '0px 0px 10px #bfbfbf inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        //opacity: '25%',
        border: '0',
        //height: '50px',
        color: '#000',
        width: '50%',
        '& fieldset': {
            border: '0'
        },
        ['@media (max-width:500px)']: {
            height: '50px',
            width: '100%'
        }
    },
    cardSaveDetailsTime: {
        boxShadow: '0px 0px 10px #bfbfbf inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        //opacity: '25%',
        border: '0',
        //height: '50px',
        color: '#000',
        width: '50%',
        display: 'flex',
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
        },
        ['@media (max-width:500px)']: {
            height: '50px',
            width: '100%'
        }
    },
    cardSaveDetailsDateTimeInputBox: {
        marginTop: '30px',
        width: '100%',
    },
    cardSaveDetailsDateTimeInputBoxInput: {
        boxShadow: '0px 0px 10px #bfbfbf inset',
        fontWeight: 'bold !important',
        borderRadius: '15px',
        //opacity: '25%',
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
        padding: '30px',
        ['@media (max-width:500px)']: {
            '& img': {
                height: '90px',
                width: '90px'
            },
            padding: '15px'
        }
    },
    cardSavedMainTitle: {
        margin: '30px 0px !important',
        fontSize: '30px !important',
        fontWeight: 'bold !important',
        ['@media (max-width:500px)']: {
            fontSize: '23px !important',
        }
    },
    cardSavedMainDesc: {
        marginBottom: '50px !important',
        fontSize: '18px !important',
        ['@media (max-width:500px)']: {
            fontSize: '15px !important',
        }
    },
    cardSavedMainBtn: {
        border: '2px solid #bfbfbf !important',
        width: '130px',
        color: '#808080 !important',
        textTransform: 'capitalize !important',
        fontWeight: 'bold !important',
        fontSize: '18px !important'
    }
});