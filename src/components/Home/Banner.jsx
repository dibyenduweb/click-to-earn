import girl from "../../assets/img/2.png";
import CSSButton from "../button/CSSButton";

const Banner = () => {
  return (
    <div className="relative">
      {/* <div className="bg-gradient-to-b from-blue-900 via-sky-800 to-sky-800"> */}
      <div>
      <img className="relative " src={girl} alt="" />
      <div className="absolute top-60 left-20 w-[500px]">
        <h1 className="text-4xl font-bold text-white shadow-lg">Start Earning From The Comfort of Home</h1>
        <div className="flex p-4">
        <CSSButton cssbtn="Get Start"/>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Banner;
