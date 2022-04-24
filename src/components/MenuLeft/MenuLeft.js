import React, { useState, useEffect } from 'react';
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { isUserAdmin } from "../../utils/Api";
import BasicModal from "../Modal/BasicModal";

import "./MenuLeft.scss";
//import { cleanup } from '@testing-library/react';

function MenuLeft(props) {
  const { user } = props;
  //const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [activeMenu, setActiveMenu] = useState(window.location.pathname);
  const [userAdmin, setUserAdmin] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null) 
  const [contentModal, setContentModal] = useState(null);
  
  useEffect (() => {
    setActiveMenu(window.location.pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);  

  // }, [window.location]);

  useEffect (() => {
    isUserAdmin(user.uid).then(response => {
      setUserAdmin(response);
    });
  }, [user]);

  const handlerMenu = (e, menu) => {
    setActiveMenu(menu.to);
  };

  const handlerModal = (type) => {
    switch (type) {
      case "hermano":
          setTitleModal("Nuevo predicador");
          setContentModal(<h2>Formulario nuevo predicador</h2>);
          setShowModal(true);
        break;
      case "song":
          setTitleModal("Nueva predicación");
          setContentModal(<h2>Formulario de nueva predicación</h2>);
          setShowModal(true);
        break;
      default:
        setTitleModal(null);
        setShowModal(null);
        setShowModal(false);
        break;
    }
  }

  return (
    <>
      <Menu className="menu-left" vertical>
        <div className="top">
          <Menu.Item as={Link} to="/" active={activeMenu === "/"} onClick={handlerMenu}>
            <Icon name="home" />Inicio
          </Menu.Item>
          <Menu.Item as={Link} to="/hermanos" active={activeMenu === "/hermanos"} onClick={handlerMenu}>
            <Icon name="music" />Hermanos
          </Menu.Item>
        </div>
        {userAdmin && (
        <div className="footer">
          <Menu.Item onClick={() => handlerModal("hermano")}>
              <Icon name="plus square outline" />Añadir predicador
          </Menu.Item>
          <Menu.Item onClick={() => handlerModal("song")}>
              <Icon name="plus square outline" />Añadir predicación
          </Menu.Item>
        </div>
        )}
      </Menu>
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
          {contentModal}
      </BasicModal>
    </>
  );
}
export default withRouter(MenuLeft);