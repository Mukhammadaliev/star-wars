import { BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
