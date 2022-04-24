import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/auth";
import UserImage from "../../assets/png/user.png";

import "./TopBar.scss";

function TopBar(props) {
    const { user, history } = props;

    const goBack = () => {
        history.goBack();
    };

    const logout = () => {
        console.log("Cerrar sesión");
    };

  return (
    <div className="top-bar">
        <div className="top-bar__left">
            <Icon name="angle left" onClick={goBack} />
        </div>

        <div className="top-bar__right">
            <Link to="/settings">
                <Image src={UserImage} />
                {user.displayName}
            </Link>
            <Icon name="power off" onClick={logout} />
        </div>
    </div>
  );
}

export default withRouter(TopBar);