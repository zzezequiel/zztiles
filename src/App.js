import './ui/styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import TopNav from './ui/views/components/nav/TopNav';
import Router from './routes/Router';
import Home from './ui/views/pages/Home';

function App() {
  return (
    
    <BrowserRouter>
      <TopNav />
      
      <Router />
    </BrowserRouter>
  );
}

export default App;
