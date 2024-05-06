//sorted in alphabetical order
export const availableFilters = [
  "Roles",
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

export const isScrollingDownAndReachedEnd = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  return (
    scrollPosition > 0 && scrollPosition + windowHeight >= documentHeight - 100
  );
};

export const isReachedEnd = (totalJobCount = 0, jobCardCount = 0) => {
  return totalJobCount === jobCardCount;
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

export const findFilteredData = (filters = {}, jobCards = []) => {
  let filteredData = [...jobCards];
  for (let filter in filters) {
    if (!filters[filter]?.length) continue;
    switch (filter) {
      case "Roles": {
        filteredData = filteredData?.filter((data) =>
          filters[filter]?.includes(data?.jobRole?.toLowerCase())
        );
        break;
      }
      case "Experience": {
        filteredData = filteredData?.filter((data) => {
          console.log(data?.minExp, filters[filter]);
          return data?.minExp >= parseInt(filters[filter]);
        });
        break;
      }
      case "Remote": {
        filteredData = filteredData.filter((data) => {
          const location = data.location.toLowerCase();
          const filterValues = filters[filter];
          const isInOfficeSelected = filterValues.includes("inoffice");
          if (
            isInOfficeSelected &&
            !filterValues?.includes("remote") &&
            !filterValues?.includes("hybrid")
          ) {
            return location !== "remote" && location !== "hybrid";
          } else if (isInOfficeSelected && !filterValues?.includes("remote")) {
            return location !== "remote";
          } else if (isInOfficeSelected && !filterValues?.includes("hybrid")) {
            return location !== "hybrid";
          } else {
            return filterValues.includes(location);
          }
        });

        break;
      }
      case "Minimum Base Pay Salary": {
        filteredData = filteredData?.filter((data) => {
          let minSalary = filters[filter];
          return data?.minJdSalary >= minSalary;
        });
        break;
      }
      case "Search Company Name":
        filteredData = filteredData?.filter((data) => {
          return data?.companyName
            ?.toLowerCase()
            ?.includes(filters[filter]?.toLowerCase());
        });
        break;
      default:
        break;
    }
  }
  return filteredData;
};

export const validImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(url);
    };
    img.onerror = () => {
      resolve(
        "https://www.google.com/imgres?q=logo%20fallback%20image&imgurl=https%3A%2F%2Fglobal.discourse-cdn.com%2Fturtlehead%2Foriginal%2F2X%2Fc%2Fc830d1dee245de3c851f0f88b6c57c83c69f3ace.png&imgrefurl=https%3A%2F%2Fhitchhikers.yext.com%2Fcommunity%2Ft%2Fhow-do-i-insert-a-fallback-photo-if-my-entity-doesnt-have-a-photo%2F2148&docid=rcR9AvSWftJbgM&tbnid=EBsJQeOizD83xM&vet=12ahUKEwjpu8Leg_qFAxVpwjgGHch9DnsQM3oECBsQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjpu8Leg_qFAxVpwjgGHch9DnsQM3oECBsQAA"
      );
    };
    img.src = url;
  });
};

export const throttle = (func, delay) => {
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
