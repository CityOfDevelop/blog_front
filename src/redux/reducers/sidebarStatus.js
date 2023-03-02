// reducers/counter.js

// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
const OPEN_SIDEBAR = "SIDEBAR/OPEN_SIDEBAR";
const CLOSE_SIDEBAR = "SIDEBAR/CLOSE_SIDEBAR";

const openSidebar = () => ({
  type: OPEN_SIDEBAR,
});
const closeSidebar = () => ({
  type: CLOSE_SIDEBAR,
});

const initalState = {
  sidebarStatus: false,
};

const sidebarStatus = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        sidebarStatus: true,
      };
    case CLOSE_SIDEBAR:
      return {
        sidebarStatus: false,
      };
    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
    default:
      return state;
  }
};

export default sidebarStatus;
