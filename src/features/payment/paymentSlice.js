import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packageInfo: undefined,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentInfo: (state, action) => {
      state.packageInfo = action.payload;
    },
  },
});

export const { setPaymentInfo } = paymentSlice.actions;
export default paymentSlice.reducer;
