import Filter from "../../components/Filter";
import { availableFilters } from "../../components/utils";

const FiltersContainer = () => {
  return (
    <div className="filtersContainer">
      {availableFilters?.map((filter, idx) => {
        return <Filter key={idx} filter={filter} />;
      })}
    </div>
  );
};

export default FiltersContainer;
