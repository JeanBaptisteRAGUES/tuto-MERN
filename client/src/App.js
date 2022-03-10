import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
    .then((response) => {
      setListOfUsers(response.data);
    })
  }, []);

  const createUser = (e) => {
    e.preventDefault();

    let newUser = {
      username,
      name,
      age
    };

    Axios.post("http://localhost:3001/createUser",  newUser)
    .then((response) => {
      setListOfUsers([...listOfUsers, newUser])
      alert("Utilisateur ajouté !");
    })
  }

  return (
    <div className="App">
      <form onSubmit={(e) => createUser(e)}>
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
        <button>Ajouter utilisateur</button>
      </form>
      {
        listOfUsers.map((user) => (
          <div>
            <h1>{user.username}</h1>
            <h3>Name : {user.name}</h3>
            <h3>age : {user.age}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default App;
