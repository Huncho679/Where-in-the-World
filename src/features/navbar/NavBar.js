import { useApp } from "../context/Context";

export default function NavBar() {
  const { darkMode, handleDarkMode } = useApp();
  return (
    <div
      className={`flex items-center justify-between p-6 transition-all duration-300 ${
        darkMode ? "bg-gray-700" : "bg-white"
      } shadow-sm`}
    >
      <h1
        className={`text-lg font-bold ${
          darkMode ? "text-white" : "text-black"
        } xl:text-2xl transition-all duration-300`}
      >
        Where in the World?
      </h1>
      <div
        className="flex items-center gap-1 hover:cursor-pointer"
        onClick={handleDarkMode}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-2 moon stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-2 stroke-black sun"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        )}

        <p
          className={`${
            darkMode ? "text-white" : "text-black"
          } text-sm font-semibold xl:text-xl`}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
}
