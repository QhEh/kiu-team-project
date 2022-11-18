import { createSlice } from "@reduxjs/toolkit";

// default state 값 지정
const initialState = {
  state: false,
  top: "100%",
  display: "none",
  opacity: "0",
};

export const RulesUIStateSlice = createSlice({
  // 고유이름
  name: "RulesUIState",
  // 위에서 정한 기본값
  initialState,
  // 상태 변경 함수
  // state <= 현재 상태(기본은 위에서 정한 initialState), action <= useDispatch를 통해 변경된 액션
  reducers: {
    RulesUIStateFunc: (state, action) => {
      state.state = action.payload;
    },
    RulesUITopFunc: (state, action) => {
      state.top = action.payload;
    },
    RulesUIDisplayFunc: (state, action) => {
      state.display = action.payload;
    },
    RulesUIOpacityFunc: (state, action) => {
      state.opacity = action.payload;
    },
  },
});

// 액션 내보내기
export const {
  RulesUIStateFunc,
  RulesUITopFunc,
  RulesUIDisplayFunc,
  RulesUIOpacityFunc,
} = RulesUIStateSlice.actions;

// redux state 내보내기
export default RulesUIStateSlice.reducer;
