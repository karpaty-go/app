import { makeStyles } from '@material-ui/core/styles';
import * as screenSizes from '../../constants/screen-sizes'
const { MD, LG } = screenSizes

export const useStyles = makeStyles((theme) => ({
    searchInputContainer:{
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.between(LG,MD)]: {
            width:'100%',
            justifyContent:'center',
        },
        [theme.breakpoints.down(MD)]: {
            width:'100%',
            justifyContent: 'space-between',
            
        },
    },
    searchInput:{
        color:'#000',
        backgroundColor:'#fff',
        fontSize: '2.5rem !important',
        [theme.breakpoints.down(LG)]: {
            width:'90%'
          },
    },
    iconButton:{
    color:'#fff !important',
    '&:hover': {
        color:'#2da1c4'
      },
    fontSize: '3rem !important',
    },
    logoWrapper:{
        padding: theme.spacing(1),
        display:'flex',
        alignItems:'center'
    },
    logoImage:{
        width:'220px',

    },
    toolbarLink: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        flexShrink: 0,
        fontSize: 'inherit',
        textDecoration: 'none',
        color:'inherit',
        '&:hover': {
          color: '#2da1c4',
        },
        fontWeight:'400'
      },
      activeLink:{
        color:'#2da1c4'
      },
  }));