<template>
  <div class="head-home">
    <div class="connect">
      <router-link to="/listProducts" class="nav-link">Connexion</router-link>
      <router-link to="/listProducts" class="nav-link"
        >Inscrivez-vous</router-link
      >
    </div>
    <MyHeader />
  </div>
  <div class="categorie">
    <h1 class="titreCategorie">{{ getNomCategorie() }}</h1>

    <div class="produits">
      <div class="prod" v-for="item in produits" :key="item.id">

    
        <div v-if="item.categorieId==this.categorieId">
            <productCard
              :image="getImgUrl(item)"
              :titre="item.titre"
              :prix="item.prix"
              :moq="item.moq"
              v-on:click="getDetails(item.id)"
              backgroundColor="red"
            >
            </productCard>
        </div>
      </div>
    </div>
  </div>
  <myFooter />
</template>

<script>
import { mapState } from "vuex";
import productCard from "@/components/ProdCard.vue";
import myFooter from "@/components/myFooter.vue";
import MyHeader from "@/components/GeneralHeader.vue";
export default {
  data() {
    return {
      categorieId: 0,
    };
  },
  components: {
    MyHeader,
    myFooter,
    productCard,
  },
  computed: {
    ...mapState(["produits"]),
  },
  methods:{
    getImgUrl(pic) {

return require('../assets/'+pic.image)
},
getNomCategorie(){
    let titre="lal";
    let cat = this.categorieId
    this.produits.forEach(function(currentValue) {
        console.log(cat + " " + currentValue.id)
    if(cat==currentValue.categorieId){
     titre=currentValue.titre;
    }
   
});
return titre;
},
getDetails(prodId){
  this.$router.push({ name: 'detailsproduits', params: {id: prodId} })

}

  },
  mounted() {
    this.categorieId = this.$route.params.id;
    console.log("categorie" + this.categorieId);
  },
};
</script>

<style>
.produits{  

margin:0 auto;
  max-width:1200px;
  width:100%;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  gap:10px;

}
.titreCategorie{
   margin:0 auto;
   margin-bottom: 10px;
}
.categorie{
    margin-bottom: 10px;
}
</style>
