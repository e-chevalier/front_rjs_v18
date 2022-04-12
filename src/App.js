import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ItemListContainer from "./components/ItemComponent/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailComponent/ItemDetailContainer/ItemDetailContainer";
import NavigationBar from "./components/NavigationBarComponent/NavigationBar";
import CartContextProvider from "./context/CartContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
