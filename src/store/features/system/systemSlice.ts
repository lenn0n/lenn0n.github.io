import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import JavascriptIcon from "@assets/images/icons/js.png"
// Define a type for the slice state
interface SystemState {
  selectedPL: PLTypes
}

type PLTypes = {
  icon?: string,
  name?: string,
  desc?: string,
  exp?: string,
  isUser?: boolean
}

// Define the initial state using that type
const initialState: SystemState = {
  selectedPL: {
    name: "JavaScript",
    icon: JavascriptIcon,
    desc: "One of my favorite programming language that I am using for the past years.",
    exp: "9/10",
    isUser: true
  }
}

export const systemSlice = createSlice({
  name: "system",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectedPL: (state, action: PayloadAction<PLTypes>) => {
      state.selectedPL = action.payload;
    },
  },
});

export const {
  setSelectedPL
} = systemSlice.actions

export default systemSlice.reducer;
