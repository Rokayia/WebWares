<template>
  <MyHeader />

  <div class="containerCategorie">
    <div class="ctncat">
    <h2 class="titre">Récapitulatifs des catégories</h2>
    <div class="boutonAjouter">
      <btnProduct
        label="Ajouter une catégorie"
        backgroundColor="AjouterPanier"
        @click="ouvrirModal()"
      />
    </div>

    <div
      class="containerModifCategories"
      v-for="(categorie, index) in categories"
      :key="index"
    >
      <div class="affichage">
        {{ categorie.name }}
      </div>
      <div class="modifSupp">
        <btnProduct
          label="Supprimer"
          backgroundColor="SupprimerBackOffice"
          @click="effacerDuLocalStorage(categorie.id)"
        />
        <btnProduct
          label="Modifier"
          backgroundColor="ModifierBackOffice"
          @click="modifierDansLocalStorage(categorie)"
        />
      </div>
    </div>
  </div>
    <!-- <div class="containerAjout">

            <input
            class="ajouterClass"
            id="nouvelElement"
            type="text"
            v-model="nouvelElement"
            />
            
            
        </div> -->

    <!-- Ajouter modal -->

    <Modal :is-visible="showModalFlag" @close="showModalFlag = false">
      <div class="containerModal">
        
        <form>
          <h2>Ajouter une catégorie</h2>
          <div class="info_Modal">
            <label for="editName">Nom de la catégorie : </label><br />
            <input type="text" id="editName" v-model="nouvelleCategorie.name" />
          </div>
          <br /><br />
          <btnProduct
            label="Ajouter"
            backgroundColor="AjouterPanier"
            @click="ajouterCategorie()"
          />
        </form>
      
      </div>
    </Modal>


    <Modal :is-visible="showModifModalFlag" @close="showModifModalFlag=false">
        <form class="centerform">
          <h2>Modifier une catégorie</h2>
          <div class="info_Modal">
            <label for="editName">Nom de la catégorie : </label><br />
            <input type="text" id="editName" v-model="categorieModif.name" />
          </div>
          <br /><br />
          <btnProduct
            label="Ajouter"
            backgroundColor="AjouterPanier"
            @click="enregistrerModif()"
          />
        </form>
    </Modal>
  </div>

  <myFooter />
</template>

<script>
import Modal from "@/components/AjouterModifierModal.vue";
import btnProduct from "@/components/btnLandingPage.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      showModalFlag: false,
      showModifModalFlag: false,
      nouvelleCategorie: {},
      categorieModif: {},
    };
  },
  components: {
    MyHeader,
    myFooter,
    Modal,
    btnProduct,
  },

  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  methods: {
    ouvrirModal() {
      this.showModalFlag = true;
    },
    effacerDuLocalStorage(id) {
      this.$store.commit("deleteCategorie", id);
    },
    modifierDansLocalStorage(item) {
      this.showModifModalFlag = true;
      this.categorieModif = item;
    },
    enregistrerModif() {
      this.$store.commit("setOneCategorie", this.categorieModif);
      this.showModifModalFlag = false;
      location.reload();
    },
    ajouterCategorie() {
      this.$store.commit("addCategorie", this.nouvelleCategorie);
    },
  },
};
</script>

<style>
.containerModifCategories {
  display: flex;
  align-items: center;
  width: 90%;
  font-family: cursive;
  text-transform: uppercase ;
  background-color: #e2dac71c;
  margin-top: 30px;
  
  
 
}
.boutonAjouter{
  width: 100%;
  
  display: flex;
  justify-content: flex-end;
  
}
.affichage {
  margin-top: 15px;
  min-height: 40px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  background-color: #F1F1EF;
  color: black;
  font-family: cursive;
}

.containerCategorie {
  /* background-color: #333; */

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
 
}
.ctncat{
  max-width: 1200px;
  width: 100%;;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
 
}
.ctncat h2{
  font-size: 2rem;
}
.centerform{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
}
@media (max-width:765px) {
  .boutonAjouter{

  
  display: flex;
  justify-content: center;
  
  
}


}
@media (max-width:500px){
  .containerModifCategories{
   display: flex;
   flex-direction: column;
   margin-top: 10px;
  }
  .ctncat h2{
  font-size: 1.5rem;
  margin: 2px;
  margin-bottom: 25px;
}
  
}


</style>
