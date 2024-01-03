<!-- Home.vue -->
<template>
    <div>
      <Nav />
      <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1">Welcome to the Trivia Challenge!</h1>
            <p class="subtitle is-4">
              You will be presented with 10 true or false questions. Can you
              score 100%?
            </p>
            <router-link to="/quiz" class="button is-primary is-large">
              BEGIN
            </router-link>
          </div>
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
    methods: {
      startQuiz() {
        // Access the store and perform the mutation to reset the quiz state
        this.$store.commit("resetQuizState");
        // Navigate to the Quiz screen
        this.$router.push("/quiz"); // Use the path instead of name
      },
    },
  };
  </script>
