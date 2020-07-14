import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const input = event.target;
    const name = input.name;
    setContact(prevValue => {
      switch (name) {
        case "fName":
          return {
            fName: input.value,
            lName: prevValue.lName,
            email: prevValue.email
          };
        case "lName":
          return {
            fName: prevValue.fName,
            lName: input.value,
            email: prevValue.email
          };
        case "email":
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: input.value
          };
        default:
          break;
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
