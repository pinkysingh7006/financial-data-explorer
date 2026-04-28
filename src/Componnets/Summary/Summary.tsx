import { generateSummary } from "../../utils/summary";
import "./summary.css";
type Props = {
    data: { year: string; value: number }[];
};

function Summary({ data }: Props) {
    if (!data?.length) return null;

    return (
        <div className="summary-box">
            <h3>Summary</h3>
            <p>{generateSummary(data)}</p>
        </div>
    );
}

export default Summary;