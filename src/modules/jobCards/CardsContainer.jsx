import JobCard from "./JobCard";
import { connect } from "react-redux";
const CardsContainer = ({ filteredJobCards }) => {
  return (
    <div className="cardsContainer">
      {filteredJobCards?.map((jobCard) => {
        return <JobCard key={jobCard?.jdUid} cardData={jobCard} />;
      })}
    </div>
  );
};

export default connect(
  ({ applyFilters: { totalJobCount, filteredJobCards } }) => ({
    filteredJobCards,
    totalJobCount,
  })
)(CardsContainer);
