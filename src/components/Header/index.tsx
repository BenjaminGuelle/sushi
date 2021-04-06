
import React from 'react';
import { Link } from 'gatsby';

import "./style.scss";

const Header = ({siteTitle}) => {
    return (
        <header>
            <div className="title">
                <Link to="/" className="nav-item" activeClassName="active" >Admin sushi</Link>
            </div>
            <nav>
                <div className="nav-list">
                    <Link to="/categories" className="nav-item" activeClassName="active" >Categories</Link>
                    <Link to="/articles" className="nav-item" activeClassName="active">Articles</Link>
                    <Link to="/commandes" className="nav-item" activeClassName="active">Order</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;