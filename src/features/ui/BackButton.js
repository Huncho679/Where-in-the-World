import { useNavigate } from "react-router-dom";
import { useApp } from "../context/Context";

export default function BackButton() {
  const navigate = useNavigate();
  const { darkMode } = useApp();
  return (
    <button
      className={`px-4 py-1 text-lg bg-gray-700 rounded-md shadow-lg ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
      } transition-all duration-300 lg:text-3xl lg:px-8 lg:py-3`}
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      &larr; Back
    </button>
  );
}
