import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css"

const AddUser = ({ onAddUser }) => {
  const [addUsername, setAddUsername] = useState("");
  const [addUserAge, setAddUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (addUsername.trim().length > 0) {
      onAddUser(addUsername, addUserAge);
      setAddUsername("");
      setAddUserAge("");
    } else {
      alert("fill the form!!!");
    }
  };
  const usernameChangeHandler = (event) => {
    setAddUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAddUserAge(event.target.value);
  };
  //button disabled
  let disabledBtn = addUserHandler;
  return (
    <div>
      <Card className="inputCard">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={addUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={addUserAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit" disabledBtn={!disabledBtn}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
