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
              to="/blog"
              class="nav-link"
              active-class="custom-active"
            >
              blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link"
              active-class="custom-active"
            >
              Contact
            </router-link>
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
}
</style>
