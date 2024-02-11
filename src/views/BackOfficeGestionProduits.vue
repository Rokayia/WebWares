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
              <th>Qty min de commande</th>
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
              <td data-label="Titre: ">{{ item.titre }}</td>
              <td data-label="Prix: ">{{ item.prix }}</td>
              <td data-label="Qty min de commande : ">{{ item.moq }} x </td>
              <td data-label="Stock: ">{{ item.stock }}</td>
              <td data-label="Description: ">{{ item.description }}</td>

              <div v-for="categorie in categories" :key="categorie.id" >
                <div v-if="categorie.id == item.categorieId">
                  <div class="categProdAdmin">
                    <td  data-label="Categorie: ">{{ categorie.name }}</td>
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
              backgroundColor="SupprimerBackOffice" 
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
      <form class="ajoutform">
        <h2>Ajouter un produit</h2>
        <div class="info_Modal">
          <label for="editName">Titre : </label>
          <input type="text" id="editName" v-model="nouveauProd.titre" />
        </div>

        

        <div class="info_Modal">
          <label for="editPrice">Prix produit:</label>
          <input type="number" id="editPrice" v-model="nouveauProd.prix" />
        </div>
      

        <div class="info_Modal">
          <label for="editQuantity">Quantité de stock disponible:</label>
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProd.stock"
          />
        </div>

        <div class=" info_Modal image">
          <label for="editimage">Image du produit:</label>
          <input type="file" @change="convertToBase64" accept="image/*" />
          
          <div v-if="showImage">
            <img class="imageModal" :src="base64textString" :alt="imageName" />
          </div>
          
        </div>

        <div class="info_Modal">
          <label for="editMoq">Quantité minimale de commande:</label>
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProd.moq"
          />
        </div>
<div class="info_Modal">
  
          <label for="editDesc">Description : </label>
          <input type="text" id="editDesc" v-model="nouveauProd.description" />
</div>

        <div class="info_Modal">
          <label for="editCategory">Catégorie produit:</label>
          <select id="editCategory" v-model="nouveauProd.categorieId">
            <option
              v-for="categorie in categories"
              :key="categorie.id"
              :value="categorie.id"
            >
              {{ categorie.name }}
            </option></select
          >
        </div>

        
        <btnProduct
        label="Ajouter"
        backgroundColor="AjouterPanier"
          @click="AjoutProd()"
        />
      </form>
    </div>
  </Modal>

  <!-- Modifier modal -->

  <Modal :is-visible="showModifModalFlag" @close="showModifModalFlag=false">
    <div class="containerModal">
      <form class="formModalModif">
        <h2>Modifier {{ nouveauProdModif.titre }}</h2>
        <div class="info_Modal">
          <label for="editName">Titre : </label>
          <input type="text" id="editName" v-model="nouveauProdModif.titre" />
        </div>

        
<div class="info_Modal">
  
          <label for="editPrice">Prix produit:</label>
          <input type="number" id="editPrice" v-model="nouveauProdModif.prix" />
</div>
        

        <div class="info_Modal">
          <label for="editQuantity">Quantité de stock disponible:</label>
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProdModif.stock"
          />
          
        </div>
       

        <div class=" info_Modal-imageModalContainer">
          <div>
            <p>Image produit:</p>
             <img class="imageModal" :src="getImgUrl(nouveauProdModif)"  />
          </div>
           
           <div class="divimgModal" >
             <p>Modifier l'image :</p>  
                       <input type="file" @change="convertToBase64" accept="image/*" />
           </div>
          
      
          <div v-if="showImage">
            <img class="imageModal" :src="base64textString" :alt="imageName" />
          </div>
          
       
        </div>

        <div class="info_Modal">
          <label for="editMoq">Quantité minimale de commande:</label>
          <input
            type="number"
            id="editQuantity"
            v-model="nouveauProdModif.moq"
          />
        </div>
        

        <div class="info_Modal">
          <label for="editDesc">Description : </label>
          <input type="text" id="editDesc" v-model="nouveauProdModif.description" />
        </div>
<div class="info_Modal">
  
          <label for="editCategory">Catégorie produit:</label>
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
.titreGestionProduits{
  margin-top: 20px;
}
.ajoutform .info_Modal{
  margin-bottom: 10px;
}


.listeProduitsAdmin{
  font-family: cursive;
  width: 100%;
  display: flex;
  justify-content: center;
}
.categProdAdmin {
height: 150px;
display: flex;
justify-content: center;
align-items: center;

}
tr th {
  background-color: #dab65b7e;
  height: 25px;
  width: 200px;
}
.tableAdmin{
  margin:0 auto;
 
 
}
.prodAdmin{
  background-color: #F1F1EF;
  margin-bottom:  10px ;
}
.imageProdAdmin {
  max-width: 100px;
}
.divimgModal{
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.divimgModal  input{
 width: 70%;
 text-align: center;
  
}
.containerModal{
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

}
.info_Modal-imageModalContainer{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.imageModal {
  max-width: 100px;
  height: 100px;
  
}

.info_Modal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info_Modal input, select{
  text-align: center;
  max-width: 300px;
  width: 100%;
  
  border: 1px solid #DAB65B;
}
.formModalModif{
  display: flex;
  flex-direction: column;
  gap: 12px;
 
 
}
.formModalModif h2{
  margin: 25px 0px 0px 0px;
}


@media (max-width: 850px) { 
  table thead{
  display: none;
  }

  table tr{
display: block;

}
table td {
display: block;

}

.categProdAdmin{
  height: 50px;
}
table td:before {
content: attr(data-label);
font-weight: bold;
}

}


</style>
