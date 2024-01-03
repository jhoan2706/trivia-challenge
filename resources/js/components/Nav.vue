<!-- Nav.vue -->
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="title is-3 has-text-weight-bold">Trivia Challenge</span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="/" class="button is-primary">
                <strong>Home</strong>
              </a>
              <router-link to="/about" class="button is-light">
                About
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>

  <script>
  export default {};
  </script>

  <style scoped>
  /* Add any custom styles for your navigation bar here */
  .navbar {
    background-color: #3273dc; /* Customize the background color */
  }

  .navbar-item {
    padding: 1rem;
  }

  .title {
    color: white; /* Customize the text color */
  }
  </style>
