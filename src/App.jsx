import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bf-center">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
