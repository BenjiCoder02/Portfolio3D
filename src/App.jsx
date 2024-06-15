import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero } from './components';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bf-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
