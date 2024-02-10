<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    :currentUtilisateurCommande="currentUtilisateurCommande"
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser()"
  />
  <div class="boxEnGlobal">
    <h1>COMMANDES</h1>

   
  
    <div class="cadreTitle" v-for="(commande, id) in commandePrises" :key="id" v-bind="commande.active" > 
   <div class="User">    
          <div class="Userss" v-for="(use, id) in utilisateurs" :key="id" >
                      <div v-if="commande.userId == use.id" >
                    
                        {{ use.raisonSociale }}
           
             
              
            </div>
   </div></div>
 
<div class="titre1">
    
        <div class="tt" v-for="(prod , index) in commande.produits" :key="index">
        
         
        <div v-for="product in produits" :key="product.id">
            


    <div
      class="cadreTitle"
      v-for="(commande, id) in commandePrises"
      :key="id"
      v-bind="commande.active"
    >
      <div class="User">
        <div class="Userss" v-for="(use, id) in utilisateurs" :key="id">
          <div v-if="commande.userId == use.id">
            {{ use.raisonSociale }}
          </div>
        </div>
      </div>

      <div class="titre1">
        <div class="tt" v-for="(prod, index) in commande.produits" :key="index">
          <div v-for="product in produits" :key="product.id">
            <div class="tru" v-if="prod.produitId == product.id">

               <div class="titre5"> 
            
                 {{ product.titre }}
                </div>
                
                <div class="prix">
                {{ product.prix }} €
                </div>

                <div class="quantite">
                 {{ prod.quantite }} x {{ product.moq }}
             
                </div>

                
                
                
                </div> 
             
         
           </div>
          
        
        </div> 
            
    </div>
    
    
    
    <div class="PrixToto-User">
                Total: {{commande.coutTotal.toFixed(2) }} €
                </div> 
    
                  <div class="livre">
                    <label for="">Livraison:</label>
            <input type="checkbox"  @click="checkLivraison(commande)" :checked="commande.livraison === 'livré'"/>

        </div>
      </div>

      <div class="PrixToto-User">
        Total: {{ commande.coutTotal.toFixed(2) }} €
      </div>

      <div class="livre">
        <input
          type="checkbox"
          @click="checkLivraison(commande)"
          :checked="commande.livraison === 'livré'"
        />
      </div>
    </div>
  </div>

  <myFooter />
</template>

<script>
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {};
  },

  components: {
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
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes",this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande",1);
      this.$router.push({
        name: "mentionslegales"
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
    checkLivraison(liv) {
      liv.active = !liv.active;
      if (liv.active) {
        liv.livraison = "livré";
      } else {
        liv.livraison = "non livré";
      }

      this.$store.commit("setCommandesPrise", liv);
    },
  },

  computed: {
    utilisateurs() {
      return this.$store.getters.getUtilisateurs;
    },
    commandePrises() {
      return this.$store.getters.getCommandesPrises;
    },
    //  commandes(){
    // return this.$store.getters.getCommandes
    // },
    produits() {
      return this.$store.getters.getProduits;
    },
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
  },
  mounted() {
    this.$store.dispatch("loadCommandes");

    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<style>
.titre1 {
  width: 100%;
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
    display: block;
    background-color: #f1f1ef5b;
    color: black;
    font-family: cursive;  
    text-transform: uppercase;
    box-shadow: 0px 0px 10px 0px rgba(10, 125, 129, 0.192);
    

}
.tru {
  min-height: 10vh;
  display: flex;
}


.User {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(237,219,174);
}

 .titre5{
    width: 50%;
    border: 1px solid rgba(10, 125, 129, 0.192);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    
    
    
}
.PrixToto-User{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.quantite , .prix{
    width: 25%;
    border: 1px solid rgba(10, 125, 129, 0.192);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;

}
.livre{
    width: 100%;
    background-color: rgba(10, 125, 129, 0.192);
    display: flex;
    align-items: center;
    justify-content: center; 
}


@media (max-width: 995px) {
   
    .cadreTitle{
        display: block;
        margin: 15px auto;
        width: 80%;
    }
    
}
@media (max-width: 540px){
    .cadreTitle{
        font-size: 0.8rem;
    }

}
</style>
