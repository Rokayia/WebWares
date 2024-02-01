<template>
    
    <div class="head-home">
    <div class="connect">
     <router-link to="/listProducts" class="nav-link">Connexion</router-link>
      <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
      </div>
    <MyHeader />
  </div>
  
  <div class="details">
<div class="titreDetails">
    
  <h1>
  Informations sur {{currentProduct.titre}}
  </h1>
  <br>
</div>
    <!-- <div v-else> -->
      <div
      class=" prod"
      v-for="(item,index) in this.currentProduct.id"
      :key="item.id"
    >
<div v-if="index===this.currentProduct.id-1">
 <productCard
      :image="getImgUrl(currentProduct.image)"
        :titre="currentProduct.titre"
        :prix="currentProduct.prix"
        :moq="currentProduct.moq"
        backgroundColor="white"
      >
        <p class="description">{{ currentProduct.description }}</p>

      </productCard>
    </div>
    
      </div>
        </div>
        <myFooter/>
</template>

<script>
import productCard from "@/components/ProdCard.vue";
import myFooter from '@/components/myFooter.vue'
import MyHeader from '@/components/GeneralHeader.vue'
export default {
  components: {
    productCard,
    MyHeader,
    myFooter,
  },
  methods: {
    getImgUrl(pic) {
    
      return require("../assets/" + pic);
    }
  },
  computed: {
    currentProduct() {
      return this.$store.state.currentProduct;
    },
  },
  mounted() {
    let prodId = this.$route.params.id;
    this.$store.dispatch("oneProd", prodId);
  },
};
</script>

<style>
.details {
  margin: 10vh auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.description {
  font-size: larger;
  color: rgb(8, 131, 8);
  font-weight: bold;

  padding-bottom: 10px;
}

</style>
