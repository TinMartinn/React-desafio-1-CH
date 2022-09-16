import './App.css';
import Text from "./components/text";
import Nav from "./components/nav";
import Footer from './components/footer';
import Productos from './container/productos';

const App = () => {
  return (
    <>
    <Nav />
    <Text />
    <Productos />
    <Footer />
    </>
  );
}

export default App;
