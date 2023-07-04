import React from "react";
import DeleteIcon from "../assets/delete.png";
const ContactItem = ({ item, deleteContact, changeStatus }) => (
  <div className={`contact ${item.premium ? "premium" : ""}`}>
    <input
      className="check_inp"
      onChange={() => {
        changeStatus(item.id);
      }}
      type="checkbox"
      checked={item.premium}
    />

    <div className="list_right">name: {item.name} </div>
    <div className="list_right">surname: {item.surname} </div>
    <div className="list_right">phone: {item.number} </div>
    <img
      onClick={(e) => {
        deleteContact(item.id);
      }}
      style={{ marginLeft: "5px", marginTop: "4px", cursor: "pointer" }}
      width={17}
      src={DeleteIcon}
      alt="delete"
    />
  </div>
);

export default ContactItem;
