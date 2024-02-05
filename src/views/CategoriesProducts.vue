<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser"
  />

  <div class="categorie">
    <h1 class="titreCategorie">{{ getNomCategorie() }}</h1>

    <div class="produits">
      <div class="prod" v-for="item in produits" :key="item.id">
        <div v-if="item.categorieId == this.categorieId">
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
    </div>
  </div>
  <myFooter />
</template>

<script>
import { mapState } from "vuex";
import btnProduct from "@/components/btnLandingPage.vue";
import productCard from "@/components/ProdCard.vue";
import myFooter from "@/components/myFooter.vue";
import MyHeader from "@/components/GeneralHeader.vue";
export default {
  data() {
    return {
      categorieId: 0,
      isConnected: false,
      isUser: true,
    };
  },
  components: {
    MyHeader,
    myFooter,
    productCard,
    btnProduct,
  },
  computed: {
    ...mapState(["produits", "categories"]),
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic.image);
    },
    getNomCategorie() {
      let titre = "lal";
      let cat = this.categorieId;
      this.categories.forEach(function (currentValue) {
        if (cat == currentValue.id) {
          titre = currentValue.name;
        }
      });
      return titre;
    },
    getDetails(prodId) {
      this.$router.push({ name: "detailsproduits", params: { id: prodId } });
    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes", this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande", 1);
      this.$router.push({
        name: "categorieproduits",
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
      let trouve = 0;
      this.currentUtilisateurCommande.produits.forEach(function (currentValue) {
        index++;
        if (item.id == currentValue.produitId) {
          trouve = index - 1;
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
  mounted() {
    this.categorieId = this.$route.params.id;
    console.log("categorie" + this.categorieId);
    this.$store.dispatch("loadUtilisateurs"),
      this.$store.dispatch("oneUtilisateur");
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
.titreCategorie {
  margin: 0 auto;
  margin-bottom: 10px;
}
.categorie {
  margin-bottom: 10px;
}
</style>
