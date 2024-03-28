import { createContext } from "react";


const appStore = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default appStore;
