export const ReductionAmountItems = (itemArray = [], quantity = 0) => {
  return itemArray.length <= quantity
    ? itemArray
    : itemArray.slice(0, quantity);
};
export default ReductionAmountItems;
