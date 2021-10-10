import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor:'pointer'
      
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
      paddingBottom:0,
    },
    cardDescription:{
      lineHeight:'1.5rem',
      height:'3rem',
      // whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
  }
  }));