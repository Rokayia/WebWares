<template>
 
 <MyHeader :currentUtilisateur="currentUtilisateur"
 :currentUtilisateurCommande="currentUtilisateurCommande" 
  @deconnexionEventBtn="deconnecterCurrentUser" 
  :is-visible="isHere()" :is-user="isUser()"/>
  


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
  data() {
    return {
      isConnected: false,
      // isUser: true,
    };
  },
  components: {
    productCard,
    MyHeader,
    myFooter,
  },
  methods: {
    isUser(){
      if(this.currentUtilisateur && this.currentUtilisateur.role=='ADMIN'){
        return false;
      }else{
        return true;
      }
    },
    getImgUrl(pic) {
    
      return require("../assets/" + pic);
    },   
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes",this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande",1);
      this.$router.push({
        name: "detailsproduits"
      });
    location.reload();
   
    },
    isHere(){
      if(this.currentUtilisateur){
        return true;
      }else{
        return false;
      }
    },

  },
  computed: {
    currentProduct() {
      return this.$store.state.currentProduct;
    }, currentUtilisateur() {
     
      return this.$store.getters.getCurrentUtilisateur;
    },
  },
  mounted() {
    let prodId = this.$route.params.id;
    this.$store.dispatch("oneProd", prodId);
    // this.$store.dispatch("loadUtilisateurs"),
    // this.$store.dispatch("oneUtilisateur")
  },
};
</script>

<style>
.details {
  margin: 55px auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
 
}
.description {
  color: rgb(125,145,103);
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 10px;
}
.titreDetails{
  
  text-transform: uppercase;
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .titreDetails h1{
    font-size: 1.5rem;
  }
}

</style>
