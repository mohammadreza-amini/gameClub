import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WatchDogsView from "@/views/watchDogsView.vue";
import fifaView from "@/views/fifaView.vue";
import dmcViwe from "@/views/dmcViwe.vue";
import nfsView from "@/views/nfsView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogView from "@/views/blogView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
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
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
  ],
});

export default router;
