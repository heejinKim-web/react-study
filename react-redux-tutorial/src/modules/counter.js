import { createAction, handleActions } from "redux-actions";

//액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수 >> 타입을 정의 한 다음 생성 함수로 만들어준다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//reduce 함수 만들기

//state 초기 값
const initialState = {
  number: 0,
};

//액션 정의에 따른 state 값 상태 관리 (reducer 함수) >> 액션 type 호출
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
