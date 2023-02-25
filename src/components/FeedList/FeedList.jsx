import "./FeedList.css";
import { Link } from "react-router-dom";

const FeedList = (props) => {
  const testData = props.testData;
  const listItems = testData.map((item) => (
    <li id={item.id} className="board_list_item" key={item.id}>
      {/* 여기에 쿼리스트링 하셔서 상세 */}
      <Link className="board_link" to="/">
        {/* 카테고리 추가할 공간? */}
        <div className="boart_list_item_post">
          <div className="post_title">{item.title}</div>
          <div className="post_cntn">
            <span className="article_cntn">{item.cntn}</span>
          </div>
          <div className="post_append">
            <span>댓글{item.commentCnt} / </span>
            <span>{item.date}</span>
          </div>
        </div>
        <div className="board_list_item_img">
          <img src={item.img} alt="게시판 이미지" />
        </div>
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
