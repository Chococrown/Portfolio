import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contract from './components/Contract';
import Footer from './components/Footer';

function App() {
  return (
      <div className="app">
        <Header />
        <About />
        <Portfolio />
        <Contract />
        <Footer />
      </div>
  );
}

export default App;