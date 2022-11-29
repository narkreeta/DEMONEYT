import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesUpcomingCurrent = makeStyles({
    cardContentTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px !important',
        alignItems: 'center',
        '& button': {
            padding: 0,
            display: 'block',
            color: '#00D084',
            borderBottom: '1px solid #00D084',
            minWidth: 'auto',
            borderRadius: 0,
            lineHeight: '0.7',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: '17px'
        },
        '& h5': {
            color: '#000',
            fontWeight: 'bold',
            fontSize: '22px'
        }
    },
    bannerContentBtn: {
        color: '#fff !important',
        paddingTop: '0 !important',
        marginRight: '35px !important',
        ['@media (max-width:640px)']: {
            marginRight: '0px !important',
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
    }
});