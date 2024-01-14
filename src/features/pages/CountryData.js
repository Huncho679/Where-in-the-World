import { useParams } from "react-router-dom";
import { useApp } from "../context/Context";
import NavBar from "../navbar/NavBar";
import BackButton from "../ui/BackButton";
import { getBorderCountries } from "../util/filter";
import BorderCountryTag from "../countries/BorderCountryTag";

export default function CountryData() {
  const { name } = useParams();
  const { darkMode, countriesQuery } = useApp();
  const country = countriesQuery.data.filter((c) => c.name.common === name);
  const flagUrl = country[0].flags.png;
  const flagAlt = country[0].flags.alt;
  const population = country[0].population.toLocaleString();
  const region = country[0].region;
  const subregion = country[0].subregion;
  const capital = country[0].capital;
  const tld = country[0].tld[0];
  let languages = country[0].languages;
  languages = Object.values(languages);
  languages = languages.join(", ");
  let currencies = country[0].currencies;
  currencies = Object.values(currencies)[0].name;

  const borderCountries = getBorderCountries(
    country[0].borders,
    countriesQuery.data
  );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-slate-100"
      } min-h-screen transition-all duration-300`}
    >
      <NavBar />
      <div className="px-8 pb-8 mt-12 md:px-12 lg:mt-24">
        <BackButton />
        <div className="gap-16 xl:flex">
          <img
            alt={flagAlt}
            src={flagUrl}
            className="mt-16 shadow-sm md:w-[500px] lg:w-[700px] xl:w-[800px]"
          />
          <div>
            <h1
              className={`mt-16 mb-6 text-2xl font-bold ${
                darkMode ? "text-white" : "text=black"
              } md:text-4xl lg:text-6xl md:mb-8 lg:mb-12 xl:text-4xl transition-all durataion-300`}
            >
              {name}
            </h1>
            <div
              className={`xl:flex xl:gap-12 text-lg ${
                darkMode ? "text-white" : "text-black"
              } md:text-2xl lg:text-3xl xl:text-2xl`}
            >
              <div>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {population}
                </p>
                <p className="mt-2 md:mt-4">
                  <span className="font-semibold">Region:</span> {region}
                </p>
                <p className="mt-2 md:mt-4">
                  <span className="font-semibold">Sub Region:</span> {subregion}
                </p>
                <p className="mt-2 md:mt-4">
                  <span className="font-semibold">Capital:</span> {capital}
                </p>
              </div>

              <div>
                <p className="mt-12 xl:mt-0">
                  <span className="font-semibold">Top Level Domain:</span> {tld}
                </p>
                <p className="mt-2 md:mt-4">
                  <span className="font-semibold">Currencies:</span>{" "}
                  {currencies}
                </p>
                <p className="mt-2 md:mt-4">
                  <span className="font-semibold">Languages:</span> {languages}
                </p>
              </div>
            </div>

            {borderCountries && (
              <div
                className={`mt-12 ${darkMode ? "text-white" : "text-black"} `}
              >
                <p className="text-lg font-semibold md:text-2xl lg:text-3xl xl:text-2xl">
                  Border Countries:
                </p>
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:mt-6 lg:mt-8">
                  {borderCountries.map((name, idx) => (
                    <BorderCountryTag name={name} key={idx} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
