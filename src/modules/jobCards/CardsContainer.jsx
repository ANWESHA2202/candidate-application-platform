//hooks import
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//utils
import fetchApi from "../../components/api/fetchApi";
import {
  isReachedEnd,
  isScrollingDownAndReachedEnd,
  throttle,
} from "../../components/utils";
//ui components
import JobCard from "./JobCard";
import JobCardLoader from "./JobCardLoader";
//redux import
import { loadJobCards } from "../../app/redux/slices/applyFiltersSlice";

//global var to limit function call
let DEBOUNCE = null;

const CardsContainer = ({ filteredJobCards, totalJobCount, jobCards }) => {
  //hooks instances
  const dispatch = useDispatch();
  //define states
  const [isLoading, setIsLoading] = useState(false);

  //api call
  const fetchData = async () => {
    let offset = jobCards?.length;
    const res = await fetchApi(offset);
    if (!res?._code) {
      dispatch(loadJobCards(res?.jdList));
    }
    setIsLoading(false);
  };

  //event handler functions
  const handleScroll = () => {
    if (
      isScrollingDownAndReachedEnd() &&
      !isReachedEnd(totalJobCount, jobCards?.length)
    ) {
      setIsLoading(true);
      if (DEBOUNCE) clearInterval(DEBOUNCE);
      DEBOUNCE = setTimeout(() => throttle(fetchData, 500)(), 500);
    }
  };

  //useEffects
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

      {isLoading ? [1, 2, 3]?.map((num) => <JobCardLoader key={num} />) : null}
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
