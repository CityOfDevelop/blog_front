import { useDispatch } from "react-redux";
import { closeSidebar } from "redux/reducers/sidebarStatus";

export const com_cf_closeSidebar = () => {
    const dispatch = useDispatch();

    dispatch(closeSidebar());
}

