<template>
  <div class="container" style="padding-top: 120px">
    <div class="spinner-border" role="status" v-if="isLoading">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else>
      <h2 class="mb-2">Blog</h2>
      <hr />
      <main class="mt-2">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-for="post in posts"
            :key="post.id"
          >
            <div class="border shadow-lg rounded p-2 d-flex flex-column">
              <h3>
                {{ post.title }}
              </h3>
              <p>{{ post.body }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const posts = ref([]);
const isLoading = ref(true);

onMounted(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      posts.value = res.data;
      isLoading.value = false;
    })
    .catch((error) => console.log(error));
});
</script>
