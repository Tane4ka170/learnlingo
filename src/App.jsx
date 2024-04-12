import { Route, Routes } from "react-router-dom";

import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import Layout from "./components/Layout/Layout";
import { auth } from "./firebase/config";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./components/navigation/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [authUser, setauthUser] = useState(auth.currentUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user);
      } else {
        setauthUser(null);
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
        <Route path="teachers" element={<Teachers authUser={authUser} />} />
        <Route
          path="favorites"
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
