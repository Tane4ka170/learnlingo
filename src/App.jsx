import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/config';
import { lazy, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import Layout from './components/Layout/Layout';
import { PrivateRoute } from './components/Nav/PrivateRoute';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));

function App() {
  const [authUser, setAuthUser] = useState(auth.currentUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout authUser={authUser} />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers authUser={authUser} />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute authUser={authUser}>
              <Favorite authUser={authUser} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
