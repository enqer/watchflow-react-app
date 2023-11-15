
import './App.css';
import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";

function App() {
  return (
      <div className="container_fluid">
          <Navbar style={{position: 'absolute', top: '0'}}></Navbar>
          <div className="container">
              <Outlet/>
          </div>
      </div>

  );
}

export default App;
