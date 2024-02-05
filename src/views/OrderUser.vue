<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    :currentUtilisateurCommande="currentUtilisateurCommande" 
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser"
  />

  <hr class="small-hr" />

  <h2>Votre panier</h2>
  <hr class="small-hr" />

  <div class="partie-card-panier" v-if="isHere()">
    <!-- Si le panier n'est pas vide, afficher les produits -->
  
      <div v-for="(prod, id) in currentUtilisateurCommande.produits" :key="id">
        <div v-for="product in produits" :key="product.id">
          <div v-if="prod.produitId == product.id">
            <div class="card-panier">
              <productCard
                class="produit-panier"
                :afficheMoq="false"
                :image="getImgUrl(product)"
                :titre="product.titre"
                :prix="product.prix"
                backgroundColor="white"
              >
              <div><p> X {{ product.moq }}</p></div>
                <div class="compteur">
                  <button
                    class="btn-compteur"
                    @click="diminuerQuantite(prod,id),saveQuantite()"
                    v-bind:disabled="prod.quantite === 1"
                  >
                    -
                  </button>
                  <h2 class="quantite-compteur">{{ prod.quantite }}</h2>
                  <button class="btn-compteur"  @click="ajoutQuantite(id),saveQuantite() ">+</button>
                </div>
              </productCard>
              <div class="partie-prix">
                <button
                  class="btn-supprimer"
                  @click="removeProduct(id),saveQuantite()"
                  label="Supprimer du panier"
                >
                  Supprimer
                </button>
                <div class="total-prix-produit">
                  <span>Total HT : {{ totalProduct(prod, product) }} € </span>
                  <span>Total TTC : {{ totalProductTTC(prod, product) }} €</span>
                </div>
              </div>
            </div>
            <hr class="small-hr" />
          </div>
        </div>
      </div>
   

    <div class="total-panier">
      <h2>Total Panier</h2>
      <div class="validation-panier">
        <div class="prix-validation-panier">
          <span>Total HT : {{ totalBag() }} €</span>
          <span>Total TTC : {{ totalBagTTC() }} €</span>
        </div>
        <button class="validation">Valider</button>
      </div>
    </div>
  </div>

  <!-- Si le panier est vide, afficher "Panier vide" -->
  <div v-else>Panier vide</div>

  <MyFooter />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MyHeader from "@/components/GeneralHeader.vue";
import MyFooter from "@/components/myFooter.vue";
import productCard from "@/components/ProdCard.vue";

