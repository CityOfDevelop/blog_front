import "./SideBar.css"
import { useState } from "react";

const SideBar = (props) => {
    const [Active,setActive] = useState(props.active);
    
    function sideClose() {
        setActive("");
    }

    return (
        <div id="sideMenu" className={Active}>
            <div className="side">
                <button onClick={sideClose}>close</button>
            </div>
        </div>
    );
};

export default SideBar;
