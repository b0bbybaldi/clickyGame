import React from "react";
import "./PlayingCard.css";

const PlayingCard = props => (
  <div className="card">
  <div className="img-container" onClick={() =>{
      return props.clicked(props.id);
  }}>
      <img alt={props.id} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Value:</strong> {props.value}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCard(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PlayingCard;
