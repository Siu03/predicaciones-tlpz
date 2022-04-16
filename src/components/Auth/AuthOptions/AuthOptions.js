import React from 'react';
import { Button } from "semantic-ui-react";

import "./AuthOptions.scss";

export default function AuthOptions(props) {
  const { setSelectedForm } = props;

  return (
    <div className='auth-options'>
        <h2>Escucha las Predicaciones de la hora</h2>
        <Button className='register' onClick={() => setSelectedForm("register")}>Registrate gratis</Button>
        <Button className='login' onClick={() => setSelectedForm("login")}>Iniciar sesión</Button>
    </div>
  );
}
