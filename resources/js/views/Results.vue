<template>
    <div>
      <Nav />
      <section class="section">
        <div class="container">
          <h2 class="title is-2">Your Score</h2>
          <h3 class="subtitle is-3">You scored {{ correctAnswers }}/{{ $store.state.totalQuestions }}</h3>

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

          <button @click="playAgain" class="button is-primary mt-4">PLAY AGAIN</button>
        </div>
      </section>
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
