import React from "react";
import "./TextContainer.css";

const TextContainer = ({ users, rooms }) => (
  <div>
    <div className="textContainer">
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name },index) => (
                <div key={index} className="activeItem">
                  {index+1}- {name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
    <div className="textContainer">
      {rooms ? (
        <div>
          <h1>Active Rooms</h1>
          <div className="activeContainer">
            <h2>
              {rooms.map((room,index) => (
                <div key={index} className="activeItem">
                  {index+1}- {room}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

export default TextContainer;
