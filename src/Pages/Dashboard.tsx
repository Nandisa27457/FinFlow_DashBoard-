import FinflowCard from "../Components/FinFlowCard";
import LineChart from "../Components/LineChart";
import { Calculator, DollarSign, Receipt, ChartNetwork } from "lucide-react";

const Dashboard = () => {
    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <p>Your financial view at a glance</p>
            </div>
            <div className="card-container">
                <div className="Revenue">
                    <FinflowCard title="Total Revenue">
                        <DollarSign />
                        <p className="amount ">R1 124,580.00</p>
                        <p
                            style={{
                                color: "#16a34a",
                                marginTop: "0.25rem",
                            }}>
                            +12.4% this month
                        </p>
                    </FinflowCard>
                </div>
                <div className="Expenses">
                    <FinflowCard title="Total expenses ">
                        <Receipt />
                        <p className="amount">R525 0000</p>
                        <p style={{ color: "red", marginTop: "0.25rem" }}>
                            -5.2% this month
                        </p>
                    </FinflowCard>
                </div>
                <div className="VAT">
                    <FinflowCard title="VAT Payable ">
                        <Calculator />
                        <p className="amount">R25 0000</p>
                        <p
                            className="due-date"
                            style={{ color: "grey", marginTop: "0.25rem" }}>
                            due in 20 days
                        </p>
                    </FinflowCard>
                </div>
                <div className="Profit">
                    <FinflowCard title="Net Profit">
                        <ChartNetwork />
                        <p className="amount">R574 580</p>
                        <p
                            className="due-date"
                            style={{
                                color: "green",
                                marginTop: "0.25rem",
                            }}>
                            18.2% profit margin
                        </p>
                    </FinflowCard>
                </div>
            </div>
            <LineChart />
        </>
    );
};

export default Dashboard;
