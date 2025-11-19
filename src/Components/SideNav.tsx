// import React from "react";
import type { NavtItemProps } from "./NavItem";
import NavItem from "./NavItem";

export interface SideNavProps {
    navItems: NavtItemProps[];
    activePath?: string;
}

const SideNav = ({ navItems, activePath = navItems[0].path }: SideNavProps) => {
    /* TODO:
     * add css styling to this component so that it looks as good as Layout.tsx
     * 1. Create the styles folder and add a Sidenave.css file
     * 2. Add all the css that belongs to the side nav to this file and import the file in here
     * 3. test...
     * */
    // const currentPath = activePath ?? (typeof window !== "undefined" ? window.location.pathname : "");

    return (
        <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
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
    );
};

export default SideNav;
