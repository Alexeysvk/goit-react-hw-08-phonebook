import s from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from '../redux/auth/auth-operations';
import { getIsLoading } from '../redux/auth/auth-selectors';
import { Notify } from 'notiflix';


const PhonebookPage = lazy(() =>
  import('../views/PhonebookPage/PhonebookPage'),
);
const HomePage = lazy(() =>
  import('../views/HomePage/HomePage'),
);
const SignInPage = lazy(() =>
  import('../views/SignInPage/SignInPage'),
);

const SignUpPage = lazy(() =>
  import('../views/SignUpPage/SignUpPage'),
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(({ auth: {error}}) => error)
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  
  error && Notify.failure(error);
  return (
    !isLoading && (
      <div>
        <Header className={s.header} />
        <main className={(s.main)}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/phonebook" element={<PhonebookPage />} />;
              <Route path="/signIn" element={<SignInPage />} />;
              <Route path="/signUp" element={<SignUpPage />} />;
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer className={s.footer} />
      </div>
    )
  );
};
export default App;