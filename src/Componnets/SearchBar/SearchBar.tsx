import { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import FinancialChart from "../../Pages/FinancialChart/FinancialChart.tsx";
import Summary from "../Summary/Summary.tsx";
import YearFilter from "../YearFilter/YearFilter.tsx";
import ExportButtons from "../ExportButtons/ExportButtons.tsx";

export default function SearchBar() {
    const SOME_COMPANIES_DATA = [
        { ticker: "AAPL", cik: "0000320193", name: "Apple Inc." },
        { ticker: "MSFT", cik: "0000789019", name: "Microsoft" },
        { ticker: "AMZN", cik: "0001018724", name: "Amazon" },
        { ticker: "GOOGL", cik: "0001652044", name: "Alphabet" },
        { ticker: "META", cik: "0001326801", name: "Meta" },
        { ticker: "TSLA", cik: "0001318605", name: "Tesla" },
        { ticker: "NVDA", cik: "0001045810", name: "NVIDIA" },
        { ticker: "JPM", cik: "0000019617", name: "JPMorgan" },
        { ticker: "JNJ", cik: "0000037996", name: "Johnson & Johnson" },
        { ticker: "WMT", cik: "0000104169", name: "Walmart" },
    ];
    const [activeTicker, setActiveTicker] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [financials, setFinancials] = useState({
        assets: [],
        liabilities: [],
        revenue: [],
    });
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState(5);

    const formatData = (dataArray: any[]) => {
        if (!dataArray) return {};

        return dataArray
            .filter((item) => item.fp === "FY")
            .reduce((acc: any, curr: any) => {
                acc[curr.fy] = curr.val;
                return acc;
            }, {});
    };

    const convertToChart = (dataObj: any) => {
        return Object.keys(dataObj)
            .sort()
            .slice(-5)
            .map((year) => ({
                year,
                value: dataObj[year],
            }));
    };
    const filterData = (data: any[]) => {
        return data.slice(-years);
    };
    const fetchData = async (cik: string) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`,
            );
            const usGaap = res.data?.facts?.["us-gaap"];
            const assets: any = convertToChart(formatData(usGaap?.Assets?.units?.USD));
            const liabilities: any = convertToChart(
                formatData(
                    usGaap?.Liabilities?.units?.USD ||
                    usGaap?.LiabilitiesCurrent?.units?.USD,
                ),
            );

            const revenue: any = convertToChart(
                formatData(
                    usGaap?.Revenues?.units?.USD || usGaap?.SalesRevenueNet?.units?.USD,
                ),
            );
            setFinancials({ assets, liabilities, revenue });
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };
    const handleSearch = () => {
        if (!inputValue) return;
        fetchData(inputValue);
    };
    const handleClick = (company: any) => {
        setActiveTicker(company?.ticker);
        setInputValue(company?.cik);
        fetchData(company.cik);
    };
    return (
        <div className="search-wrapper">
            <h1 className="heading">
                Explore <span>Company</span> Financials
            </h1>
            <p className="subheading">Real-time data from SEC EDGAR annual filings</p>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter CIK number (0000320193)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? <span className="spinner"></span> : "Search"}
                </button>
            </div>
            <div className="quick-section">
                <span className="quick-label">Quick pick:</span>
                <div className="quick-grid">
                    {SOME_COMPANIES_DATA.map((c) => (
                        <button
                            key={c.ticker}
                            className={`quick-chip ${activeTicker === c.ticker ? "active" : ""}`}
                            onClick={() => handleClick(c)}
                            title={c.name}
                        >
                            <span className="quick-ticker">{c.ticker}</span>
                            <span className="quick-name">{c.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            {loading ? (
                <div className="center-loader">
                    <span className="spinner big"></span>
                </div>
            ) : financials.assets.length > 0 ? (
                <>
                    <div className="control-bar">
                        <YearFilter onChange={setYears} />
                        <ExportButtons data={financials.assets} />
                    </div>

                    {/* Charts */}
                    <div className="chart-container">
                        <div className="chart-card">
                            <h4 className="chart-title">Assets</h4>
                            <FinancialChart data={filterData(financials.assets)} />
                        </div>

                        <div className="chart-card">
                            <h4 className="chart-title">Liabilities</h4>
                            <FinancialChart data={filterData(financials.liabilities)} />
                        </div>

                        <div className="chart-card">
                            <h4 className="chart-title">Revenue</h4>
                            <FinancialChart data={filterData(financials.revenue)} />
                        </div>
                    </div>

                    {/* Summary */}
                    <Summary data={filterData(financials.assets)} />
                </>
            ) : (
                <p className="no-data">No data found. Try another company.</p>
            )}
        </div>
    );
}
