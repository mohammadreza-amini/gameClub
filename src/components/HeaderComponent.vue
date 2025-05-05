<template>
  <header
    class="bg-light py-2 position-fixed"
    style="top: 0; right: 0; left: 0"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-md-9">
          <navbarComponent />
        </div>
        <div class="col-6 col-md-3">
          <div class="text-center">
            <img
              src="../assets/images/logo.png"
              alt="site-logo"
              class="img-fluid header-logo"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import navbarComponent from "./navbarComponent.vue";
</script>

<style scoped>
.header-logo {
  width: 60px;
}
</style>
