import React from "react";
import Header from "../components/Header";

const hallo = "hallo";
const hallo2 = "hallo2";

const HomePage = () => {
  return (
    <div className="text-red-500">
      <Header hallo={hallo} hallo2={hallo2} />
    </div>
  );
};

export default HomePage;
