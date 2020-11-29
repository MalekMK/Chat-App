import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <CancelIcon onClick={(e) => (window.location = "/")} color="secondary" />
    </div>
  </div>
);

export default InfoBar;
