import React, { useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authentication } from './actions/authorization';
import { Spinner } from "react-bootstrap";
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
      {isAuth === null ?
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        : <Navibar />}

      {isAuth === false &&
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
