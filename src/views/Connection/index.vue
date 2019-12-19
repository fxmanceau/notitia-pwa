<template>
  <div class="global-connection">
    <div class="logo-container">
      <img src="/img/logo-corail.svg" alt="Logo Notitia" class="logo" />
    </div>
    <div class="connection-text-container">
      <h2 class="connection-title">{{ page[step].title }}</h2>
      <p class="connection-text">{{ page[step].text }}</p>
    </div>
    <div class="connection-content">
      <component
        :is="component.name"
        v-for="component in page[step].components"
        :key="component.id"
        :content="component"
      />
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/Button-Link";

export default {
  name: "Connection",
  components: {
    ButtonLink
  },
  props: ["step"],
  data() {
    return {
      page: [
        {
          title: "Bienvenue",
          text:
            "Placerat justo risus sed odio. Phasellus mattis magna turpis, id malesuada nisl sollicitudin et.",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/1",
              text: "Sélectionner la langue",
              class: ""
            }
          ]
        },
        {
          title: "Bonjour, nous sommes Notitia",
          text:
            "Placerat justo risus sed odio. Phasellus mattis magna turpis, id malesuada nisl sollicitudin et.",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/2",
              text: "Je veux être aidé",
              class: ""
            },
            {
              name: "ButtonLink",
              link: "/connection/3",
              text: "Je veux aider",
              class: "outline"
            }
          ]
        },
        {
          title: "Bonjour, nous sommes Notitia",
          text:
            "Placerat justo risus sed odio. Phasellus mattis magna turpis, id malesuada nisl sollicitudin et.",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/2",
              text: "Je veux être aidé",
              class: ""
            },
            {
              name: "ButtonLink",
              link: "/connection/3",
              text: "Je veux aider",
              class: "outline"
            }
          ]
        },
        {
          title: "Revenez bientôt !",
          text:
            "Désolé, cette fonctionnalité n'est pas encore disponible, mais arrivera bientôt dans une prochaine version !",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/0",
              text: "Retour",
              class: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "style.scss";
</style>
