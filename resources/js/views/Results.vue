<template>
    <div>
      <Nav />
      <div class="container result-container">
        <h2 class="title is-2">Your Score</h2>
        <h3 class="subtitle is-3">You scored {{ correctAnswers }}/{{ $store.state.totalQuestions }}</h3>

        <div class="scrollable-container">
          <ul class="mt-4">
            <li v-for="(result, index) in $store.state.userAnswers" :key="index" class="mb-2">
              <p v-html="result.question.text"></p> -
              <strong
                :class="{
                  'has-text-success': result.isCorrect,
                  'has-text-danger': !result.isCorrect
                }"
              >
                {{ result.isCorrect ? 'Correct' : 'Incorrect' }}
              </strong>
            </li>
          </ul>
        </div>

        <button @click="playAgain" class="button is-primary mt-4">PLAY AGAIN</button>
      </div>
      <Footer />
    </div>
  </template>

  <script>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Nav,
      Footer,
    },
    mounted() {
      //console.log('userAnswers in Results.vue', this.$store.state.userAnswers);
    },
    computed: {
      correctAnswers() {
        return this.$store.state.userAnswers.filter((result) => result.isCorrect).length;
      },
    },
    methods: {
      playAgain() {
        // Reset quiz state in Vuex store and navigate to the Home screen
        this.$store.commit('resetQuizState');
        this.$router.push({ name: 'home' });
      },
    },
  };
  </script>

<style scoped>
.result-container {
    max-width: 600px; /* You can adjust this value as needed */
    margin: 0 auto;
    padding: 20px;
}
.scrollable-container {
  max-height: 450px; /* Ajusta esta altura según sea necesario */
  overflow-y: auto;
}
</style>
