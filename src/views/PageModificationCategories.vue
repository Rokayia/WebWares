<template>
  <MyHeader />

  <div class="containerCategorie">
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
        <form>
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
}
.affichage {
  margin-top: 15px;
  min-height: 40px;
  width: 500px;
  text-align: start;
  padding-left: 10px;
  background-color: rgba(128, 128, 128, 0.349);
  color: black;
  font-family: cursive;
}
.boutonAjouter {
  width: 750px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.containerCategorie {
  /* background-color: #333; */
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  max-width: 1000px;
}
@media screen and (max-width: 1200px) {
  .container {
    width: 90%;
  }
}
/* .containerCategories {
    background-color : blue;
    
}


.affichage {
    background-color: chocolate;
} */
.containerAjout {
  margin: 10px;
  /* background-color : green; */
}
.containerAjout button {
  margin-left: 10px;
  /* background-color : green; */
}
.containerAjout input {
  margin-right: 10px;
  /* background-color : green; */
  border-radius: 5px;
}
.btnAjout {
  background-color: rgb(255, 210, 143);
  margin-right: 10px;
  width: 200px;
  height: 30px;
  border-radius: 15px;
}

.titre {
  margin-top: 50px;
}
.modifSupp {
  margin: 10px;
  display: flex;
}
</style>
