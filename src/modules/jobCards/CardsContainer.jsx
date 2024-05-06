import { connect, useDispatch } from "react-redux";
import {
  isReachedEnd,
  isScrollingDownAndReachedEnd,
  throttle,
} from "../../components/utils";

import JobCard from "./JobCard";
import fetchApi from "../../components/api/fetchApi";
import { loadJobCards } from "../../app/redux/slices/applyFiltersSlice";
import { useEffect } from "react";

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
      {filteredJobCards?.length ? (
        filteredJobCards?.map((jobCard) => {
          return <JobCard key={jobCard?.jdUid} cardData={jobCard} />;
        })
      ) : (
        <div className="noData">
          <img
            src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
            width={100}
            height={100}
          />
          <div>No jobs available for this category at this moment!</div>
        </div>
      )}
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
