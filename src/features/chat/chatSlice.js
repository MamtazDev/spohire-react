import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  conversationId: null,
  selectedMsgUser: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setConversationId: (state, action) => {
      state.conversationId = action.payload;
    },
    setSelectedMessageUser: (state, action) => {
      state.selectedMsgUser = action.payload;
    },
  },
});

export const { setMessages, setConversationId, setSelectedMessageUser } =
  chatSlice.actions;
export default chatSlice.reducer;
