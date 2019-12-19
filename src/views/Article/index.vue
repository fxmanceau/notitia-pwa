<template>
  <div>
    <div class="hero">
      <router-link to="/news" class="hero__return">
        <img src="/img/angle-left.svg" alt="Retour" />
        <p>Retour</p>
      </router-link>
      <div class="hero__top">
        <span class="hero__tag">{{articles[article].tag}}</span>
        <p class="hero__date">Publié il y a {{articles[article].time}}</p>
        <img :src="articles[article].thumbnail" alt="Thumbnail" class="hero__thumbnail" />
      </div>
      <h1>{{articles[article].title}}</h1>
      <p class="hero__description">{{articles[article].summary}}</p>
    </div>
    <div class="content">
      <p v-for="paragraph in articles[article].paragraphs" :key="paragraph.id">{{paragraph}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  data() {
    return {
      articles: [
        {
          tag: "Intempérie",
          time: "2h",
          thumbnail: "/temp/actu1.jpg",
          title:
            "Inondations : quatre départements envigilance orange, une troisième victime.",
          summary:
            "Météo France ne maintient plus que quatre départements de la région parisienne seront touchés.",
          paragraphs: [
            "Quatre départements de la régions parisienne sont placés en alerte inondations ce dimanche en fin d'après-midi par Météo France. Le Les Yvelines, Paris, la Seine-Saint-Denis et la Seine et Marne sont en vigilance orange, alors que les intempéries viennent de faire une troisième victime. Un homme porté disparu depuis vendredi soir a été retrouvé mort dans son véhicule ce dimanche.",
            "« Son décès est lié aux intempéries », a indiqué le parquet, précisant qu'il avait été retrouvé dans l'après-midi dans un cours d'eau de l'Adour, à 25 km à l'est de Montreuil"
          ]
        },
        {
          tag: "Évenement",
          time: "1j",
          thumbnail: "/temp/actu2.jpg",
          title:
            "Les Pères Noël verts : Une fête pour les petits et les grands.",
          summary:
            "Les Pères Noël verts permettent aux enfants, aux jeunes, aux familles, aux personnes âgées ou isolées, de fêter Noël et la nouvelle année dans la dignité.",
          paragraphs: [
            "Du 12 au 16 décembre, 2800 enfants et leurs familles accompagnées tout au long de l'année étaient invités à la Hotte du Père Noël vert à l’Espace solidarité Ramey (Paris 18e). Grâce à la mobilisation des #bénévoles et au soutien de nos #donateurs, nous avons pu proposer #jouets neufs pour les petits, pochettes beauté pour les mamans, animations, atelier maquillage, goûter pour tout le monde et chocolats. Le Père Noël rouge était également présent ! "
          ]
        },
        {
          tag: "Évenement",
          time: "3j",
          thumbnail: "/temp/actu3.jpg",
          title:
            "Les Nuits de la solidarité, nouvel outil de lutte contre le sans-abrisme.",
          summary:
            "Pour la deuxième fois, Paris organise, dans la nuit du 7 au 8 février, une Nuit de la Solidarité, qui fait appel à des bénévoles pour recenser les personnes dormant dehors une nuit donnée. Ce dispositif, qui gagne plusieurs villes en France, permet aux autorités d’adapter leur politique vis-à-vis des sans-abri.",
          paragraphs: [
            "La Nuit de la solidarité s’installe peu à peu dans le paysage français. Inspiré de pratiques existantes dans plusieurs grandes villes américaines, comme New York et Washington, et testées en Europe à Athènes et Bruxelles, cet événement, qui consiste à faire appel à des bénévoles pour recenser les personnes dormant dehors une nuit donnée, a fait son apparition en France en 2018, à Paris puis à Metz. Cette année, il a déjà eu lieu à Grenoble le 30 janvier et il est organisé le 7 février à Paris. Il aura également lieu le 27 février à Rennes et le 15 mars à Metz."
          ]
        },
        {
          tag: "Évenement",
          time: "1 semaine",
          thumbnail: "/temp/actu4.jpg",
          title:
            "Comment la technologie peut être une opportunité pour la solidarité ?",
          summary:
            "Aujourd’hui marque la fin de notre première semaine du hackathon HACK4HELP organisé par le campus Hétic. 180 étudiantes et étudiants se sont réunis en 12 équipes afin de créer une solution digitale pour intégrer les personnes sans-abri à la société.",
          paragraphs: [
            "Nouveau Decode de la semaine avec Ryzlane Arsac-Gothière, étudiante en quatrième année au sein d’Hetic, l’école dédiée aux technologies numériques, Frédéric Sitterlé, directeur général d’Hetic, et Grégoire Ducret, directeur délégué à la stratégie et à l’innovation de la Croix-Rouge française et de sa structure, l’accélérateur 21. Avec Richard Menneveux, le fondateur de Decode Media, ils discutent de ce que la technologie peut apporter à la solidarité.",
            "Mais il s’agit d’une discussion bien concrète puisque la Croix-Rouge et l’école Hetic sont réunis autour d’un projet appelé HACK4HELP: pendant deux semaines, 200 étudiants vont travailler ensemble afin de trouver des solutions dédiées aux personnes sans-abris.",
            "« Nous avons tout de suite répondu présent. La technologie aujourd’hui, on ne peut pas l’opposer à la solidarité. Il faut quand même rappeler qu’elle est aussi excluante. La situation à laquelle on fait face, c’est aussi 13 millions de personnes en situation de fracture numérique en France. Mais derrière le numérique, il y a également une opportunité incroyable« , explique Grégoire Ducret."
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
