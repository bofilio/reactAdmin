import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PersistentDrawerLeft from './navigation/SideBar';
import { ThemeProvider } from '@emotion/react';
import light_theme from '../themes/light';
import TopBar from './navigation/TopBar';
import SideBar from './navigation/SideBar';
import Content from './main/Content';
import useWindowListner from '../state/hooks/useWindowListner';
function App() {
  useWindowListner();
  return (

    <div style={{ display: 'flex' }}>

      <TopBar />
      <SideBar />
      <Content>
        <Router>
        </Router>
      </Content>

    </div>


  );
}

export default App;
