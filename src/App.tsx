import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Login from './pages/Login/index';

import Main from 'components/main/Main';
import MyInfo from 'components/myInfo/MyInfo';
import MyInfoForm from 'components/myInfo/myInfoForm';
import SearchForm from 'components/navbar/searching/searchForm/SearchForm';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:searchId" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/myInfo" element={<MyInfo />} />
        <Route path="/profileModify" element={<MyInfoForm />} />
        <Route path="/findAccount" element={<MyInfoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
