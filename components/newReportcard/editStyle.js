import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesEdit = makeStyles({
    accordionDetails: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        paddingLeft: '0',
        paddingRight: '0',
    },
    accordionDetailsBox: {
        padding: '5px',
        minWidth: '23%',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#bfbfbf',
        color: '#808080',
        cursor: 'pointer',
    },
    accordionDetailsBoxActive: {
        backgroundColor: '#00D084 !important',
        color: '#fff !important'
    },
    categoryTitle: {
        color: '#00D084',
        fontWeight: 'bold !important',
        marginBottom: '30px !important'
    }
});