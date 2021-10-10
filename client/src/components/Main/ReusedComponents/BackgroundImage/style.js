import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root:{
        padding:0,
        margin:0,
        maxWidth: '100%'
    },
      backgroundImagePaper: {
        // width:'100vw',
        minHeight:'60vh',
        position: 'relative',
        // backgroundColor: theme.palette.grey[800],
        // color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // marginTop: theme.spacing(4),
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display:'flex',
        alignItems:'center'
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      backgroundImagePaperContent: {
        position: 'relative',
        padding: theme.spacing(6),
      },
      backgroundImageTextContainer:{
          width:'100%',
      },
      backgroundImageText:{
          margin:'0 auto',
          color:'#fff'
      }
    }));