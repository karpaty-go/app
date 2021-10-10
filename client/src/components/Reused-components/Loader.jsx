import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {
    return (<CircularProgress
            size={100} 
            disableShrink 
            style = {{color: '#2da1c4'}}
          />)
}

export default Loader