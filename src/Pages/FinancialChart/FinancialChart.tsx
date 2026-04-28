import { Line } from "react-chartjs-2";
import "chart.js/auto";

function FinancialChart({ data }: any) {
    if (!data || data.length === 0) return null;

    const chartData = {
        labels: data.map((item: any) => item.year),
        datasets: [
            {
                label: "Value",
                data: data.map((item: any) => item.value),
                borderColor: "#4CAF50",
                tension: 0.3,
            },
        ],
    };

    return <Line data={chartData} />;
}

export default FinancialChart;