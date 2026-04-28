export const generateSummary = (data: any[]) => {
  if (!data || data.length < 2) return "Not enough data available.";

  const first = data[0].value;
  const last = data[data.length - 1].value;

  if (last > first) {
    return "The company shows a positive growth trend over the selected years.";
  }
  if (last < first) {
    return "The company shows a declining trend over the selected years.";
  }

  return "The financial data appears stable over the selected period.";
};
