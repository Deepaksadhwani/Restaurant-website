import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import appStoreProvider from "./store/appStoreProvider";
const App = () => {
  return (
    <appStoreProvider>
        <div className="">
        <Header></Header>
        <Body></Body>
      </div>
    </appStoreProvider>
  );
};

export default App;
