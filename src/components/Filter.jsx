/* eslint-disable react/prop-types */
import Select from "react-select";
import TextField from "@mui/material/TextField";
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

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function Filter({ filter, options }) {
  return (
    <>
      {filter !== "Search Company Name" ? (
        <Select
          className="filter"
          placeholder={filter}
          options={options}
          formatGroupLabel={formatGroupLabel}
        />
      ) : (
        <TextField
          className="filter"
          placeholder={filter}
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
