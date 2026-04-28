import { downloadCSV } from "../../utils/csv";
type Props = {
    data: { year: string; value: number }[];
};
function ExportButtons({ data }: Props) {
    return (
        <div className="export-box">
            <button onClick={() => downloadCSV(data)}>
                Export CSV
            </button>
        </div>
    );
}
export default ExportButtons;