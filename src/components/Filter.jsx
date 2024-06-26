/* eslint-disable react/prop-types */
//hooks import
import { useDispatch, connect } from "react-redux";
//ui components from lib
import Select from "react-select";
import TextField from "@mui/material/TextField";
//redux import
import { applyFilter } from "../app/redux/slices/applyFiltersSlice";

//edtra styles
const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};
//global var to limit func calls
let DEBOUNCE = null;
//helper function
const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

function Filter({ filter, options, filters }) {
  //hooks instances
  const dispatch = useDispatch();

  //handler functions
  const handleSearchName = (name) => {
    if (DEBOUNCE) clearInterval(DEBOUNCE);
    DEBOUNCE = setTimeout(() => {
      let filterKeyValue = {
        "Search Company Name": name,
      };
      dispatch(applyFilter(filterKeyValue));
    }, 500);
  };
  const handleChange = (e) => {
    let values = Array.isArray(e) ? e.map((val) => val.value) : e?.value || "";
    let filterKeyValue = {
      [filter]: values,
    };
    dispatch(applyFilter(filterKeyValue));
  };

  return (
    <>
      {filter !== "Search Company Name" ? (
        <div>
          <Select
            className="filter"
            placeholder={filter}
            options={options}
            isMulti={
              filter !== "Minimum Base Pay Salary" && filter !== "Experience"
            }
            isClearable
            formatGroupLabel={formatGroupLabel}
            onChange={(e) => handleChange(e)}
          />
        </div>
      ) : (
        <TextField
          className="filter"
          placeholder={filter}
          onChange={(e) => handleSearchName(e.target.value)}
          inputProps={{
            style: {
              maxHeight: "5px",
              fontSize: "0.8rem",
            },
          }}
        />
      )}
    </>
  );
}
//accessing redux store data
export default connect(({ applyFilters: { filters } }) => ({
  filters,
}))(Filter);
