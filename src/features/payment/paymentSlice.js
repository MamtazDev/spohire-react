import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packageInfo: undefined,
  addPlayerPackage: undefined,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentInfo: (state, action) => {
      state.packageInfo = action.payload;
    },
    setAddPlayerPaymentInfo: (state, action) => {
      state.addPlayerPackage = action.payload;
    },
  },
});

export const { setPaymentInfo, setAddPlayerPaymentInfo } = paymentSlice.actions;
export default paymentSlice.reducer;
