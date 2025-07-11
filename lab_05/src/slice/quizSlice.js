import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      selectedAnswer: null,
    },
    {
      id: 2,
      text: "What is the capital of Germany?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswer: "Berlin",
      selectedAnswer: null,
    },
    {
      id: 3,
      text: "What is the capital of Italia?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswer: "Rome",
      selectedAnswer: null,
    }
  ],
  submitted: false,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        selectAnswer: (state, action) => {
            const {questionId, answer} = action.payload
            const question = state.questions.find(q => q.id === questionId)
            if(question) {
                question.selectedAnswer = answer
            }
        },
        submitQuiz: (state) => {
            state.submitted = true
        },
        resetQuiz: (state) => {
            state.questions.forEach(q => q.selectedAnswer === null)
            state.submitted = false
        }
    }
})

export const { selectAnswer, submitQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
