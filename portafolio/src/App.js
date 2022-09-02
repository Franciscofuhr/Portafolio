import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
       <Home />
      {/* <Route  path='/' component={Carrousel} />
      <Route path="/" component={Technology}/> */}
    </>
  );
}

export default App;
