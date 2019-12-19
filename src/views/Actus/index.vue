<template>
  <div class="global-news">
    <div
      class="actus"
      v-for="(actu, index) in news"
      :key="actu.id"
      :class="{'is-active': dropdownValue == actu.filter || dropdownValue == 'all'}"
    >
      <router-link
        :to="`/article/${index}`"
        class="actus__actu"
        v-if="dropdownValue == actu.filter || dropdownValue == 'all'"
      >
        <img :src="actu.image" alt="actu" />
        <div class="actus__content">
          <div class="actus__tag">{{actu.tag}}</div>
          <h1>{{actu.title}}</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        {
          tag: "Intempérie",
          filter: "weather",
          title:
            "Inondations : quatre départements en vigilance orange, une troisième victime.",
          image: "/temp/actu1.jpg"
        },
        {
          tag: "Évenement",
          filter: "event",
          title:
            "Les Pères Noël verts : Une fête pour les petits et les grands.",
          image: "/temp/actu2.jpg"
        },
        {
          tag: "Solidarité",
          filter: "solidarity",
          title:
            "Les Nuits de la solidarité:  Nouvel outil de lutte contre le sans-abrisme",
          image: "/temp/actu3.jpg"
        },
        {
          tag: "Évenement",
          filter: "event",
          title:
            "Comment la technologie peut être une opportunité pour la solidarité ? #Hack4Help",
          image: "/temp/actu4.jpg"
        }
      ]
    };
  },
  computed: {
    dropdownValue() {
      return this.$store.state.category;
    }
  }
};
</script>

<style lang="scss">
@import "style.scss";
</style>
