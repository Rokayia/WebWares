<template>
    <MyHeader/>
  <div class="boxEnGlobal">
    <h1>COMMANDES</h1>
    <div class="bar">
        <p class="etps">Entreprises</p>
        <p class="prd">Produits</p>
        <p class="prx">Prix</p>
        <p class="qt">Quantite</p>
        <p class="ttl">Total</p>
        <p class="lvr">Livraison</p>
    </div>
  
    <div class="cadreTitle" v-for="(commande, id) in commandes" :key="id" v-bind="commande.active" > 
   <div class="User">    
          <div class="Userss" v-for="(use, id) in utilisateurs" :key="id" >
                      <div v-if="commande.id == use.id" >
                    
                        {{ use.raisonSociale }}
           
             
              
            </div>
   </div></div>
 
<div class="titre1">
    
        <div class="tt" v-for="(prod , index) in commande.produits" :key="index">
        
         
        <div v-for="product in produits" :key="product.id">
            

            <div class="tru" v-if="prod.produitId == product.id">
               <div class="titre"> 
            
                 {{ product.titre }}
                </div>
                
                <div class="prix">
                 {{ product.prix }} €
                </div>

                <div class="quantite">
                 {{ prod.quantite }}
             
                </div>

                
                
                
                </div> 
             
         
           </div>
          
        
        </div> 
            
    </div>
    
    
    
    <div class="PrixToto-User">
                Total: {{commande.coutTotal }} €
                </div> 
    
                  <div class="livre" >
            <input type="checkbox"  @click="checkLivraison(commande)" :checked="commande.livraison === 'livré'"/>
        </div>
   
    </div>
    
</div>
  
  <myFooter />
</template>

<script>

import MyHeader from '@/components/GeneralHeader.vue'
import myFooter from '@/components/myFooter.vue'




export default {

    data(){
        return{

           

        }
    },

   
    components: {
        MyHeader,
        myFooter,
        
    },

    methods:{
    checkLivraison(liv){
        liv.active=!liv.active
            if(liv.active){
              liv.livraison= "livré";
           
            }
            else{
              
              liv.livraison="non livré"
             
            }
     
             this.$store.commit('setCommandes',liv)
    },

    
 
    
     
   
},

        computed: {
            
      utilisateurs() {
    return this.$store.getters.getUtilisateurs;
    },
   
     commandes(){
    return this.$store.getters.getCommandes
    },
    produits() {

    return this.$store.getters.getProduits;
}
   
  
  },
  mounted() {

    this.$store.dispatch("loadCommandes");
    




}
  


    

}
</script>

<style>
.titre1{
   width: 100%;
   
}
.bar{
    width: 100%;
    height: 20px;
    display: flex;
    margin-bottom: 15px;
    margin-top: 30px;
    
}

.bar .etps{
    width: 28%;
    
}
.bar .prd{
    width: 27%;
    
}
.bar .prx, .qt{
    width: 14%;
    
}
.bar .ttl{
    width: 14%;

}
.boxEnGlobal{
    min-height: 100vh;
    max-width: 1100px;
    width: 100%;
    gap: 50px;
    margin: 30px auto;
       
}
.cadreTitle{
    margin-top: 15px;
    min-height: 80px;
    display: flex;
    background-color: rgba(128, 128, 128, 0.349);
    color: black;
    font-family: cursive;  
}
.tru{
    min-height: 10vh;  
    display: flex;
}


.User , .titre{
    width: 50%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    
}
.quantite , .PrixToto-User , .prix{
    width: 25%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;

}
.livre{
    width: 10%;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin: 1px;
}


</style>