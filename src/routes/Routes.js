import React from "react";
import { Routes as RoutesRRD, Route } from "react-router-dom";
 
//Pages
import Home from "../pages/Home";
import Settings from "../pages/Settings";
 
export default function Routes(props) {
  const { user, setReloadApp } = props;

  console.log(props);
 
  return (
    <RoutesRRD>
      <Route path="/" element={<Home />} />
      <Route path="/hermanos" element={<h1>Artistas</h1>} />
      <Route path="/settings" element={<Settings user={user} setReloadApp={setReloadApp} />} />
    </RoutesRRD>
  );
}
