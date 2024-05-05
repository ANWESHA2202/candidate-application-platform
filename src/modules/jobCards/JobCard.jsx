/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import {
  capitalizeString,
  findEstimatedSalary,
  validImage,
} from "../../components/utils";
import { useEffect, useState } from "react";
const JobCard = ({ cardData }) => {
  const [imageUrl, setImageUrl] = useState("");
  const findValidLogoUrl = async () => {
    const logoUrl = await validImage(cardData?.logoUrl);
    setImageUrl(logoUrl);
  };
  useEffect(() => {
    findValidLogoUrl();
  }, [cardData]);
  return (
    <Card className="jobCard">
      <div className="cardHeader">
        <img src={imageUrl} />
        <div className="headerDetails">
          <div className="companyName">{cardData?.companyName}</div>
          <div className="role">{capitalizeString(cardData?.jobRole)}</div>
          <div>{capitalizeString(cardData?.location)}</div>
        </div>
      </div>

      <div className="salary">
        Estimated Salary:{" "}
        {findEstimatedSalary(
          cardData?.minJdSalary,
          cardData?.maxJdSalary,
          cardData?.salaryCurrencyCode
        )}{" "}
        ⚠️
      </div>
      <div className="aboutCompany">About Company:</div>
      <div className="jd">
        {cardData?.jobDetailsFromCompany?.slice(0, 1000)}
      </div>
      <div className="showMore">
        <div className="modalBtn">Show More</div>
        <div className="apply">
          <div className="experience">
            Minimum Experience
            <div style={{ color: "dark gray", fontWeight: 200 }}>
              {cardData?.minExp ? `${cardData?.minExp} years` : "Not Mentioned"}
            </div>
          </div>
          <div className="btn">⚡ Easy Apply</div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
