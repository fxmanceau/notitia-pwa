<template>
  <div class="global-connection">
    <div class="logo-container">
      <img src="/img/logo-corail.svg" alt="Logo Notitia" class="logo" />
    </div>
    <div class="check-container" v-if="step == 6">
      <img src="/img/check.svg" alt="Logo check" class="check" />
    </div>
    <div class="connection-text-container">
      <h2 class="connection-title" v-if="page[step].title">{{ page[step].title }}</h2>
      <p class="connection-text" v-if="page[step].text">{{ page[step].text }}</p>
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
import SelectMenu from "@/components/Select-Menu";
import InputBloc from "@/components/Input-Bloc";

export default {
  name: "Connection",
  components: {
    ButtonLink,
    SelectMenu,
    InputBloc
  },
  props: ["step"],
  data() {
    return {
      page: [
        {
          title: "Welcome",
          text: "Welcome to Notitia, a charity service for homeless people.",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/1",
              text: "Select the language",
              class: ""
            }
          ]
        },
        {
          components: [
            {
              name: "SelectMenu",
              title: "Sélectionner la langue",
              button: {
                name: "ButtonLink",
                link: "/connection/2",
                text: "Valider",
                class: ""
              },
              options: [
                {
                  name: "English"
                },
                {
                  name: "Français"
                },
                {
                  name: "Español"
                },
                {
                  name: "Italiano"
                },
                {
                  name: "Românesc"
                },
                {
                  name: "العربية"
                }
              ]
            }
          ]
        },
        {
          title: "Bonjour, nous sommes Notitia",
          text:
            "Nous pensons que tout le monde à le droit d’avoir accès à l’information.",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/3",
              text: "Recevoir des infos",
              class: ""
            },
            {
              name: "ButtonLink",
              link: "/connection/7",
              text: "Apporter des infos",
              class: "outline"
            }
          ]
        },
        {
          title: "Commençons",
          text: "Créez un compte afin de bénéficier des services Notitia",
          components: [
            {
              name: "ButtonLink",
              link: "/connection/4",
              text: "Se connecter",
              class: ""
            },
            {
              name: "ButtonLink",
              link: "/connection/5",
              text: "Créer un compte",
              class: "outline"
            }
          ]
        },
        {
          title: "Se connecter",
          components: [
            {
              name: "InputBloc",
              button: {
                name: "ButtonLink",
                link: "/",
                text: "Connexion",
                class: ""
              },
              inputs: [
                {
                  type: "tel",
                  placeholder: "Téléphone"
                },
                {
                  type: "password",
                  placeholder: "Mot de passe"
                }
              ]
            }
          ]
        },
        {
          title: "Inscription",
          text: "Veuillez vous inscrire avec votre numéro de téléphone.",
          components: [
            {
              name: "InputBloc",
              button: {
                name: "ButtonLink",
                link: "/connection/6",
                text: "Créer",
                class: ""
              },
              inputs: [
                {
                  type: "tel",
                  placeholder: "Téléphone"
                },
                {
                  type: "password",
                  placeholder: "Mot de passe"
                },
                {
                  type: "text",
                  placeholder: "Votre ville"
                }
              ]
            }
          ]
        },
        {
          title: "Bienvenue !",
          text: "Vous avez été enregistré.",
          components: [
            {
              name: "ButtonLink",
              link: "/",
              text: "Accueil",
              class: ""
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
              link: "/connection/2",
              text: "Retour",
              class: ""
            }
          ]
        }
      ]
    };
  },
  beforeCreate() {
    if (!this.$route.params) {
      this.$router.push({ path: "/connection/0" }, () => {});
    }
  }
};
</script>

<style lang="scss">
@import "style.scss";
</style>
