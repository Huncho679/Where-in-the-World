import { useApp } from "../context/Context";
import CountryGrid from "../countries/CountryGrid";
import Filter from "../filtering/Filter";
import Search from "../filtering/Search";
import NavBar from "../navbar/NavBar";

export default function Home() {
  const { darkMode } = useApp();
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-slate-100"
      } transition-all duration-300`}
    >
      <NavBar />
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:px-8 xl:px-20">
        <Search />
        <Filter />
      </div>
      <CountryGrid />
    </div>
  );
}
