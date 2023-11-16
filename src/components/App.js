import { useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import authOperations from '../auth/auth-operations';
import AppBar from './AppBar';
import { Route } from 'react-router-dom';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
// import HomeView
// import ContactsView
import PrivateRoute from './PrivateRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Suspense>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
      </Suspense>
    </div>
  )
};