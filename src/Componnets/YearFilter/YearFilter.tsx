
type Props = {
    onChange: (value: number) => void;
};
function YearFilter({ onChange }: Props) {
    return (
        <div className="filter-box">
            <select onChange={(e: any) => onChange(Number(e.target.value))}>
                <option value={3}>Last 3 Years</option>
                <option value={5}>Last 5 Years</option>
            </select>
        </div>
    );
}

export default YearFilter;