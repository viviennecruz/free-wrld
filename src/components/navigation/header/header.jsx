import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from "./header.module.scss";

class Header extends Component {
    render() {
        return (
            <div className={style.container}>
                <Link to="/">
                    <span>Home</span>
                </Link>

                <Link to="/about">
                    <span>About</span>
                </Link>
            </div>
        )
    }
}

export default Header