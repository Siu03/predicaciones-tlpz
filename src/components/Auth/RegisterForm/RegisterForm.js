import React, { useState } from 'react';
import { Button, Icon, Form, Input } from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

//Importación de estilos

import "./RegisterForm.scss";

export default function RegisterForm(props) {
const { setSelectedForm } = props;
const [formData, setFormData] = useState(defaultValueForm());

const onChange = e => {
  console.log(e.target);
}

  const onSubmit = () => {
    console.log("Formulario enviado.");
    console.log(formData);
  }

  return (
    <div className='register-form'>
        <h1>Empieza a escuchar las predicaciones locales.</h1>
        <Form onSubmit={onSubmit} onChange={onChange}>
          <Form.Field>
            <Input 
              type="text"
              name="email"
              placeholder="Correo electrónico"
              icon="mail outline"
              
              // error= {}
            />
          </Form.Field>
          <Form.Field>
            <Input 
              type="password"
              name="password"
              placeholder="Contraseña"
              icon="eye"
              
              // error= {}
            />
          </Form.Field>
          <Form.Field>
            <Input 
              type="text"
              name="username"
              placeholder="¿Cómo deberíamos llamarte?"
              icon="user circle outline"
              
              // error= {}
            />
          </Form.Field>
          <Button type="submit">Continuar</Button>
        </Form>

        <div className='register-form__options'>
            <p onClick={ () => setSelectedForm(null)}>Volver</p>
            <p>
              ¿Ya tienes una cuenta? <span onClick={() => setSelectedForm("login")}>Iniciar sesión</span>
            </p>
        </div>
    </div>
  );
}

function defaultValueForm() {
  return {
    email: "",
    password:"",
    username:""
  }
}