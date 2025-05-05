import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import WatchDogsView from "@/views/watchDogsView.vue";
import fifaView from "@/views/fifaView.vue";
import dmcViwe from "@/views/dmcViwe.vue";
import nfsView from "@/views/nfsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/wdg",
      name: "watchdogs",
      component: WatchDogsView,
    },
    {
      path: "/fifa23",
      name: "FIFA23",
      component: fifaView,
    },
    {
      path: "/dmc",
      name: "Devil May Cry",
      component: dmcViwe,
    },
    {
      path: "/nfs",
      name: "Need for Speed",
      component: nfsView,
    },
  ],
});

export default router;
