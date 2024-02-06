<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    :currentUtilisateurCommande="currentUtilisateurCommande" 
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser"
  />

  <SearchBar v-on:click="filtered = true" />
  <div class="produits">
    <div class="prod" v-for="item in produits" :key="item.id">
      <productCard
        :image="getImgUrl(item)"
        :titre="item.titre"
        :prix="item.prix"
        :moq="item.moq"
        :afficheMoq="true"
        :affichedetails="true"
        @detailsCardEventBtn="getDetails(item.id)"
        backgroundColor="beige"
      >
        <div v-if="currentUtilisateur">
          <btnProduct
            label="Ajouter au panier"
            backgroundColor="AjouterPanier"
            :showButton="AjouterPanier(item)"
            @click="addToPanier(item.id)"
          />

          <btnProduct
            label="Supprimer du panier"
            backgroundColor="SupprimerPanier"
            :showButton="SupprimerPanier(item)"
            @click="removeProduct(item)"
          />
        </div>
      </productCard>
    </div>
  </div>
  <br />
  <myFooter />
</template>

<script>
//import { mapState } from "vuex";
import productCard from "@/components/ProdCard.vue";
import btnProduct from "@/components/btnLandingPage.vue";
import SearchBar from "@/components/SearchBar.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";
export default {
  data() {
    return {
      filtered: false,
      isConnected: false,
      isUser: true,
    };
  },
  components: {
    productCard,
    MyHeader,
    myFooter,
    SearchBar,
    btnProduct,
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic.image);
    },
    getDetails(prodId) {
      this.$router.push({ name: "detailsproduits", params: { id: prodId } });
    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes",this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande");
      this.$router.push({
        name: "listproduits",
      });
      location.reload();
    },
    isHere() {
      if (this.currentUtilisateur) {
        return true;
      } else {
        return false;
      }
    },
    addToPanier(id) {

     let prod = {};
      prod.produitId = id;
      prod.quantite = 1;
      this.currentUtilisateurCommande.produits.push(prod);
      this.$store.commit(
        "setCurrentUtilisateurCommande",
        this.currentUtilisateurCommande
      );
    },
    removeProduct(item) {
      let index = 0;
      let trouve=0;
      this.currentUtilisateurCommande.produits.forEach(function (currentValue) {
        index++;
        if (item.id == currentValue.produitId) {
          trouve = index-1;
        }
      });
      this.currentUtilisateurCommande.produits.splice(trouve, 1);

      this.$store.commit(
        "setCurrentUtilisateurCommande",
        this.currentUtilisateurCommande
      );
    },
    AjouterPanier(item) {
      let bool = true;
      
      this.currentUtilisateurCommande.produits.forEach(function (currentValue) {
        if (item.id == currentValue.produitId) {
          bool = false;
        }
      });
      return bool;
    },
    SupprimerPanier(item) {
      let bool = false;
      this.currentUtilisateurCommande.produits.forEach(function (currentValue) {
        if (item.id == currentValue.produitId) {
          bool = true;
        }
      });
      return bool;
    },
  },
  computed: {
    produits() {
      if (this.filtered) {
        return this.$store.getters.filteredProduits;
      } else {
        return this.$store.getters.getProduits;
      }
    },
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
  },

  mounted() {
    // this.$store.dispatch("loadProds")
      // this.$store.dispatch("loadUtilisateurs"),
      // this.$store.dispatch("oneUtilisateur");

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
.produits {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.prod {
  max-width: 400px;
  background-color: #eadfd8;
}

@media(max-width:584px){
  .searsh input{
    width: 200px;
  }
}
</style>
