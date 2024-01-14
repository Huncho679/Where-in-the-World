import { useNavigate } from "react-router-dom";
import { useApp } from "../context/Context";

export default function BorderCountryTag({ name }) {
  const { darkMode } = useApp();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        darkMode ? "bg-gray-700" : "bg-white"
      } text-center py-[6px] md:px-10 px-5 rounded-md shadow-md hover:cursor-pointer transition-all duration-300`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/${name}`);
      }}
    >
      <p className="text-md md:text-lg lg:text-xl">{name}</p>
    </div>
  );
}
