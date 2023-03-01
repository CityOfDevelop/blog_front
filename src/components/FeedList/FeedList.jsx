import "./FeedList.css";
import { Link } from "react-router-dom";

const tempImg = "/images/board/temp_img01.png";

const FeedList = (props) => {
  const feeds = props.feeds;
  const listItems = feeds.map((item) => (
    <li id={item.boardNo} className="board_list_item" key={item.boardNo}>
      {/* 여기에 쿼리스트링 하셔서 상세 */}
      <Link className="board_link" to="/">
        {/* 카테고리 추가할 공간? */}
        <div className="boart_list_item_post">
          <div className="post_title">{item.title}</div>
          <div className="post_cntn">
            <span className="article_cntn">{item.cntn}</span>
          </div>
          <div className="post_append">
            <span>댓글{item.replyCnt} / </span>
            <span>{item.regDttm}</span>
          </div>
        </div>
        <div className="board_list_item_img">
          {/* 임시 이미지 파일 setting */}
          <img src={tempImg} alt="게시판 이미지" />
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
