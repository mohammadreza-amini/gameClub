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
        <GameCard v-if="changeStyle" />
        <gameList v-else />
      </div>
    </section>
  </div>
</template>

<script setup>
import GameCard from "./gameCard.vue";
import gameList from "./gameList.vue";
import { ref } from "vue";
const changeStyle = ref(true);
</script>
