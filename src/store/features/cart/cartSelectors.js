export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => {
  return Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity,
    0
  );
};
export const selectTotalQuantityById = (state, productId) => {
  return state.cart.items[productId]?.quantity || 0
}