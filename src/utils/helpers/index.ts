export const getPageRange = (count: number, offset: number): number[] => {
  const pageCount = Math.floor(count / offset);
  return Array.from(Array(pageCount), (_, i) => i + 1);
};
