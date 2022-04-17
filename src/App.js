import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import firebase from "./utils/Firebase";
import "firebase/auth";
// import { initializeAuth } from "firebase/auth";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    if(!currentUser?.emailVerified) {
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

  // return !user <Auth /> : <UserLogged />
  
  return (
    <>
      {!user ? <Auth /> : <userLogged />}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        puaseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
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
