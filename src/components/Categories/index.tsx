import React from 'react';
import { Link } from 'gatsby';

import "./style.scss";

const Categories = () => {
    return (
        <ul className="wrapper">
            <li className="item">
                <span>Sushi</span>
                <span>3.55€</span>
                <div className="item_actions">
                    <button className="item_buttons">
                        <img src="./../../images/add.svg" alt="add"/>
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default Categories;