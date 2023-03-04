import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/Layout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './layouts/User/Main';
import User from './pages/User/User';
import Settings from './pages/User/Settings/Settings';
import Random from './pages/User/Random/Random';
import Vocabulary from './pages/User/Vocabulary/Vocabulary';

function App() {
  const getToken = sessionStorage.getItem('token');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sign/in" element={<SignIn />} />
          <Route path="/sign/up" element={<SignUp />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>

        {getToken ? (
          <Route path="/user" element={<Main />}>
            <Route index element={<User />} />
            <Route path={'/user/vocabulary'} element={<Vocabulary />} />
            <Route path="/user/settings" element={<Settings />} />
            <Route path="/user/random" element={<Random />} />
          </Route>
        ) : (
          ''
        )}
      </Routes>
    </div>
  );
}

export default App;
