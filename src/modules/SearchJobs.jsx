import { useEffect, useState } from "react";
import fetchApi from "../components/api/fetchApi";
import CardsContainer from "./jobCards/CardsContainer";
import FiltersContainer from "./filters/FiltersContainer";

const SearchJobs = () => {
  const [searchData, setSearchData] = useState([]);
  const fetchData = async () => {
    const res = await fetchApi();
    setSearchData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <FiltersContainer />
      <CardsContainer searchData={searchData} />
    </div>
  );
};

export default SearchJobs;
