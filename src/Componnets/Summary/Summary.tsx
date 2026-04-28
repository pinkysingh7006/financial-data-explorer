import { generateSummary } from "../../utils/summary";
import "./summary.css";

function Summary({ data }) {
    if (!data?.length) return null;

    return (
        <div className="summary-box">
            <h3>Summary</h3>
            <p>{generateSummary(data)}</p>
        </div>
    );
}

export default Summary;