<template>
    <div>
        <Nav />
        <div class="quiz-container">
            <div class="notification is-primary">
                <h2 class="title is-4" v-html="category"></h2>
                <p class="subtitle is-6 question-text" v-html="question"></p>
            </div>

            <div class="buttons">
                <button
                    class="button is-success"
                    @click="answerQuestion(true)"
                    :disabled="fetchingQuestion"
                >
                    True
                </button>
                <button
                    class="button is-danger"
                    @click="answerQuestion(false)"
                    :disabled="fetchingQuestion"
                >
                    False
                </button>
            </div>

            <p class="has-text-info">
                {{ store.state.currentQuestion }} of
                {{ store.state.totalQuestions }}
            </p>
        </div>
        <Footer />
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"; // Import Vue Router
import "bulma/css/bulma.min.css";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Nav,
        Footer,
    },
    setup() {
        const store = useStore();
        const router = useRouter(); // Access Vue Router
        const category = ref("");
        const question = ref("");
        const fetchingQuestion = ref(false);

        const checkQuizCompletion = () => {
            if (store.state.currentQuestion > store.state.totalQuestions) {
                const userAnswers = store.state.userAnswers;

                // Use Vue Router to navigate to the results page
                router.push("/result");

                // Or trigger any other action you need
            }
        };

        const fetchQuestion = async () => {
            fetchingQuestion.value = true;

            const maxAttempts = 3;
            let attempts = 0;

            while (attempts < maxAttempts) {
                try {
                    const response = await fetch("/api/questions");
                    const data = await response.json();

                    if (data.results && data.results.length > 0) {
                        // Update the questions in Vuex store
                        store.commit("setQuestions", data.results);
                        // Move to the next question after updating the store
                        store.commit(
                            "setCurrentQuestion",
                            store.state.currentQuestion + 1
                        );
                        break; // Exit the loop if non-empty results are obtained
                    }
                } catch (error) {
                    console.error("Error fetching question:", error);
                }

                attempts++;
            }

            // Reset fetchingQuestion immediately before checking if maxAttempts is reached
            fetchingQuestion.value = false;

            // Discard recent user answers if maximum attempts are reached and results are still empty
            if (attempts === maxAttempts) {
                console.error(
                    "Failed to fetch non-empty results after multiple attempts"
                );
                store.commit("resetRecentUserAnswers"); // Reset recent user answers
                // You can also show an error message or handle the situation in your UI
            }
        };

        const answerQuestion = async (answer) => {
            // Save user's answer and question response in Vuex store
            const currentQuestionIndex = store.state.currentQuestion;
            const currentQuestion = store.state.questions[currentQuestionIndex];
            store.commit("addUserAnswer", {
                answer,
                question: {
                    text: currentQuestion.question,
                    correct_answer: currentQuestion.correct_answer,
                },
            });

            // Reset fetchingQuestion to false before fetching the next question
            fetchingQuestion.value = false;

            // Move to the next question
            await fetchQuestion();

            // Check if the quiz is completed after fetching the next question
            checkQuizCompletion();
        };

        onMounted(() => {
            // Fetch the first question when the component is mounted
            fetchQuestion();
        });

        watch(
            () => store.state.questions,
            () => {
                const currentQuestionIndex = store.state.currentQuestion - 1;
                category.value =
                    store.state.questions[currentQuestionIndex]?.category || "";
                question.value =
                    store.state.questions[currentQuestionIndex]?.question || "";
            },
            { immediate: true }
        );

        return {
            store,
            category,
            question,
            answerQuestion,
            fetchingQuestion,
            checkQuizCompletion,
        };
    },
};
</script>

<style scoped>
.quiz-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

.question-text {
    white-space: pre-line;
}

.buttons {
    margin-top: 10px;
}
</style>
