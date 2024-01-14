import { useNavigate } from "react-router-dom";
import { useApp } from "../context/Context";

export default function CountryCard({
  population,
  name,
  capital,
  region,
  flag,
}) {
  const formatedPopuation = population.toLocaleString();
  const { darkMode } = useApp();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        darkMode ? "bg-gray-700" : "bg-white"
      } rounded-lg w-[320px] lg:w-full shadow-xl hover:cursor-pointer transition-all duration-300`}
      onClick={() => {
        navigate(`${name}`);
      }}
    >
      <div className="overflow-hidden rounded-t-lg h-52 ">
        <img alt={`${name}'s flag`} src={flag} className="w-full h-full" />
      </div>
      <div
        className={`p-8 text-xl ${
          darkMode ? "text-white" : "text-black"
        } duration-300 transition-all`}
      >
        <h2 className="mb-4 text-xl font-bold">{name}</h2>
        <p>
          <span className="font-semibold">Population: </span>
          {formatedPopuation}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
