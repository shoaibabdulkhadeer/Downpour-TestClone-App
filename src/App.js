
import './App.css';
import Blogs from './components/Blogs';
import Car from './components/Car';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Ride from './components/Ride';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />
     <Car />
     <Services />
     <Blogs />
     <Ride />
     <Footer />
    </div>
  );
}

export default App;
