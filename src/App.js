
import './App.css';
import Navbar from "./components/common/navbar";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/footer";

function App() {

    const styles = {
        container : {
            display: 'flex',
            flexDirection: 'column',
            // minHeight: '100%'
        }
    }
// TODO pozmieniać czcionki na ładniejsze benc
  return (
      <div className="container_fluid" style={styles.container}>
          <Navbar style={{position: 'absolute', top: '0'}} />
          <div className="container" style={{marginTop: '70px', minHeight: 'calc(100vh - (110px + 70px))'}}>
              <Outlet/>
          </div>
          <Footer />
      </div>

  );
}

export default App;
