import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [nameInpVal, setNameInpVal] = useState("");
  const [surnameInpVal, setSurnameInpVal] = useState("");
  const [numInpVal, setNumInpVal] = useState("");

  return (
    <div style={{ margin: "25px auto", width: "400px" }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (
            !nameInpVal.trim() ||
            !surnameInpVal.trim() ||
            !numInpVal.trim()
          ) {
            return;
          }

          const newContact = {
            id: Date.now(),
            name: nameInpVal,
            surname: surnameInpVal,
            number: numInpVal,
            premium: false,
          };
          addContact(newContact);

          setNameInpVal("");
          setSurnameInpVal("");
          setNumInpVal("");
        }}
      >
        <input
          value={nameInpVal}
          onChange={(e) => {
            setNameInpVal(e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
        <input
          value={surnameInpVal}
          onChange={(e) => {
            setSurnameInpVal(e.target.value);
          }}
          type="text"
          placeholder="Surname"
        />
        <input
          value={numInpVal}
          onChange={(e) => {
            setNumInpVal(e.target.value);
          }}
          type="text"
          placeholder="Phone number"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
