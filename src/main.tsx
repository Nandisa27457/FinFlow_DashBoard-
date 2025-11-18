import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SideNav from "./Components/SideNav.tsx";
// those imports:
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
import Account from "./Pages/Account.tsx";
import Billings from "./Pages/Billings.tsx";
import Entries from "./Pages/Entries.tsx";
import Invoices from "./Pages/Invoices.tsx";
import Reconciliations from "./Pages/Reconciliations.tsx";
import Reports from "./Pages/Reports.tsx";
import VAT from "./Pages/VAT.tsx";
import Settings from "./Pages/Settings.tsx";
import Payments from "./Pages/Payments.tsx";
import Dashboard from "./Pages/Dashboard.tsx";

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

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <div className="content-layout">
                {/* <SideNav navItems={navLinks} /> */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/entries" element={<Entries />} />
                    <Route path="/accounts" element={<Account />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/billings" element={<Billings />} />
                    <Route path="/recon" element={<Reconciliations />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/VAT" element={<VAT />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </BrowserRouter>
        ,
    </StrictMode>
);
