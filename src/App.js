import './ui/styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import TopNav from './ui/views/components/nav/TopNav';
import Router from './routes/Router';
import Home from './ui/views/pages/Home';
import Footer from './ui/views/components/footer/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <TopNav />
      
      <Router />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
