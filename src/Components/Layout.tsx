// import React from "react";
// import * from "../App";
import NavItem from "./NavItem";
import UserCard from "./UserCard";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const navLinks = [
    { icon: <AddHomeOutlinedIcon />, title: "Dashboard", path: "/" },
    { icon: <DescriptionOutlinedIcon />, title: "Entries", path: "/Entries" },
    {
        icon: <ImportContactsOutlinedIcon />,
        title: "Chart of Accounts",
        path: "/accounts",
    },
    { icon: <CreditCardOutlinedIcon />, title: "Payments", path: "/payments" },
    { icon: <ReceiptLongOutlinedIcon />, title: "Invoices", path: "/invoices" },
    { icon: <AttachMoneyOutlinedIcon />, title: "Billings", path: "/billings" },
    { icon: <LoopOutlinedIcon />, title: "Reconciliations", path: "/recon" },
    { icon: <TimelineOutlinedIcon />, title: "Reports", path: "/reports" },
    { icon: <CalculateOutlinedIcon />, title: "VAT", path: "/VAT" },
    { icon: <SettingsOutlinedIcon />, title: "Settings", path: "/settings" },
];

export default function Layout({ children }: any) {
    return (
        <>
            <div className="main-container">
                <div className="sidebar-container">
                    <h1 className="main-heading">Finflow</h1>

                    <span className="nav-container">
                        {navLinks.map((navItem, index) => (
                            <NavItem
                                key={index}
                                icon={navItem.icon}
                                title={navItem.title}
                                path={navItem.path}
                            />
                        ))}
                    </span>
                    <span className="footer">{<UserCard />}</span>
                </div>
                {/* Main-Container */}
                <div className="body">
                    <div className="dashboard-container">{children}</div>
                </div>
            </div>
        </>
    );
}
