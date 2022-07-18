import React from 'react'

function Form(props) {

    const style = {
        visibility: props.toggleButtonisActive ? 'visible' : 'hidden'
    };

    return (
        <form className='w-50 mt-3' onSubmit={props.submit} style={style}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={props.nameValue} name='userName' onChange={props.change} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input value={props.passValue} onChange={props.passChange} name='password'  type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form