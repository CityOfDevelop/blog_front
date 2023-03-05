import PieChart from "components/PieChart/PieChart";
import GridCrtf from "components/GridCrtf/GridCrtf";
import PieChartDetail from "components/PieChartDetail/PieChartDetail";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dash_wrap">
      <div className="dash_intro dash_bg">소개{/* 자격증 */}</div>
      <div className="dash_chart_wrap">
        <div className="dash_chart">
          <PieChart />
        </div>
        <div className="dash_chart_detail dash_bg">
          <PieChartDetail />
        </div>
      </div>

      <div className="dash_crtf close dash_bg">
        <GridCrtf />
      </div>
    </div>
  );
};

export default DashBoard;
