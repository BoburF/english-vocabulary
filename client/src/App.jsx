import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './layouts/Layout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/sign/in' element={<SignIn/>}/>
          <Route path='/sign/up' element={<SignUp/>}/>
          <Route path='*' element={<h2>404</h2>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
