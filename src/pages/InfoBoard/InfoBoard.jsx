import Header from "../../containers/Header/Header";
import FeedList from "../../components/FeedList/FeedList";

const InfoBoard = () => {
    return (
        <div>
            <Header />
            <FeedList testData = {[1,2,3]} />
        </div>
    );
  };
  
  export default InfoBoard;
  