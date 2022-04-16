import React, { useState } from "react";
import firebase from "./utils/Firebase";
import "firebase/auth";
// import { initializeAuth } from "firebase/auth";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    if (!currentUser?.emailVerified) {
      firebase.auth().signOut();
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  if (isLoading) {
    return null;
  }

  return (
    !user ? <Auth /> : <userLogged />
  );
}




// M. U. esté logeado.

function userLogged() {
  return (
    <div style={{
      display: "flex", 
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh"
      }}
    >

      <h1>Usuario logeado</h1>
      <button>Cerrar sesión</button> 
    </div>
  )
}

export default App;
