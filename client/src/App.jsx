import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<h2>404</h2>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
