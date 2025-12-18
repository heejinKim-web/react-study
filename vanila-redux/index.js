import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//redux action 타입 설정
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 생성 함수 >> 타입을 정의 한 다음 생성 함수로 만들어준다.
const toggleSwitch = () => ({ type: "TOGGLE_SWITCH" });
const increase = (difference) => ({ type: "INCREASE" });
const decrease = () => ({ type: "DECREASE" });

const initialState = {
  toggle: false,
  counter: 0,
};

//redux reducer 함수 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}

//reducer를 기반으로 store 객체 설정
const store = createStore(reducer);

//store 객체 기반으로 render 함수 만들기
const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();
//store 객체에 들어있는 subcribe 함수로 상태 변화될 때마다 추적
store.subscribe(render);

//store action dispatch
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
