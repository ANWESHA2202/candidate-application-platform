import { useEffect } from "react";
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
  const fetchData = async () => {
    const res = await fetchApi();
    if (!res?._code) {
      dispatch(updateTotalJobCount(res?.totalCount));
      dispatch(loadJobCards(res?.jdList));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <FiltersContainer />
      <CardsContainer />
    </div>
  );
};

export default SearchJobs;
