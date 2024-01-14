import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { filterSearch, filterbyRegion } from "../util/filter";

const AppContext = createContext();

function Context({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [region, setRegion] = useState("Filter by region");
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      return data;
    },
  });

  const regionQuery = useQuery({
    queryKey: ["countries", region],
    enabled: countriesQuery.isSuccess,
    queryFn: () => {
      if (region === "Filter by region") {
        return countriesQuery.data;
      }
      const stepTwo = filterbyRegion(region, countriesQuery.data);
      return stepTwo;
    },
  });

  const filterQuery = useQuery({
    queryKey: ["countries", searchResult],
    enabled: regionQuery.isSuccess,
    queryFn: () => {
      if (searchResult === "") {
        return regionQuery.data;
      }
      const stepTwo = filterSearch(searchResult, regionQuery.data);
      return stepTwo;
    },
  });

  // if (filterQuery.isLoading || filterQuery === undefined) {
  //   console.log("Loading...");
  // } else {
  //   // const flags = filterQuery.data.map((c) => {
  //   //   return { alt: c.flags.alt, svg: c.flags.svg };
  //   // });
  //   console.log(filterQuery.data);
  // }

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleSearch(str) {
    setSearchResult(str);
  }

  function handleRegion(str) {
    setRegion(str);
  }

  return (
    <AppContext.Provider
      value={{
        filterQuery,
        darkMode,
        handleDarkMode,
        searchResult,
        handleSearch,
        region,
        handleRegion,
        countriesQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  return context;
}

export { useApp, Context };
