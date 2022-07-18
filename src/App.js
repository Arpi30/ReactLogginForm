import React, { useState } from 'react'
import Form from './loginForm/Components/form';
import Button from './loginForm/Components/button';

import './App.css';

function App() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(false);
  
  function logingHandler(e) {
    e.preventDefault();
    alert(`Your Username is: ${userName} and password is: ${password}`)
    setUserName('');
    setPassword('');
  }

  return (
    <div className="App">
      <Button
        ShowOrHide={() => setButton(!button)}
        btnColor={button}
      />
      <Form
        toggleButtonisActive = {button}
        submit={(e) =>  userName.length >= 5 &&
                        password.length >= 5 ? logingHandler(e) : alert('Please add username and password, username and password must be 5 charakter')}
        change={(e) => setUserName(e.target.value)}
        passChange={(e) => setPassword(e.target.value)}
        nameValue={userName}
        passValue={password}
      />
    </div>
  );
}

export default App;
