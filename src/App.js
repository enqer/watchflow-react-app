
import './App.css';
import Navbar from "./components/common/navbar";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/footer";

function App() {

    const styles = {
        container : {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
            // minHeight: '100%'
        },
        navbar : {
            position: 'fixed',
            top: '0',
            overflow: 'hidden'
        }
    }
// TODO pozmieniać czcionki na ładniejsze benc
  return (
      <div className="container_fluid" style={styles.container}>
          <Navbar style={styles.navbar} />
          {/*<div className="container" style={{marginTop: '70px', minHeight: 'calc(100vh - (110px + 70px))'}}>*/}
          <div className="container" style={{flexGrow: 1, margin: '70px auto', width: '100%'}}>
          {/*<div className="container" style={{flexGrow: 1}}>*/}
              <Outlet/>
          </div>
          <Footer />
      </div>

  );
}

export default App;
