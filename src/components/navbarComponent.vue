<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              active-class="custom-active"
              exact
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
              active-class="custom-active"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.custom-active {
  font-weight: bold;
  /* color: #000 !important; */
  /* text-decoration: underline; */
}
</style>
