<!-- About.vue -->
<template>
    <div>
      <Nav />
      <section class="section">
        <div class="container">
          <h2 class="title is-2">About Trivia Challenge</h2>
          <p>
            Welcome to Trivia Challenge, a simple quiz application built with Vue.js and Laravel.
          </p>
          <p>
            This app is designed to test your knowledge on various topics through a series of trivia questions.
            Have fun, challenge yourself, and see how well you can score!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  </template>

  <script>
  import "bulma/css/bulma.min.css";
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Nav,
      Footer,
    },
  };
  </script>
