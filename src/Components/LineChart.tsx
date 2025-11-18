import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { data } from "autoprefixer";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Revenue (Rands)",
                data: [250000, 190000, 300000, 500000, 250000, 300000],
                borderColor: "hsla(36, 45%, 37%, 0.61)",
                backgroundColor: "rgba(231, 233, 238, 0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Expenses (Rands)",
                data: [150000, 90000, 100000, 300000, 150000, 100000],
                borderColor: "hsla(36, 45%, 37%, 0.61)",
                backgroundColor: "rgba(240, 255, 253, 0.2)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: "top",
    //         },
    //         title: {
    //             display: true,
    //             text: "Monthly Revenue Trend",
    //         },
    //     },
    //     scales: {
    //         y: {
    //             beginAtZero: true,
    //         },
    //     },
    // };
    const options = {
        spanGaps: true,
        showLine: true,
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-2xl shadow">
            <Line data={data} options={options} />
        </div>
    );
}
