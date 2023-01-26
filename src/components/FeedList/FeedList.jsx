const FeedList = (props) => {
    const testData = props.testData;
    const listItems = testData.map((item) =>
        <li id="list{item}" className="">
            {item}
        </li>
    )
  return (
    <div>
        <ul>
            {listItems}
        </ul>
    </div>
  );
};

export default FeedList;