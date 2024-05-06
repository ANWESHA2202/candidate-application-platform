import { useEffect } from "react";
import JobCard from "./JobCard";
import { connect, useDispatch } from "react-redux";
import {
  isReachedEnd,
  isScrollingDownAndReachedEnd,
  throttle,
} from "../../components/utils";
import fetchApi from "../../components/api/fetchApi";
import { loadJobCards } from "../../app/redux/slices/applyFiltersSlice";

let DEBOUNCE = null;

const CardsContainer = ({ filteredJobCards, totalJobCount, jobCards }) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    let offset = jobCards?.length;
    const res = await fetchApi(offset);
    if (!res?._code) {
      dispatch(loadJobCards(res?.jdList));
    }
  };
  const handleScroll = () => {
    if (
      isScrollingDownAndReachedEnd() &&
      !isReachedEnd(totalJobCount, jobCards?.length)
    ) {
      if (DEBOUNCE) clearInterval(DEBOUNCE);
      DEBOUNCE = setTimeout(() => throttle(fetchData, 500)(), 500);
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [jobCards]);

  return (
    <div className="cardsContainer">
      {filteredJobCards?.map((jobCard) => {
        return <JobCard key={jobCard?.jdUid} cardData={jobCard} />;
      })}
    </div>
  );
};

export default connect(
  ({ applyFilters: { totalJobCount, filteredJobCards, jobCards } }) => ({
    filteredJobCards,
    jobCards,
    totalJobCount,
  })
)(CardsContainer);
