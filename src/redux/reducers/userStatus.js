// reducers/counter.js

// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const LOGON = "USERSTATUS/LOGON";
export const LOGOFF = "USERSTATUS/LOGOFF";

export const changeStatusOn = (userStatus) => ({ type: LOGON, userStatus });
export const changeStatusOff = (userStatus) => ({ type: LOGOFF, userStatus });

const initalState = {
  userStatus: "off",
};

const userStatus = (state = initalState, action) => {
  switch (action.type) {
    case LOGON:
      return {
        ...state,
        userStatus: action.userStatus,
      };
    case LOGOFF:
      return {
        ...state,
        userStatus: action.userStatus,
      };

    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
    default:
      return state;
  }
};
