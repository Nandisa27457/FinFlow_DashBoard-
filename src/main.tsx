import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./Pages/Dashboard.tsx";
import Entries from "./Pages/Entries.tsx";
import Account from "./Pages/Account.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<App />} />
                <Route path ="/entries" element= {<Entries/>}/>
                <Route path="/accounts" element={<Account/>}/>
            </Routes>
        </BrowserRouter>
        ,
    </StrictMode>
);
