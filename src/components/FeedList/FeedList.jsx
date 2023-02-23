import "./FeedList.css";
import { Link } from "react-router-dom";

const FeedList = (props) => {
  const testData = props.testData;
  const listItems = testData.map((item) => (
    <li id="list{item}" className="board_list_item" key={item}>
      <Link id="" to="/board/">
        {/* 여기에 쿼리스트링 하셔서 상세 */}
        {item.title}
        <br />
        {item.cntn}
      </Link>
    </li>
  ));
  return (
    <div className="wrap_board">
      <ul className="board_list">{listItems}</ul>
    </div>
  );
};

export default FeedList;
