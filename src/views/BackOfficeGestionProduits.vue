<template>
  <MyHeader />
  <div class="titleAfficheListProduits">
    <h1 class="titreGestionProduits">Gestion des produits</h1>

    <SearchBar v-on:click="filtered = true" />
    <div class="produits">
      <section class="listeProduits Admin">
        <strong>Panier</strong>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Titre</th>
              <th>Prix</th>
              <th>Quantité minimale de commande</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Categorie</th>
            <th></th>
            </tr>
          </thead>

          <tbody>
            <!-- Afficher tous les produits actifs -->
            <tr class="prod" v-for="item in produits" :key="item.id">
              <td>{{ item.id }}</td>
              <td class="image">
                <img class="imageProdAdmin" :src="getImgUrl(item)" />
              </td>
              <td>{{ item.titre }}</td>
              <td>{{ item.prix }}</td>
              <td>{{ item.moq }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.description }}</td>

              <div v-for="categorie in categories" :key="categorie.id">
                <div v-if="categorie.id == item.categorieId">
                  <td>{{ categorie.name }}</td>
                </div>
              </div>
              <td>  
                <btnProduct
              label="Modifier"
              backgroundColor="AjouterPanier"
             
            />

            <btnProduct
              label="Supprimer" 
              backgroundColor="SupprimerPanier" 
              @click="remove(item.id)"
           
            /></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- <productCard
          :image="getImgUrl(item)"
          :titre="item.titre"
          :prix="item.prix"
          :moq="item.moq"
          :afficheMoq="true"
          :affichedetails="false"
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
          </div> -->
      <!-- </productCard> -->
    </div>
    <br />
  </div>
  <myFooter />
</template>

<script>
// import productCard from "@/components/ProdCard.vue";
import btnProduct from "@/components/btnLandingPage.vue";
import SearchBar from "@/components/SearchBar.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      filtered: false,
    
    };
  },
  components: {
    MyHeader,
    myFooter,
    SearchBar,
    btnProduct
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic.image);
    },
    getDetails(prodId) {
      this.$router.push({ name: "detailsproduits", params: { id: prodId } });
    },
    // Supprime un produit du panier
    remove(prodId){
            this.$store.commit('deleteProd',prodId)
          }
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
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  mounted() {
    this.$store.dispatch("loadCategories")
    this.$store.dispatch("loadProds")
  },
};
</script>

<style>
.titleAfficheListProduits {
  width: 100%;
  min-height: 100vh;
}
.imageProdAdmin {
  max-width: 100px;
}
</style>
