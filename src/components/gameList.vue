<template>
  <div class="col-12 mb-3 px-2" v-for="(info, index) in information" :key="index">
    <div class="p-3 border rounded shadow d-flex flex-column">
      <div class="d-flex mb-3 ">
        <div style="width: 140px; flex-shrink: 0">
          <img :src="info.img" :alt="info.title" class="img-fluid rounded" />
        </div>

        <div class="ms-3 flex-grow-1">
          <h4>{{ info.title }}</h4>
          <p class="mb-0" style="text-align: justify">
            {{ info.description }}
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <RouterLink :to="info.href" class="btn btn-info" style="width: 95%">
          more
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

defineProps(['information']);
</script>

<!-- <style scoped>
.content{
  justify-content: center;
}

.image-card-game {
  width: 140px;
  /* height: 160px; */
  object-fit: contain;
}
</style> -->
