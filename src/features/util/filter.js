function filterbyRegion(region, data) {
  const results = data.filter((e) => e.region === region);
  return results;
}

function filterSearch(search, data) {
  const results = data.filter((e) =>
    new RegExp(search, "i").test(e.name.common)
  );
  return results;
}

function getBorderCountries(borders, data) {
  if (!borders) return;
  const results = data.filter((c) => {
    return borders.includes(c.cca3);
  });
  const actualBorders = results.map((bc) => bc.name.common);
  return actualBorders;
}

export { filterSearch, filterbyRegion, getBorderCountries };
