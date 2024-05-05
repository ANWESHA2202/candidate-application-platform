import JobCard from "./JobCard";

const CardsContainer = ({ searchData }) => {
  return (
    <div>
      <JobCard cardData={searchData?.jdList ? searchData?.jdList[0] : []} />
    </div>
  );
};

export default CardsContainer;
