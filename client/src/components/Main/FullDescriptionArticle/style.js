import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme =>({
    container: {
      paddingLeft:0,
      paddingRight:0,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      mainImage:{
        width:'100%',
        minHeight:'60vh',
        // position: 'relative',
        // backgroundColor: theme.palette.grey[800],
        // color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // marginTop: theme.spacing(4),
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // display:'flex',
        // alignItems:'center'
      },
}))