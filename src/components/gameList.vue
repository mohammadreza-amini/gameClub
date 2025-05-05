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

const information = ref([
  {
    title: "FIFA23",
    href: "/fifa23",
    img: new URL("@/assets/images/fifia23.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Devil May Cry",
    href: "/dmc",
    img: new URL("@/assets/images/dmc.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Need for Speed",
    href: "/nfs",
    img: new URL("@/assets/images/nffs.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Watch Dogs",
    href: "/wdg",
    img: new URL("@/assets/images/wdg.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
]);
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
