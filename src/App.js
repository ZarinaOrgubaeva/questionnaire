import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  usersList.sort(function (firstPerson, secondPerson) {
    if (firstPerson.age > secondPerson.age) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
