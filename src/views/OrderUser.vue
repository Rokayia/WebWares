<template>
  <MyHeader :currentUtilisateur="currentUtilisateur" :currentUtilisateurCommande="currentUtilisateurCommande"
    @deconnexionEventBtn="deconnecterCurrentUser" :is-visible="isHere()" :is-user="isUser()" />

  <hr class="small-hr" />

  <h2>Votre panier</h2>
  <hr class="small-hr" />

  <div class="partie-card-panier" v-if="isHere()" v-cloak>
    <!-- Si le panier n'est pas vide, afficher les produits -->

    <div v-for="(prod, id) in currentUtilisateurCommande.produits" :key="id">
      <div v-for="product in produits" :key="product.id">
        <div v-if="prod.produitId == product.id">
          <div class="card-panier">
            <productCard class="produit-panier" :afficheMoq="false" :image="getImgUrl(product)" :titre="product.titre"
              :prix="product.prix" backgroundColor="white">
              <div>
                <p> X {{ product.moq }}</p>
              </div>
              <div class="compteur">
                <button class="btn-compteur" @click="diminuerQuantite(prod, id), saveQuantite()"
                  v-bind:disabled="prod.quantite === 1">
                  -
                </button>
                <h2 class="quantite-compteur">{{ prod.quantite }}</h2>
                <button class="btn-compteur" @click="ajoutQuantite(id), saveQuantite()"
                  v-bind:disabled="calculStockRestant(product, prod)">+</button>
              </div>
            </productCard>
            <div class="partie-prix">
              <div class="total-prix-produit">
                <span>Total HT : {{ totalProduct(prod, product) }} € </span>

                <span>Total TTC : {{ totalProductTTC(prod, product) }} €</span>
              </div>
              <button class="btn-supprimer" @click="removeProduct(id), saveQuantite()" label="Supprimer du panier">
                Supprimer
              </button>

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
        <button class="validation" @click="toRecap()">Suivant</button>
      </div>
    </div>
  </div>

  <!-- Si le panier est vide, afficher "Panier vide" -->
  <div v-else v-cloak>Panier vide</div>

  <div>
    <MyFooter />
  </div>
</template>

<script>

import MyHeader from "@/components/GeneralHeader.vue";
import MyFooter from "@/components/myFooter.vue";
import productCard from "@/components/ProdCard.vue";

export default {
  data() {
    return {
      isConnected: false,
    };
  },

  components: {
    MyHeader,
    MyFooter,
    productCard,
  },
  methods: {
    isUser() {
      if (this.currentUtilisateur && this.currentUtilisateur.role == 'ADMIN') {
        return false;
      } else {
        return true;
      }
    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes", this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande");
      this.$router.push({
        name: "home",
      });
      location.reload();
    },
    calculStockRestant(item, product) {
      let itemCommande = 0;

      this.commandePrises.forEach(function (commande) {
        commande.produits.forEach(function (prod) {
          if (item.id == prod.produitId) {
            itemCommande += prod.quantite;
          }
        });
      });
      itemCommande += product.quantite;
      let stockrestant = item.stock - itemCommande;
      return stockrestant === 0;
    },
    toRecap() {

      this.$router.push({
        name: "nomRecapClient",
      });
    },
    isHere() {
      if (this.currentUtilisateur && this.currentUtilisateurCommande) {
        return true;
      } else {
        return false;
      }
    },
    ajoutQuantite(id) {

      return this.currentUtilisateurCommande.produits[id].quantite++;
    },
    saveQuantite() {

      this.$store.commit("setCurrentUtilisateurCommande", this.currentUtilisateurCommande);
    },
    diminuerQuantite(prod, id) {
      let prodadd = prod.quantite--;
      this.currentUtilisateurCommande.produits[id].quantite = prodadd;
      this.$store.commit("setCurrentUtilisateurCommande", this.currentUtilisateurCommande);
      return prod.quantite--;
    },
    // Calcule le prix total pour un produit spécifique
    totalProduct(prod, product) {
      return (prod.quantite * product.prix * product.moq).toFixed(2);
    },
    totalProductTTC(prod, product) {
      // Taux de TVA
      const tauxTVA = 20;
      // Calcul du ttc
      const totalTTC = (
        prod.quantite *
        product.prix * product.moq *
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
          this.produits.find((p) => p.id === prod.produitId).prix * this.produits.find((p) => p.id === prod.produitId).moq,
        0
      );

      return total.toFixed(2);
    },
    totalBagTTC() {
      const tauxTVA = 20;
      let total = 0;
      total += this.currentUtilisateurCommande.produits.reduce((subtotal, prod) => {
        const produit = this.produits.find((p) => p.id === prod.produitId);

        const totalProduitHT = prod.quantite * produit.prix * produit.moq;
        const montantTVA = totalProduitHT * (tauxTVA / 100);
        return subtotal + totalProduitHT + montantTVA;
      }, 0);

      this.currentUtilisateurCommande.coutTotal = total;
      this.$store.commit("setCurrentUtilisateurCommande", this.currentUtilisateurCommande);

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
      if (pic.image.length < 21) {
        return require("../assets/" + pic.image);
      } else {
        return pic.image;
      }
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

    produits() {
      return this.$store.getters.getProduits;
    },
    commandePrises() {
      return this.$store.getters.getCommandesPrises;
    },
    // Utilisez cette méthode computed pour accéder à la méthode totalBag depuis le store
  },
  mounted() {
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
  margin: 15px auto;
}

.partie-card-panier {
  background-color: white;
  border: none;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  margin-bottom: 50px;
  max-width: 1200px;
  width: 100%;




}

.card-panier {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;




}


.produit-panier {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;


  gap: 20px;
  height: 400px;
  margin-bottom: 10px;

}

.produit-panier img {
  padding-top: 10px;
  max-width: 200px;
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
  background-color: rgb(250, 24, 24);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 150px;
  height: 30px;
  width: 150px;
  margin-top: 10px;
  cursor: pointer;
}

.btn-supprimer:hover {
  color: white;
}

.total-panier {
  display: flex;
  justify-content: center;
  height: 150px;
  gap: 50px;
  margin-top: 25px;

}

.validation-panier {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.total-prix-produit {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 15px;
}

.prix-validation-panier {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.validation {
  color: white;
  cursor: pointer;
  background-color: #a7c28a;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin: 20px 0px 8px 0px;
}

.validation:hover {
  border: 2px solid black;
  transition: 0.1s;
}

@media(max-width: 971px) {
  .card-panier {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  }

  .total-panier h2 {
    font-size: 1rem;
  }
}

@media(max-width: 971px) {
  .produit-panier {
    font-size: 0.8rem;
  }
}
</style>
