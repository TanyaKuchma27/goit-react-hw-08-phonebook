import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar';
import { EditContactModal } from 'components/EditContactModal';
import { Spinner } from 'components/Spinner'
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { Container, Loading } from './App.styled';
import { authOperations, authSelectors } from 'redux/auth';


const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
      <Loading><Spinner size={80}/></Loading>
  ) : (
      <Container>
        <AppBar />
        <Suspense fallback={<Loading><Spinner size={80}/></Loading>}>
          <Routes>            
            <Route path="/" element={<HomeView />}/>
            <Route path="register" element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
            />
            <Route path="login" element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
            />
            <Route path="contacts/*" element={
              <PrivateRoute redirectTo="/login">
                <ContactsView />                
              </PrivateRoute>}>
                <Route path="edit/:contactId" element={<EditContactModal />} />
            </Route>           
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>        
      </Container>
  )   
}