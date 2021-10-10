import { makeStyles } from '@material-ui/core/styles';
import * as screenSizes from '../../constants/screen-sizes'
const {MD, LG} = screenSizes

export const useStyles = makeStyles((theme) => ({
  headerContainer:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  backgroundColor:'#000',
  color:'#fff',
  fontSize: '1.3rem',
  position:'sticky',
  top:0,
  zIndex:50,
  [theme.breakpoints.down(LG)]: {
    flexDirection:'column',
    // position:'sticky',
    // top:0,
    // padding:'0px',
  },

},
    headerWrapper:{
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent: 'space-between',
        padding: theme.spacing(1),
      backgroundColor:'#000',
      color:'#fff',
      fontSize: '1.7rem',
      width: '100%',
      [theme.breakpoints.between(LG, MD)]: {
        alignItems:'center',
        // padding:'0px'
      },
    },
    toolbarsWrapper:{
        width:'calc(100% - 236px)', /*220px - logo width && 16px -logo container paddings */ 
        [theme.breakpoints.down(LG)]: {
          width:"100%"
        },
    },
    toolbar: {
        flexDirection:'row-reverse',
        marginBottom:theme.spacing(1),
        [theme.breakpoints.down(LG)]: {
          flexDirection:'column'
        },
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarButtons: {
      overflowX: 'auto',
      flexDirection:'row-reverse',
      [theme.breakpoints.down(MD)]:{
        flexDirection: 'column-reverse'
      }
    },
    // toolbarLink: {
    //   padding: theme.spacing(1),
    //   marginLeft: theme.spacing(2),
    //   marginRight: theme.spacing(2),
    //   flexShrink: 0,
    //   fontSize: 'inherit',
    //   textDecoration: 'none',
    //   color:'inherit',
    //   '&:hover': {
    //     color: '#2da1c4',
    //   },
    //   fontWeight:'400'
    // },
    // activeLink:{
    //   color:'#2da1c4'
    // },
    navButton:{
      fontSize:'inherit !important',
      color:'inherit',
      '&:hover': {
        color:'#2da1c4'
      }
    },
    burgerButton:{
      fontSize:'3rem !important',
      color:'inherit'
    }


  }));