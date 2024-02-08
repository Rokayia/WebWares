<template>
  <MyHeader />
  <div class="AfficheListProduits">
    <h1 class="titreGestionProduits">Gestion des produits</h1>
    
    <SearchBar v-on:click="filtered = true" />
    <div class="produitsAdmin">
      <section class="listeProduitsAdmin">
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
            <tr class="prodAdmin" v-for="item in produits" :key="item.id">
              <td>{{ item.id }}</td>
              <td class="image">
                <img class="imageProdAdmin" :src="getImgUrl(item)" />
              </td>
              <td>{{ item.titre }}</td>
              <td>{{ item.prix }}</td>
              <td>{{ item.moq }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.description }}</td>

              <div v-for="categorie in categories" :key="categorie.id" >
                <div v-if="categorie.id == item.categorieId">
                  <div class="categProdAdmin">
                    <td >{{ categorie.name }}</td>
                  </div>
                </div>
              </div>
              <td>
                <btnProduct
                  label="Modifier"
                  backgroundColor="ModifierBackOffice"
                  @click="ModifierProd(item)"
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
      <btnProduct
        label="Ajouter"
        backgroundColor="AjouterPanier"
        @click="ouvrirModal()"
      />
    </div>
    <br />
  </div>

  <!-- Ajouter modal -->

  <Modal :is-visible="showModalFlag" @close="showModalFlag=false">
    <div class="containerModal">
      <form>
        <h2>Ajouter un produit</h2>
        <div class="info_Modal">
          <label for="editName">Titre : </label><br />
          <input type="text" id="editName" v-model="nouveauProd.titre" />
        </div>

        <br />

        <div class="info_Modal">
          <label for="editPrice">Prix produit:</label><br />
          <input type="number" id="editPrice" v-model="nouveauProd.prix" />
        </div>
        <br />

        <div class="info_Modal">
          <label for="editQuantity">Quantité de stock disponible:</label><br />
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProd.stock"
          />
        </div><br />

        <div class=" info_Modal image">
          <label for="editimage">Image du produit:</label><br />
          <input type="file" @change="convertToBase64" accept="image/*" />
          <br />
          <div v-if="showImage">
            <img class="imageModal" :src="base64textString" :alt="imageName" />
          </div>
          <br />
        </div>

        <div class="info_Modal">
          <label for="editMoq">Quantité minimale de commande:</label><br />
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProd.moq"
          />
        </div><br />
<div class="info_Modal">
  
          <label for="editDesc">Description : </label><br />
          <input type="text" id="editDesc" v-model="nouveauProd.description" />
</div>

        <div class="info_Modal">
          <label for="editCategory">Catégorie produit:</label><br />
          <select id="editCategory" v-model="nouveauProd.categorieId">
            <option
              v-for="categorie in categories"
              :key="categorie.id"
              :value="categorie.id"
            >
              {{ categorie.name }}
            </option></select
          >
        </div><br />

        <br /><br />
        <input
          type="button"
          value="Enregistrer"
          class="btn btn-success"
          @click="AjoutProd()"
        />
      </form>
    </div>
  </Modal>

  <!-- Modifier modal -->

  <Modal :is-visible="showModifModalFlag" @close="showModifModalFlag=false">
    <div class="containerModal">
      <form>
        <h2>Modifier {{ nouveauProdModif.titre }}</h2>
        <div class="info_Modal">
          <label for="editName">Titre : </label><br />
          <input type="text" id="editName" v-model="nouveauProdModif.titre" />
        </div>

        <br />
<div class="info_Modal">
  
          <label for="editPrice">Prix produit:</label><br />
          <input type="number" id="editPrice" v-model="nouveauProdModif.prix" />
