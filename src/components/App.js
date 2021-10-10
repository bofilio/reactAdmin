import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './navigation'
import Main from './main';
import useWindowListner from '../state/hooks/useWindowListner';
import light_theme from '../themes/light';
import { ThemeProvider } from '@emotion/react';
function App() {
  useWindowListner();
  return (
    <ThemeProvider theme={light_theme}>
      <Router>
        <div style={{ display: 'flex', width: '100%' }}>
          <Navigation />
          <Main />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
