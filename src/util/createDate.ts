export const createDate = (dateString: string) => {
  const extractedDate = dateString.split('T');
  const year = extractedDate[0].substring(0, 4);
  const month = extractedDate[0].substring(4, 6);
  const day = extractedDate[0].substring(6, 8);
  const date = `${day}.${month}.${year}`;
  return date;
};
