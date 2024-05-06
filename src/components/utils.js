export const availableFilters = [
  "Roles",
  "Number Of Employees",
  "Experience",
  "Remote",
  "Minimum Base Pay Salary",
  "Search Company Name",
];

export const capitalizeString = (str = "") => {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

const engineeringOptions = [
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Fullstack" },
  { value: "ios", label: "IOS" },
  { value: "flutter", label: "flutter" },
];
const designOptions = [
  { value: "designer", label: "Designer" },
  { value: "graphic designer", label: "Graphic Designer" },
  { value: "product designer", label: "Product Designer" },
];

const productOptions = [{ value: "product manager", label: "Product Manager" }];

export const filterOptions = {
  Roles: {
    options: [
      { label: "Engineering", options: engineeringOptions },
      { label: "Design", options: designOptions },
      { label: "Product", options: productOptions },
    ],
  },
  "Number Of Employees": {
    options: [
      { label: "1-10", value: "1-10" },
      { label: "11-20", value: "11-20" },
      { label: "21-50", value: "21-50" },
      { label: "51-100", value: "51-100" },
      { label: "101-200", value: "101-200" },
      { label: "201-500", value: "201-500" },
      { label: "500+", value: "500+" },
    ],
  },
  Experience: {
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "10", value: "10" },
    ],
  },
  Remote: {
    options: [
      { label: "Remote", value: "remote" },
      { label: "Hybrid", value: "hybrid" },
      { label: "In-office", value: "inoffice" },
    ],
  },
  "Minimum Base Pay Salary": {
    options: [
      { label: "0L", value: "0" },
      { label: "10L", value: "10" },
      { label: "20L", value: "20" },
      { label: "30L", value: "30" },
      { label: "40L", value: "40" },
      { label: "50L", value: "50" },
      { label: "60L", value: "60" },
      { label: "70L", value: "70" },
    ],
  },
};

export const findEstimatedSalary = (minSalary, maxSalary, salaryCurrency) => {
  let currency = salaryCurrency === "USD" ? "$" : "₹";
  let salaryUnit = salaryCurrency === "USD" ? "K" : "LPA";
  if (!minSalary && !maxSalary) return "Not Specified";
  if (!minSalary) return `Upto ${currency} ${maxSalary} ${salaryUnit}`;
  if (!maxSalary) return `Atleast ${currency} ${minSalary} ${salaryUnit}`;
  return `${currency} ${minSalary} - ${maxSalary} ${salaryUnit}`;
};

export const validImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(url);
    };
    img.onerror = () => {
      resolve("fallback_image_url.jpg");
    };
    img.src = url;
  });
};
