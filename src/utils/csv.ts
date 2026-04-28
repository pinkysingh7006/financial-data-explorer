export const downloadCSV = (data, filename = "data.csv") => {
  const rows = data.map((d) => `${d.year},${d.value}`);
  const csv = "Year,Value\n" + rows.join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
};
