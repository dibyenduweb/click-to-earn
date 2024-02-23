import girl from "../../assets/img/girlim.png";
import CSSButton from "../button/CSSButton";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-b from-blue-900 via-sky-800 to-sky-800">
      <img className="relative opacity-40" src={girl} alt="" />
      <div className="absolute top-60 left-1/4 ">
        <h1 className="text-4xl font-bold text-white shadow-lg">Start Earning From The Comfort of Home</h1>
        <div className="flex justify-center p-6">
        <CSSButton cssbtn="Get Start"/>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Banner;
