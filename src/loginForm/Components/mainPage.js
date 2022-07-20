import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const MainPage = (props) => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="d-flex w-25 justify-content-evenly m-0 p-0">
                    <li className="list-unstyled">
                        <Link className="text-decoration-none text-light" to="/home">Home</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link className="text-decoration-none text-light" to="/form">Login</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default MainPage;