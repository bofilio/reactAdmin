import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PersistentDrawerLeft from './navigation/SideBar';
import { ThemeProvider } from '@emotion/react';
import light_theme from '../themes/light';
import Navigation from './navigation'
import Main from './main';
import useWindowListner from '../state/hooks/useWindowListner';
function App() {
  useWindowListner();
  return (

    <div style={{ display: 'flex', width:'100%'}}>
      <Navigation/>
      <Main/>
    </div>


  );
}

export default App;
