export const setExpireDate = (month) => {
  const startDate = new Date();

  const expirationDate = new Date(startDate);
  expirationDate.setMonth(expirationDate.getMonth() + Number(month));

  return expirationDate;
};
