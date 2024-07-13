import React from "react";
import Searchbar from "./component/Searchbar";
import MyImages from "./component/MyImages";
import Footer from "./component/Footer";
import { StateProvider } from "./context/newContext";

function App() {
  return (
    <>
      <StateProvider>
        <Searchbar />
        <MyImages />
        <Footer />
      </StateProvider>
    </>
  );
}

export default App;
