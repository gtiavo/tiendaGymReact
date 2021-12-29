import { Routes, Route} from 'react-router-dom'
import Header from './partials/Header';
import Footer from './partials/Footer';
import PanelTotales from './paneles/PanelTotales';
import '../assets/App.css';
import ProductsPage from './paneles/ProductsPage';
import Users from './paneles/Users';
import UserDetail from './paneles/UserDetail';
import ProductDetail from './paneles/ProductDetail';
import NotFound from './paneles/NotFound';

function App() {
  return (
    <div className="App">
   < Header />
   <Routes>
    < Route path='/' element={< PanelTotales />}  />
    < Route path='/products' element ={ < ProductsPage />} />
    < Route path = '/users' element ={< Users/>} />
    < Route path = '/users/:id' element ={< UserDetail/>} />
    < Route path = '/products/:id' element ={< ProductDetail/>} />
    < Route path ='*' element={< NotFound />} />
    </Routes>
   < Footer />
    </div>
  );
}

export default App;
