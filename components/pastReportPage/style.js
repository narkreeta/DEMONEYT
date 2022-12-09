import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesPastReportPage = makeStyles({
    pastReportMain: {
        maxWidth: '80%',
        margin: '2rem auto',
        width: '100%',
    },
    boxStyle: {
        position: 'relative',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
        height: 'auto',
        maxWidth: '90%',
        margin: 'auto',
        borderBottom: '5px solid #00D084'
    },
});