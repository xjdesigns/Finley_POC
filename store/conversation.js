import {createSlice} from '@reduxjs/toolkit';

const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    questions: [],
    responses: [],
  },
  reducers: {
    setConversation: (state, action) => {
      const {questions, responses} = action.payload;
      const newQuestions = [...state.questions, questions];
      const newResponses = [...state.responses, responses];
      return {
        ...state,
        questions: newQuestions,
        responses: newResponses,
      };
    },
    setQuestion: (state, action) => {
      const {question} = action.payload;
      const questions = [...state.questions, question];
      return {
        ...state,
        questions,
      };
    },
    setResponse: (state, action) => {
      const {response} = action.payload;
      const responses = [...state.responses, response];
      return {
        ...state,
        responses,
      };
    },
    resetConversation: state => {
      return {
        ...state,
        questions: [],
        response: [],
      };
    },
  },
});

export const {setQuestion, setResponse, setConversation, resetConversation} =
  conversationSlice.actions;
export default conversationSlice.reducer;
