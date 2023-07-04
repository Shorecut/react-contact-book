import React from "react";
import DeleteIcon from "../assets/delete.png";
const ContactItem = ({ item, deleteContact, changeStatus }) => (
  <div className={`contact ${item.premium ? "premium" : ""}`}>
    {/*<input
      className="check_inp"
      onChange={() => {
        changeStatus(item.id);
      }}
      type="checkbox"
      checked={item.premium}
    />*/}
    <input
      onChange={() => {
        changeStatus(item.id);
      }}
      checked={item.premium}
      type="checkbox"
      id="star"
    />
    <label for="star">
      <svg viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
    </label>

    <div className="list_right"> {item.name} </div>
    <div className="list_right">{item.surname} </div>
    <div className="list_right">{item.number} </div>
    <img
      onClick={(e) => {
        deleteContact(item.id);
      }}
      style={{ marginLeft: "50px", marginTop: "3px", cursor: "pointer" }}
      width={20}
      src={DeleteIcon}
      alt="delete"
    />
  </div>
);

export default ContactItem;
