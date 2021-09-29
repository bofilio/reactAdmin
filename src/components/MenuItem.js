import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = ({to,text,faClasses}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>
                <i className={faClasses} />
                <span>{text}</span>
            </Link>
        </li>
    )
}
export default MenuItem
