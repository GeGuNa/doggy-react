import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid p-2 header">
                <div className="h3 m-0 text-center">
                    <Link to="/" className="text-dark text-decoration-none brandLogo">
                        Doggstagram
                    </Link>
                </div>
            </div>
        )
    }
}
