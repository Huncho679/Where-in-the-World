import { useApp } from "../context/Context";
import CountryCard from "./CountryCard";

export default function CountryGrid() {
  const { filterQuery, darkMode } = useApp();

  if (filterQuery.data === undefined) return;

  if (filterQuery.isLoading) return;

  return (
    <div
      className={`min-h-screen grid grid-cols-1 gap-12 p-8 xl:gap-24 xl:p-20 xl:grid-cols-4 sm:grid-cols-2 place-items-center md:gap-10 ${
        darkMode ? "bg-gray-800" : "bg-slate-100"
      } duration-300 transition-all`}
    >
      {filterQuery.data.map((c, id) => (
        <CountryCard
          key={id}
          name={c.name.common}
          population={c.population}
          region={c.region}
          capital={c.capital}
          flag={c.flags.png}
        />
      ))}
    </div>
  );
}
