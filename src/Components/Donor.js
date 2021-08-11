import React from "react";
import { Link } from "react-router-dom";
import data from "../data.js";

function Donor() {
  return (
    <div className="list">
      {data.donor.map((m) => (
        <div className="profile" key={m.id}>
          <img
            className="listimg"
            src={m.image ? m.image : "./images/blank-profile.png"}
            alt={m.name}
          />
          <h1 className="name">{m.name}</h1>
          <p className="group">{m.bloodGroup}</p>
          <p>{m.address}</p>
          <p>
            <Link to={`/member/${m.id}`} className="contactbtn">
              View Details
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Donor;
