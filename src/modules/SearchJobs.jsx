import { useEffect, useRef } from "react";
import { useDispatch, connect } from "react-redux";
import fetchApi from "../components/api/fetchApi";
import CardsContainer from "./jobCards/CardsContainer";
import FiltersContainer from "./filters/FiltersContainer";
import {
  loadJobCards,
  updateTotalJobCount,
} from "../app/redux/slices/applyFiltersSlice";
import {
  isReachedEnd,
  isScrollingDownAndReachedEnd,
  throttle,
} from "../components/utils";

const SearchJobs = ({ jobCards, totalJobCount }) => {
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  const fetchData = async () => {
    let offset = jobCards?.length;
    const res = await fetchApi(offset);
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

export default connect(({ applyFilters: { totalJobCount, jobCards } }) => ({
  jobCards,
  totalJobCount,
}))(SearchJobs);
