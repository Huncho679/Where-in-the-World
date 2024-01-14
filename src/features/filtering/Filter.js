import { useApp } from "../context/Context";

export default function Filter() {
  const { darkMode, region, handleRegion, handleSearch } = useApp();
  return (
    <select
      className={`w-[50%] mx-auto p-3 outline-none rounded-lg text-center text-md ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
      } lg:w-[15%] lg:mt-8 lg:mx-0 transition-all duration-300`}
      value={region}
      onChange={(e) => {
        handleRegion(e.target.value);
        handleSearch("");
      }}
    >
      <option value="Filter by region">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
