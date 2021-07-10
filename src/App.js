import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/loginform';
import CoursesPage from './components/coursespage';


function App() {

  const student1 = {
    email: "student@mail.com",
    password: "student"
  }

  const [user, setUser] = useState({name: "", surname: "", email: ""});
  const [error, setError] = useState("");

const Login = details => {
  if (details.email === student1.email && details.password === student1.password) {
    setUser({name: details.name, surname: details.surname, email: details.email})
  } else {
    setError("Email or password incorrect")
  }
}

const Logout = () => {
  setUser({name: "", email: ""})
}

  return (
    <div className="App">
      {(user.email !== "") ? (
        <CoursesPage Logout={Logout} user={user}/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
