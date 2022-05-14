import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import FormDiv from './components/FormDiv';
import NavBar from './components/NavBar';
import Cartas from './components/Cartas';

function App() {

  return (
    <div className="App">      
      <NavBar />
      <Banner />

      <br></br>
      
      <FormDiv />

    </div>
  );
}

export default App;
