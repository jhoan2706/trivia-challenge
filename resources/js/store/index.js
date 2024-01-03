import { createStore } from "vuex";

export default createStore({
    state: {
        currentQuestion: 0,
        totalQuestions: 3,
        questions: [],
        userAnswers: [], // Store user's answers to calculate results
        recentUserAnswers: [], // Store recent user's answers that can be discarded
    },
    mutations: {
        setCurrentQuestion(state, questionNumber) {
            state.currentQuestion = questionNumber;
        },
        setQuestions(state, questions) {
            state.questions = questions;
        },
        addUserAnswer(state, answer) {
            // Extract correct answer as a boolean
            const correctAnswer =
                answer.question.correct_answer.toLowerCase() === "true";

            // Calculate isCorrect property
            const isCorrect = answer.answer === correctAnswer;

            // Create a new structured answer object
            const structuredAnswer = {
                answer: answer.answer,
                question: {
                    text: answer.question.text, // Use the correct property for question text
                    correct_answer: answer.question.correct_answer,
                },
                isCorrect: isCorrect,
            };

            // Push the structured answer to the userAnswers array
            state.userAnswers.push(structuredAnswer);
            state.recentUserAnswers.push(structuredAnswer); // Save recent user answers
            console.log("userAnswers IN STORE:", state.userAnswers);
        },
        resetQuizState(state) {
            state.currentQuestion = 0;
            state.userAnswers = [];
            state.recentUserAnswers = [];
        },
        resetRecentUserAnswers(state) {
            state.recentUserAnswers = [];
            // Remove the last element from userAnswers
            if (state.userAnswers.length > 0) {
                state.userAnswers.pop();
            }
        },
    },
});
