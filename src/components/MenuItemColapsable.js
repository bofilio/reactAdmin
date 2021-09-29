import React from 'react'
import { Link } from 'react-router-dom'
const MenuItemColapsable = ({ text, faClasses, links }) => {
    return (
        <li className="nav-item">
            <span className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className={faClasses}></i>
                <span>{text}</span>
            </span>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    {
                        links && links.map((link,index)=> (
                            <Link key={index} className="collapse-item" to={link[0]}>{link[1]}</Link>
                        ))
                    }
                </div>
            </div>
        </li>
    )
}

export default MenuItemColapsable
