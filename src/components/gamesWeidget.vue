<template>
  <div class="container py-2 my-3">
    <section class="game-wiedget">
      <h3>
        Games
        <a
          href="#"
          class="btn btn-outline-primary rounded-pill px-4 py-2 shadow-sm"
          @click.prevent="changeStyle = !changeStyle"
        >
          {{ changeStyle ? "List Show" : "Card Show" }}
        </a>
      </h3>
      <hr />
      <div class="row justify-content-between">
        <GameCard :information="information1" v-if="changeStyle" />
        <gameList :information="information2" v-else />
      </div>
    </section>
  </div>
</template>

<script setup>
import GameCard from "./gameCard.vue";
import gameList from "./gameList.vue";
import { ref } from "vue";
const changeStyle = ref(true);
const information1 = ref([
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
const information2 = ref([
  {
    title: "FIFA23",
    href: "/fifa23",
    img: new URL("@/assets/images/fifia23.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Devil May Cry",
    href: "/dmc",
    img: new URL("@/assets/images/dmc.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Need for Speed",
    href: "/nfs",
    img: new URL("@/assets/images/nffs.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
  {
    title: "Watch Dogs",
    href: "/wdg",
    img: new URL("@/assets/images/wdg.jpg", import.meta.url).href,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, non?",
  },
]);
</script>
