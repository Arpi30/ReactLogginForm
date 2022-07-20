import React, { useState, useEffect } from 'react'


function Form() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [button, setButton] = useState(false);

    function logingHandler(e) {
        e.preventDefault();
        alert(`Your Username is: ${userName} and password is: ${password}`)
        setUserName('');
        setPassword('');
    }


    useEffect(() => {
        console.log(userName, password);
    }, [userName, password])

    const style = {
        visibility: button ? 'visible' : 'hidden'
    };

    return (
        <div className=' d-flex flex-column align-items-center'>
            <div>
                <button
                    onClick={() => setButton(!button)}
                    className={button ? 'btn btn-success mt-3' : 'btn btn-danger mt-3'}>
                    Click me!
                </button >
            </div>
                <form
                    className='w-50 mt-3'
                    onSubmit={(e) => userName.length >= 5 &&
                    password.length >= 5 ? logingHandler(e) : alert('Please add username and password, username and password must be 5 charakter')}
                    style={style}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={userName} name='userName' onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name='password'  type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default Form