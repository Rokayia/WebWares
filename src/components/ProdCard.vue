<template>
  <div :class="cardClass">
    <a class="detailsCard" @click="cardGeneralEvent" v-show="affichedetails" href="">Plus de détails</a>
    <div class="image">
      <img :src="image" />
    </div>

    <h2>{{ titre }}</h2>
    <p v-show="affichePrix">
      <strong> {{ prix }} €</strong>
    </p>
    <p v-show="afficheMoq">Quantité minimale de commande : {{ moq }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  
  props: {
    image: String,
    titre: String,
    prix: Number,
    moq: Number,
    afficheMoq:Boolean,
    affichePrix:Boolean,
    affichedetails:Boolean,
    backgroundColor: String,
    afficherParagraphe: {
      type: Boolean,
      default: true,
    },
  }, 
   methods: {
        cardGeneralEvent() {
            // Event personnalisé 
            // Déclarer un alias pour appeler l'evenment sur le composant parent
            this.$emit('detailsCardEventBtn');
        }
    },
  computed: {
    cardClass() {
      return {
        "xxl-card": this.backgroundColor === "white",
        "normal-card": this.backgroundColor === "beige",
      };
    },
  },
};
</script>

<style>
.xxl-card {
  background-color: white;
  border: 1px solid;
  max-width: 600px;
  width: 100%;
  max-height: 70vh;
  
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  

}

.normal-card {
  background-color: #eadfd8;
  border: 1px solid;
  max-width: 400px;
  width: 100%;
  min-width: 270px;
  height: 400px;
  margin-bottom: 10px;
}
.normal-card:hover {
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
}
.normal-card img {
  padding-top: 10px;
  max-width: 400px;
  max-height: 200px;
  height: 100%;
}
.xxl-card img {
  padding-top: 10px;
  max-width: 200px;
  max-height: 30vh;
  height: 100%;
}


.detailsCard{
  color : black;
  text-decoration: underline;
}

</style>