</div>
        <br />

        <div class="info_Modal">
          <label for="editQuantity">Quantité de stock disponible:</label><br />
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProdModif.stock"
          />
          
        </div>
        <br />

        <div class=" info_Modal imageModalContainer">
          <div>
            <p>Image produit:</p>
             <img class="imageModal" :src="getImgUrl(nouveauProdModif)"  />
          </div>
           <br>
           <div>
             <p>Modifier l'image :</p>  
                       <input type="file" @change="convertToBase64" accept="image/*" />
           </div>
          <br />
      
          <div v-if="showImage">
            <img class="imageModal" :src="base64textString" :alt="imageName" />
          </div>
          <br />
       
        </div>

        <div class="info_Modal">
          <label for="editMoq">Quantité minimale de commande:</label><br />
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProdModif.moq"
          />
        </div>
        <br />

        <div class="info_Modal">
          <label for="editDesc">Description : </label><br />
          <input type="text" id="editDesc" v-model="nouveauProdModif.description" />
        </div>
<div class="info_Modal">
  
          <label for="editCategory">Catégorie produit:</label><br />
          <select id="editCategory" v-model="nouveauProdModif.categorieId">
            <option
              v-for="categorie in categories"
              :key="categorie.id"
              :value="categorie.id"
            >
              {{ categorie.name }}
            </option></select
          >
</div>
        
        <br />

        <br /><br />
        <btnProduct
        label="Modifier"
        backgroundColor="ModifierBackOffice"
       @click="enregistrerModif()"
        />
      </form>
    </div>
  </Modal>

  <myFooter />
</template>

<script>
// import productCard from "@/components/ProdCard.vue";
import Modal from "@/components/AjouterModifierModal.vue";
import btnProduct from "@/components/btnLandingPage.vue";
import SearchBar from "@/components/SearchBar.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      filtered: false,
      showModalFlag: false,
      showModifModalFlag:false,
      nouveauProd: {},
      nouveauProdModif: {},
      imgBase: "",
      base64textString: "",
      imageName: "",
      showImage: false,
      idModified: 0,

    };
  },
  components: {
    MyHeader,
    myFooter,
    SearchBar,
    btnProduct,
    Modal,
  },
  methods: {
    getImgUrl(pic) {

      if (pic.image.length < 21) {
        return require("../assets/" + pic.image);
      } else {
        return pic.image;
      }
    },
    getDetails(prodId) {
      this.$router.push({ name: "detailsproduits", params: { id: prodId } });
    },

    closeModalFlag() {
      this.showModalFlag = false;
    },
    ouvrirModal() {
      this.imgBase = localStorage.getItem(`base64image`);
      this.showModalFlag = true;
    },
    AjoutProd() {
      this.nouveauProd.image = this.base64textString;
      console.log("nouveauProd" + this.nouveauProd + this.nouveauProd.titre);
      this.$store.commit("addProd", this.nouveauProd);
      this.showModalFlag = false;
      location.reload();
    },
    ModifierProd(item){

      this.showModifModalFlag = true;
      this.nouveauProdModif=item;
    },
    enregistrerModif(){
      if(this.base64textString!=''){
        this.nouveauProdModif.image = this.base64textString;
      }
      this.$store.commit("setOneProduct", this.nouveauProdModif);
      this.showModifModalFlag = false;
      location.reload();
 
    },
    convertToBase64(event) {
      const file = event.target.files[0];
      this.imageName = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64textString = reader.result;
        this.showImage = true;
        localStorage.setItem("base64image", this.base64textString);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
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

    commandes() {
      return this.$store.getters.getCommandes;
    },
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadProds");
  },
};
</script>

<style>
.categProdAdmin{
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
}
.prodAdmin{
  background-color: rgba(128, 128, 128, 0.349);
  margin-bottom: 10px;
}
.AfficheListProduits {

width: fit-content;
  margin:0 auto
 
}
.listeProduitsAdmin{
 
}
.imageModalContainer{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.imageProdAdmin {
  max-width: 100px;
}

.imageModal {
  max-width: 100px;
}

.info_Modal{
  margin-bottom:20px;
}

</style>
