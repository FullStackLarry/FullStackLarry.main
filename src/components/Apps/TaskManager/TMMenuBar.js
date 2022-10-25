import React from "react";

import { APIBase } from "../Data/api";

import "./TMMenuBar.css";

export default function TMMenuBar(props) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="tmmenubar">
      <div className="tmmenubar-title">Task Manager</div>
      {props.user && (
        <div
          className="tmmenubar-user"
          onClick={() => props.openUserSettings()}
        >
          <img src={`${APIBase()}${props.user.avatarUrl}`} alt="user avatar" />
          <div>{`${props.user.firstName} ${props.user.lastName}`}</div>
        </div>
      )}
      <div className="tmmenubar-buttons">
        <button
          className="tmmenubar-button"
          onClick={() => openInNewTab("/FSLTaskManagerSetup.msi")}
        >
          Download Windows App
        </button>
        <button
          hidden={props.loggedIn}
          className="tmmenubar-button"
          onClick={() => props.openLogin()}
        >
          Login
        </button>
        <button
          hidden={!props.loggedIn}
          className="tmmenubar-button"
          onClick={() => props.logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
