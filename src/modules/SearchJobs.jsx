//hooks import
import { connect, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
//redux imports
import {
  loadJobCards,
  updateTotalJobCount,
} from "../app/redux/slices/applyFiltersSlice";
//components import
import CardsContainer from "./jobCards/CardsContainer";
import FiltersContainer from "./filters/FiltersContainer";
//utils
import fetchApi from "../components/api/fetchApi";

const SearchJobs = ({ jobCards }) => {
  //hook instances
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  //api call
  const fetchData = async () => {
    let offset = jobCards?.length;
    const res = await fetchApi(offset);
    if (!res?._code && firstRender.current) {
      firstRender.current = false;
      dispatch(loadJobCards(res?.jdList));
      dispatch(updateTotalJobCount(res?.totalCount));
    }
  };

  //useEffects
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

//accessing redux states from store
export default connect(({ applyFilters: { jobCards } }) => ({
  jobCards,
}))(SearchJobs);
