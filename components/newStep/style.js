import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesNewstep = makeStyles({
    accordionSummary: {
        //display: 'block',
        //border: '1px solid',
    },
    accordionSummaryData: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    summaryRight: {
        display: 'flex',
        boxShadow: '0px 0px 10px #ddd',
        borderRadius: '10px',
        height: '50px',
        '& .MuiInputBase-root': {
            borderRight: '1px solid #bfbfbf'
        },
        '& div.MuiInputBase-root:last-child': {
            borderRight: '0'
        }
    },
    summaryRightInput: {
        width: '70px',
        border: 0,
        padding: '10px',
        "&:before, &:after": {
            content: 'none !important'
        }
    }
});