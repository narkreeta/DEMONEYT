import { makeStyles } from '@material-ui/core/styles'; 

export const useStylesPaststep = makeStyles({
    cardContent: {
        padding: '25px 50px !important',
        ['@media (max-width:500px)']: {
            padding: '25px 15px !important',
        }
    },
})