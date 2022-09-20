import './App.css';
import Nav from "./components/nav";
import Footer from './components/footer';
import Productos from './container/productos';
import ItemDetailProducts from './container/itemDetailProducts';

const App = () => {
  return (
    <>
    <Nav />
    {/* <Productos /> */}
    <ItemDetailProducts />
    <Footer />
    </>
  );
}

export default App;
