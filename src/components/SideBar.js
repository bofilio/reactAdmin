import React from 'react'
import Brand from './Brand'
import Divider from './Divider'
import Heading from './Heading'
import MenuItem from './MenuItem'
import MenuItemColapsable from './MenuItemColapsable'

const SideBar = () => {
    return (
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                <Brand />
                <Divider />
                <MenuItem text="home" to="/" faClasses="fas fa-fw fa-home" />
                <Divider />
                <MenuItem text="Dashbord" to="/" faClasses="fas fa-fw fa-chart-area" />
                <Divider />
                {/*<!-- Heading -->*/}
                <Heading title=" Mes applications" />
                <div className="sidebar-heading">
                </div>
                {/*<!-- Nav Item - Pages Collapse Menu -->*/}
                <MenuItemColapsable text="RH" faClasses="fas fa-fw fa-users" links={[["/", "Abssence"], ["/", "Social"]]} />

                <Divider />

                <Heading title="Util" />

                <MenuItemColapsable text="RH" faClasses="fas fa-fw fa-users" links={[["/", "Abssence"], ["/", "Social"]]} />

                <Divider />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>

       

    )
}

export default SideBar
