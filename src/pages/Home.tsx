import Feedback from "../components/Feedback";
import FindProgram from "../components/FindProgram";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/common/News/News";
import Progress from "../components/Progress";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <News />
        <FindProgram />
        <Progress />
      </div>
      <Feedback />
      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default Home;
