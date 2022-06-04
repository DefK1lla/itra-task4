import React, { useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authentication } from './actions/authorization';
import Navibar from "./components/Navibar"
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authentication());
  }, []);

  return (
    <div>
      <Navibar />

      {!isAuth &&
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      }

      {isAuth &&
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/main' element={<Main />} />
          <Route path='*' element={<Navigate to='/main' />} />
        </Routes>

      }

    </div>

  );
}

export default App;
