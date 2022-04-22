import React from 'react';
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./MenuLeft.scss";

export default function MenuLeft(props) {
  const { user } = props;

  return (
    <Menu className="menu-left" vertical>
      <div className="top">
        <Menu.Item>
          <Icon name="home">Inicio</Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name="music">Hermanos</Icon>
        </Menu.Item>
      </div>
      <div className="footer">
        <Menu.Item>
            <Icon name="plus square outline">Añadir predicador</Icon>
        </Menu.Item>
        <Menu.Item>
            <Icon name="plus square outline">Añadir predicación</Icon>
        </Menu.Item>
      </div>
    </Menu>
  )
}
