import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div id="sideMenu" className={props.active ? "open" : null}>
      <div className="side">
        <button onClick={props.sideClose}>close</button>
      </div>
    </div>
  );
};

export default SideBar;
