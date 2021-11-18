import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import Login from "./components/LoginRoute"

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Home />
      <Footer />
    </div>
  );
}

export default App;