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

export const capitalizeString = (str = "") => {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

export const findEstimatedSalary = (minSalary, maxSalary, salaryCurrency) => {
  let currency = salaryCurrency === "USD" ? "$" : "₹";
  let salaryUnit = salaryCurrency === "USD" ? "K" : "LPA";
  if (!minSalary && !maxSalary) return "Not Specified";
  if (!minSalary) return `Upto ${currency} ${maxSalary} ${salaryUnit}`;
  if (!maxSalary) return `Atleast ${currency} ${minSalary} ${salaryUnit}`;
  return `${currency} ${minSalary} - ${maxSalary} ${salaryUnit}`;
};
