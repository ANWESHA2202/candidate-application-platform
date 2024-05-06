/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";

const JobCardLoader = () => {
  return (
    <Card className="jobCard">
      <div className="cardHeader">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="headerDetails">
          <Skeleton variant="rectangular" width={100} height={20} />
          <Skeleton variant="rectangular" width={100} height={20} />
        </div>
      </div>

      <div className="salary">
        <Skeleton variant="rectangular" width={300} height={20} />
      </div>
      <div className="aboutCompany">
        <Skeleton variant="rectangular" width={300} height={300} />
      </div>
      <div className="jd" style={{ marginTop: "0.5rem" }}>
        <Skeleton variant="rectangular" width={300} height={40} />
      </div>
    </Card>
  );
};

export default JobCardLoader;
