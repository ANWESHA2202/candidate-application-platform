import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import fetchApi from "../components/api/fetchApi";
import CardsContainer from "./jobCards/CardsContainer";
import FiltersContainer from "./filters/FiltersContainer";
import {
  loadJobCards,
  updateTotalJobCount,
} from "../app/redux/slices/applyFiltersSlice";

const SearchJobs = () => {
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  const fetchData = async () => {
    const res = await fetchApi();
    if (!res?._code && firstRender.current) {
      firstRender.current = false;
      dispatch(loadJobCards(res?.jdList));
      dispatch(updateTotalJobCount(res?.totalCount));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="searchJobContainer">
      <FiltersContainer />
      <CardsContainer />
    </div>
  );
};

export default SearchJobs;
