<template>
  <div
    class="col-12 col-md-4 col-lg-3"
    v-for="info in information"
    :key="index"
  >
    <div class="p-2 border rounded shadow">
      <div class="d-flex flex-column px-1">
        <div class="image-game">
          <img :src="info.img" :alt="info.title" class="image-card-game" />
        </div>
        <h4 class="text-center my-2">{{ info.title }}</h4>
        <p class="mb-2" style="text-align: justify">
          {{ info.description }}
        </p>
        <RouterLink :to="info.href" class="btn btn-info px-3 py-2 rounded"
          >more</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
defineProps(['information']);

</script>
<style scoped>
.image-card-game {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>
