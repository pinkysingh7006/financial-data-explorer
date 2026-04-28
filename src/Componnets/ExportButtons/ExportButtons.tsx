import { downloadCSV } from "../../utils/csv";

function ExportButtons({ data }) {
    return (
        <div className="export-box">
            <button onClick={() => downloadCSV(data)}>
                Export CSV
            </button>
        </div>
    );
}
export default ExportButtons;