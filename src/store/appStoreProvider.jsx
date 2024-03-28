import appStore from "./appStore";

const appStoreProvider = (props) => {
  const addItemHandler = (items) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <appStore.Provider value={cartContext}>{props.children}</appStore.Provider>
  );
};

export default appStoreProvider;
