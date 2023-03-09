import Header from "containers/Header/Header";
import Beacon from "containers/Beacon/Beacon";
import "./Home.css";
import SideBar from "containers/SideBar/SideBar";

const Home = () => {
  return (
    <div className="dc_wrap">
      <Header />
      <SideBar />
      <div className="dc_main">
        <h3 className="dc_title">개발도시 Home</h3>
      </div>
      <Beacon />
    </div>
  );
};

export default Home;
