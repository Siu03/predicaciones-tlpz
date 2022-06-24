import React, { useState } from 'react';
import UploadAvatar from '../../components/Settings/UploadAvatar';
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import UserName from '../../components/Settings/UserName';


import "../Settings/Settings.scss";


export default function Settings(props) {
    const { user, setReloadApp } = props;
    const [showModal, setShowModal] = useState(false);


  return (
    <div className="settings">
        <h1>Configuración</h1>
        <div className="avatar-name">
            <UploadAvatar user={user} setReloadApp={setReloadApp} />
            <UserName user={user} />
        </div>
        <BasicModal show={showModal} setShow={setShowModal} title={"Hola"}>
          <h3>Form</h3>
        </BasicModal>
    </div>
  );
}
