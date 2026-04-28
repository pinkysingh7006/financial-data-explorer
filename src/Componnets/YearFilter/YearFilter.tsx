function YearFilter({ onChange }) {
    return (
        <div className="filter-box">
            <select onChange={(e) => onChange(Number(e.target.value))}>
                <option value={3}>Last 3 Years</option>
                <option value={5}>Last 5 Years</option>
            </select>
        </div>
    );
}

export default YearFilter;