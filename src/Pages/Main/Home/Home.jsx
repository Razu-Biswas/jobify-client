import AboutUs from "../../../Components/Home/AboutUs/AboutUs";
import Banner from "../../../Components/Home/Banner/Banner";
import ContactUs from "../../../Components/Home/ContactUs/ContactUs";
import LatestJobs from "../../../Components/Home/LatestJobs/LatestJobs.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestJobs />
      <ContactUs />
      <AboutUs />
    </div>
  );
};

export default Home;
