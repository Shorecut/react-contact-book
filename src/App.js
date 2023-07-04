import { useState } from "react";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  const [contacts, setContact] = useState([]);

  function addContact(newContact) {
    setContact([...contacts, newContact]);
  }

  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContact(newArr);
  }

  function changeStatus(id) {
    const newArr = contacts.map((item) => {
      if (item.id === id) {
        item.premium = !item.premium;
      }
      return item;
    });
    setContact(newArr);
  }

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        changeStatus={changeStatus}
        deleteContact={deleteContact}
        contacts={contacts}
      />
    </div>
  );
}

export default App;
