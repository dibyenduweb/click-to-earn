/* eslint-disable no-unused-vars */
import React from "react";
import girl from "../../assets/img/new.png";
import mony from "../../assets/img/mony.png";
import CSSButton from "../button/CSSButton";

const Banner = () => {
  return (
    <div className="flex relative ">
      <div >
        <img className="relative " src={girl} alt="" />
        <div className="absolute px-6 top-56 left-20 w-[600px]">
          <h1 className="text-5xl font-bold text-white shadow-lg">Start Earning From The Comfort of Home</h1>
          <div className="flex p-4 ">
            <CSSButton cssbtn="Get Start" />
          </div>
        </div>
      </div>
      <div className="absolute -ml-44  top-36 left-2/3">
        <img className="w-[500px]" src={mony} alt="" />
      </div>
    </div>
  );
};

export default Banner;
