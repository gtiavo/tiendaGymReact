import Header from './partials/Header';
import Footer from './partials/Footer';
import PanelTotales from './paneles/PanelTotales';
import '../assets/App.css';

function App() {
  return (
    <div className="App">
   < Header />
    < PanelTotales />
   < Footer />
    </div>
  );
}

export default App;
