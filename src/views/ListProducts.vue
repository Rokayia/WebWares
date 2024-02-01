<template >


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

</template>

<script>
//import { mapState } from "vuex";
import productCard from "@/components/ProdCard.vue";
import SearchBar from '@/components/SearchBar.vue'
export default {

    components: {
        productCard,
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