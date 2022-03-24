
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './Header/Page/Header';
import MainPage from './Main/page/Main';
import './App.css';
import './Normalize.css';

function App() {
  return (
    <Router>
      <Header />
      <MainPage />
    </Router>
  );
}

export default App;
