import './App.css';
import {useEffect} from 'react'
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes'
import { connect } from 'react-redux';
import mapDispatchToProps from './redux/map-dispatch-to-props';
import Footer from './components/Footer/Footer'

function App(props) {
  const {setWindowWidth} = props
  
  
  useEffect(() => {
    
    function resizeHandler(){
      setWindowWidth(window.innerWidth)
    }

    resizeHandler()
    
    window.addEventListener('resize',resizeHandler)
    return () => {
      window.removeEventListener('resize',resizeHandler)
    };
  }, [setWindowWidth]);

  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

const APP_W = connect(null, mapDispatchToProps("App"))(App);
export default APP_W;