import React, { useState, useEffect } from 'react';
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { isUserAdmin } from "../../utils/Api";

import "./MenuLeft.scss";

function MenuLeft(props) {
  const { user } = props;
  //const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [activeMenu, setActiveMenu] = useState(window.location.pathname);
  const [userAdmin, setUserAdmin] = useState(false);  

  useEffect (() => {
    isUserAdmin(user.uid).then(response => {
      setUserAdmin(response);
    });
  }, [user]);

  const handlerMenu = (e, menu) => {
    setActiveMenu(menu.to);
  };

  return (
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
        <Menu.Item>
            <Icon name="plus square outline" />Añadir predicador
        </Menu.Item>
        <Menu.Item>
            <Icon name="plus square outline" />Añadir predicación
        </Menu.Item>
      </div>
      )}
    </Menu>
  );
}
export default withRouter(MenuLeft);