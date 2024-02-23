import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Features from "./Features";
import Packages from "./Packages";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Benefits/>
      <Features/>
      <Packages/>
      <Footer/>
    </div>
  );
};
export default Home;

