import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authentication } from './actions/authorization';
import Navibar from "./components/Navibar"
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./components/Main";
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
          <Route path='*' element={<Login />} />
        </Routes>
      }

      {isAuth &&
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='*' element={<Main />} />
        </Routes>

      }

    </div>

  );
}

export default App;
