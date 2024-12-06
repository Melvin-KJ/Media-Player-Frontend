import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import Header from './components/Header';
import Footer from './components/Footer'
;
function App() {
  return (
    <>
      {/* Header */}
      <Header/>
      {/* Path for landing, home, history */}
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default App;
