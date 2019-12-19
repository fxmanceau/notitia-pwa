import Vue from "vue";
import VueRouter from "vue-router";
import Map from "../views/Map/Map.vue";
import Alerts from "../views/Alerts";
import Actu from "../views/Actus";
import Account from "../views/Account";
import Connection from "../views/Connection";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Map,
    meta: {
      title: "Carte",
      description: "D'informations",
      locationButton: true,
      dropdown: {
        options: [
          {
            value: "all",
            text: "Tout"
          },
          {
            value: "food",
            text: "Nourriture"
          },
          {
            value: "host",
            text: "Hébergement"
          },
          {
            value: "health",
            text: "Santé"
          },
          {
            value: "wear",
            text: "Vêtement"
          }
        ]
      }
    }
  },
  {
    path: "/alerts",
    name: "Alertes",
    component: Alerts,
    meta: {
      title: "Alertes",
      description: "Autour de vous",
      locationButton: false,
      dropdown: {
        options: [
          {
            value: "all",
            text: "Tout"
          },
          {
            value: "event",
            text: "Dangers"
          },
          {
            value: "weather",
            text: "Météo"
          }
        ]
      }
    }
  },
  {
    path: "/news",
    name: "News",
    component: Actu,
    meta: {
      title: "Actus",
      description: "Autour de vous",
      locationButton: false,
      dropdown: {
        options: [
          {
            value: "all",
            text: "Tout"
          },
          {
            value: "event",
            text: "Évenements"
          },
          {
            value: "weather",
            text: "Météo"
          }
        ]
      }
    }
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: {
      title: "Compte",
      description: "Général",
      locationButton: false,
      dropdown: false
    }
  },
  {
    path: "/connection",
    redirect: "/connection/0"
  },
  {
    path: "/connection/:id",
    props: route => ({ step: route.params.id }),
    name: "Connection",
    component: Connection
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
