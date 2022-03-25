
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './Header/Page/Header';
import MainPage from './Main/page/Main';
import Footer from './Footer/Page/Footer';

import './App.css';
import './Normalize.css';

function App() {
  return (
    <Router>
      <Header />
      <MainPage />
      <Footer />
    </Router>
  );
}

export default App;
