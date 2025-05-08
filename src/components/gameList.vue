<template>
  <div
    class="col-12 mb-3 px-2"
    v-for="(info, index) in information"
    :key="index"
  >
    <div class="p-3 border rounded shadow">
      <div class="row">
        <div class="col-12 col-md-5 col-lg-2">
          <div class="w-100">
            <img :src="info.img" :alt="info.title" class="img-fluid rounded" />
          </div>
        </div>
        <div class="col-12 col-md-7 col-lg-10">
          <div
            class="d-flex flex-column align-items-start justify-content-between h-100"
          >
            <h4>{{ info.title }}</h4>
            <p class="my-1" style="text-align: justify">
              {{ info.description }}
            </p>
            <RouterLink
              :to="info.href"
              class="btn btn-secondary text-white w-50 mx-auto"
            >
              more
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

defineProps(["information"]);
</script>
