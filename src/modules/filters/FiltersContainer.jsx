//ui components
import Filter from "../../components/Filter";
//utilities
import { availableFilters, filterOptions } from "../../components/utils";

const FiltersContainer = () => {
  return (
    <div className="filtersContainer">
      {availableFilters?.map((filter, idx) => {
        const options = filterOptions[filter]?.options;
        return <Filter key={idx} filter={filter} options={options} />;
      })}
    </div>
  );
};

export default FiltersContainer;
