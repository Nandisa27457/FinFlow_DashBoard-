import React from "react";
import type { NavtItemProps } from "./NavItem";
import NavItem from "./NavItem";

export interface SideNavProps {
    navItems: NavtItemProps[];
    activePath?: string;
}

const SideNav = ({
    navItems,
    activePath,
}: SideNavProps) => {
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