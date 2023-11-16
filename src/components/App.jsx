import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import AppBar from './AppBar';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import ContactsView from 'views/ContactsView';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { fetchCurrentUser } from 'auth/auth-operations';
import { getIsFetchingCurrent } from 'auth/auth-selectors';
import { Route, Routes } from 'react-router-dom';

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

