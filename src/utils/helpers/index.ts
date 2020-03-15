export const getPageRange = (count: number): number[] => {
  const pageCount = Math.floor(count / 10);
  return Array.from(Array(pageCount), (_, i) => i + 1);
};
