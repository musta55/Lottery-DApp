import React from "react";
import { Link } from 'react-router-dom';
import './Intro.css'

//creating components
const Intro = () => {
    return (
    <>
    <div className="container">
    <h3>Join The Lottery As</h3>
    <Link to= "/manager">
        <button className="button">Manager</button>
    </Link>
    <Link to= "/players">
        <button className="button">Players</button>
    </Link>
    </div>
 
    </>)
}
export default Intro;