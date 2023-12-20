export const convertDate = (dateString) => {
  const originalDate = new Date(dateString);

  const day = originalDate.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[originalDate.getMonth()];
  const year = originalDate.getFullYear();

  // Create the formatted date string
  const formattedDate = day + " " + month + " " + year;

  return formattedDate;
};