export default {
  data() {
    return {
      isConnected: false,
      isUser: true,
    };
  },

  components: {
    MyHeader,
    MyFooter,
    productCard,
  },
  methods: {
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes",this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande");
      this.$router.push({
        name: "home",
      });
      location.reload();
    },
    isHere() {
      if (this.currentUtilisateur && this.currentUtilisateurCommande) {
        return true;
      } else {
        return false;
      }
    },
    ajoutQuantite(id){
    //   console.log("prod;QUANTITE"+prod.quantite )
    // let prodadd =prod.quantite+1;
    // console.log("prod;QUANTITE"+prodadd )
  
    //   this.currentUtilisateurCommande.produits[id].quantite= prodadd;
    //   this.$store.commit("setCurrentUtilisateurCommande",this.currentUtilisateurCommande);
      return  this.currentUtilisateurCommande.produits[id].quantite++;
    },
    saveQuantite(){
    
      this.$store.commit("setCurrentUtilisateurCommande",this.currentUtilisateurCommande);
    },
    diminuerQuantite(prod,id){
    let prodadd =prod.quantite--;
      this.currentUtilisateurCommande.produits[id].quantite= prodadd;
      this.$store.commit("setCurrentUtilisateurCommande",this.currentUtilisateurCommande);
      return prod.quantite--;
    },
    // Calcule le prix total pour un produit spécifique
    totalProduct(prod, product) {
      return (prod.quantite * product.prix*product.moq).toFixed(2);
    },
    totalProductTTC(prod, product) {
      // Taux de TVA
      const tauxTVA = 20;
      // Calcul du ttc
      const totalTTC = (
        prod.quantite *
        product.prix *product.moq*
        (1 + tauxTVA / 100)
      ).toFixed(2);

      return totalTTC;
    },
    // Calcule le grand total pour tous les produits dans le panier
    totalBag() {
      let total = 0;
      
        total += this.currentUtilisateurCommande.produits.reduce(
          (subtotal, prod) =>
            subtotal +
            prod.quantite *
              this.produits.find((p) => p.id === prod.produitId).prix*this.produits.find((p) => p.id === prod.produitId).moq,
          0
        );
     
      return total.toFixed(2);
    },
    totalBagTTC() {
      const tauxTVA = 20;

      let total = 0;
   
        total += this.currentUtilisateurCommande.produits.reduce((subtotal, prod) => {
          const produit = this.produits.find((p) => p.id === prod.produitId);

          const totalProduitHT = prod.quantite * produit.prix*produit.moq;
          const montantTVA = totalProduitHT * (tauxTVA / 100);
          return subtotal + totalProduitHT + montantTVA;
        }, 0);

        this.currentUtilisateurCommande.coutTotal= total;
      this.$store.commit("setCurrentUtilisateurCommande",this.currentUtilisateurCommande);

      return total.toFixed(2);
    },

    isProductMatched(productId) {
      return this.currentProduct.id === productId;
    },
    // Obtient le titre d'un produit en fonction de son ID
    getProductTitle(produitId) {
      const prod = this.produits.find((prod) => prod.id === produitId);
      return prod ? prod.titre : "Produit introuvable";
    },
    getImgUrl(pic) {
      return require("../assets/" + pic.image);
    },
    getcommandes() {
      console.log("commandes" + this.commandes[0].produits);
    },
    // Supprime un produit du panier
    removeProduct(id) {
           this.currentUtilisateurCommande.produits.splice(id, 1)
    
    },

  },
  computed: {
    // Utilisation de mapState pour utiliser commandes depuis le store Vuex
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },

    ...mapState(["commandes", "produits"]),
    ...mapGetters(["filteredProduits"]),
    // Utilisez cette méthode computed pour accéder à la méthode totalBag depuis le store
  },
  mounted() {
    // this.$store.dispatch("loadProds");
    // this.$store.dispatch("loadCommandes");
    // this.$store.dispatch("oneUtilisateur");
 
    if (localStorage.getItem('reloaded')) {
          localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  },
};
</script>

<style>
.small-hr {
  width: 50%;
  margin: 0 auto;
}

.partie-card-panier {
  background-color: white;
  border: none;
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  align-content: space-around;
  margin-bottom: 10px;
}

.card-panier {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.produit-panier {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  background-color: white;
  border: none;
  width: 50%;
  flex: 1;

  height: 400px;
  margin-bottom: 10px;
}
.produit-panier img {
  padding-top: 10px;
  max-width: 300px;
  max-height: 150px;
  height: 100%;
}

.compteur {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  overflow: hidden;
  width: 80px;
}
.btn-compteur {
  background-color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}

.btn-compteur:hover {
  color: #a7c28a;
}
.btn-compteur:disabled {
  cursor: not-allowed;
}

.quantite-compteur {
  margin: 0 10px;
  background-color: rgb(255, 255, 255);
}
.partie-prix {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-supprimer {
  border: none;
  cursor: pointer;
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
}

.btn-supprimer:hover {
  color: #5b7540;
}

.total-panier {
  display: flex;
  justify-content: space-around;
}
.validation-panier {
  display: block;
}
.total-prix-produit {
  display: flex;
  justify-content: space-around;
}
.validation {
  color: white;
  cursor: pointer;
  background-color: #a7c28a;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
}
.validation:hover {
  background-color: black;
}
</style>
