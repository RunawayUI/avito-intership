import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <h1>Hello World</h1>
            <Link to='/advertisements'>Объявления</Link>
        </>
    )
}

export default Main;