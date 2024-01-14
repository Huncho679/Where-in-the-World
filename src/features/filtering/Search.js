import { useApp } from "../context/Context";

export default function Search() {
  const { darkMode, searchResult, handleSearch } = useApp();
  return (
    <div className="flex items-center justify-center mt-8 lg:w-[25%] lg:justify-start transition-all duration-300">
      <div
        className={`py-[12px] pl-[20px] rounded-l-lg ${
          darkMode ? "bg-gray-700" : "bg-white"
        } transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 stroke-2 ${
            darkMode ? "stroke-white" : "stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <input
        placeholder="Search for a country..."
        value={searchResult}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={`inline-block p-3 rounded-r-lg outline-none w-[75%] lg:w-full ${
          darkMode
            ? "bg-gray-700 placeholder:text-white text-white"
            : "bg-white placeholder:text-black text-black"
        } duration-300 transition-all`}
      />
    </div>
  );
}
