<template >


  
  <div class="head-home">
    <div class="connect">
     <router-link to="/listProducts" class="nav-link">Connexion</router-link>
      <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
      </div>
    <MyHeader />
  </div>

<SearchBar/>
  <div class=" produits">
    <div
      class=" prod"
      v-for="item in produits"
      :key="item.id"
    
    >
    <productCard :image="getImgUrl(item)" :titre="item.titre" :prix="item.prix" :moq="item.moq" v-on:click="getDetails(item.id)" backgroundColor="red">
     </productCard>
     
    </div>
  </div>
  <br>
  <myFooter/>


</template>

<script>
//import { mapState } from "vuex";
import productCard from "@/components/ProdCard.vue";
import SearchBar from '@/components/SearchBar.vue'
import MyHeader from '@/components/GeneralHeader.vue'
import myFooter from '@/components/myFooter.vue'
export default {

    components: {
        productCard,
        MyHeader,
        myFooter,
        SearchBar
  },
    methods: {

getImgUrl(pic) {

    return require('../assets/'+pic.image)
},
getDetails(prodId){
  this.$router.push({ name: 'detailsproduits', params: {id: prodId} })

}
    },
computed:{
  
    produits(){
            return this.$store.getters.filteredProduits
        }
       
},
    mounted(){
    
        this.$store.dispatch('loadProds')
    }
}
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

.prod{
  max-width: 400px;
  background-color: #EADFD8;

}




</style>