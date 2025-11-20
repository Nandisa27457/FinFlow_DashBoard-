// import React from "react";
import { useState } from "react";
import type { NavtItemProps } from "./NavItem";
import NavItem from "./NavItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";
import SidebarProfileCard from "./ProfileCard";
export interface SideNavProps {
    navItems: NavtItemProps[];
    activePath?: string;
}

const SideNav = ({ navItems, activePath = navItems[0].path }: SideNavProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // const currentPath = activePath ?? (typeof window !== "undefined" ? window.location.pathname : "");

    return (
        <>
            {!open && (
                <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{
                        position: "fixed",
                        top: 20,
                        left: 20,
                        zIndex: 2000,
                    }}>
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 2000,
                    }}>
                    <CloseIcon />
                </IconButton>
                <div className="main-container">
                    <div className="sidebar-container">
                        <h1 className="main-heading">FinFlow</h1>
                        <nav className="nav-container">
                            <ul style={{ listStyle: "none" }}>
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
                        <div className="footer">
                        <SidebarProfileCard/>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default SideNav;
