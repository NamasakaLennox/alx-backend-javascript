function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const INCOME = `income-${getCurrentYear()}`;
  const GDP = `gdp-${getCurrentYear()}`;
  const CAPITA = `capita-${getCurrentYear()}`;
  const budget = {
    [INCOME]: income,
    [GDP]: gdp,
    [CAPITA]: capita,
  };

  return budget;
}
