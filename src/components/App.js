import Content from "./Content";
import SideBar from "./SideBar";
import '../site.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
       <SideBar/>
      <Content/>
    </Router>
     
    </>
  );
}

export default App;
