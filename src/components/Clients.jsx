import React from "react";
import { clients } from "../constants";
import "../styles/clients.scss";

const Clients = () => {
  return (
    <div id="clients" className="clients">
      {clients.map((client) => (
        <div key={client.id} className="clients__client">
          <img src={client.logo} alt="client" className="clients__logo" />
        </div>
      ))}
    </div>
  );
};

export default Clients;
