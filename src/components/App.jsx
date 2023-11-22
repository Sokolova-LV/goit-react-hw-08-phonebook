import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppBar from './AppBar/AppBar';

import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import ContactsView from 'views/ContactsView/ContactsView';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { fetchCurrentUser } from 'auth/auth-operations';
import { getIsFetchingCurrent } from 'auth/auth-selectors';


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>

            <Route
              path='/'
              element={
                <PublicRoute component={<HomeView />} />
              }
            />

            <Route
              path='/register'
              element={
                <PublicRoute component={<RegisterView />} redirectTo="/contacts" />
              }
            />

            <Route
              path='/login'
              element={
                <PublicRoute component={<LoginView />} redirectTo="/contacts" />
              }
            />

            <Route
              path='/contacts'
              element={
                <PrivateRoute component={<ContactsView />} redirectTo="/login" />
              }
            />
            
          </Routes>
        </Suspense>
      </div>
    )
  );
};

