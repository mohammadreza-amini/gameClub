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

const information = ref([
  {
    title: "FIFA23",
    href: "/fifa23",
    img: new URL("@/assets/images/fifia23.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Devil May Cry",
    href: "/dmc",
    img: new URL("@/assets/images/dmc.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Need for Speed",
    href: "/nfs",
    img: new URL("@/assets/images/nffs.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Watch Dogs",
    href: "/wdg",
    img: new URL("@/assets/images/wdg.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
]);
</script>
<style scoped>
.image-card-game {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>
