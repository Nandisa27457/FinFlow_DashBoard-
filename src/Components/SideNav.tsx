// import React from "react";
import type { NavtItemProps } from "./NavItem";
import NavItem from "./NavItem";

export interface SideNavProps {
    navItems: NavtItemProps[];
    activePath?: string;
}

const SideNav = ({ navItems, activePath = navItems[0].path }: SideNavProps) => {
    
    // const currentPath = activePath ?? (typeof window !== "undefined" ? window.location.pathname : "");

    return (
        <div className="main-container">
        <div className="sidebar-container">
            <h1 className="main-heading">FinFlow</h1>
        <nav className="nav-container">
            <ul>
                {navItems.map((item) => {
                    // const isActive = item.path === currentPath;
                    return (
                        <li key={item.title}>
                            <NavItem
                                icon={item.icon}
                                path={item.path}
                                title={item.title}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    </div>
    </div>
    );
};

export default SideNav;
