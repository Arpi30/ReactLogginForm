import React from 'react'

function Button(props) {
    return (
        <div className='d-flex flex-column'>
            <h3>Klick me!</h3>
            <button
                onClick={props.ShowOrHide}
                className={props.btnColor ? 'btn btn-success mt-3' : 'btn btn-danger mt-3'}>
                Form
            </button >
        </div>
    )
}

export default Button