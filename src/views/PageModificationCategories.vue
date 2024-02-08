<template>
    <div class="container">
        <h2 class="titre">Récapitulatifs des catégories</h2>
        <div class="containerCategories" v-for="(categorie, index) in categories" :key="index">
            <div class="affichage">
                {{ categorie.name }}

            </div>
            <div class="modifSupp">

                <button @click="effacerDuLocalStorage(categorie)">Supprimer</button>
                <button  @click="modifierDansLocalStorage(categorie)">Modifier</button>
            </div>

        </div>
        <div class="containerAjout">

            <input
            class="ajouterClass"
            id="nouvelElement"
            type="text"
            v-model="nouvelElement"
            />
            
            <button class="btnAjout" @click="ajouterCategorie ()">Ajouter une catégorie</button>
        
        </div>
    </div>


    <div id="myModal" class="modal">
        
            <div class="modal-content">

                <span class="close" id="closeModalBtn">&times;</span>
                <p>Contenu de la fenêtre modale...</p>

            </div>

        </div>
</template>

<script>

export default {

    computed: {
        categories() {
            
            return this.$store.getters.getCategories
        },
    },
    mounted() {
        this.$store.dispatch("loadCategories");
    },
    methods: {

        effacerDuLocalStorage(categorie) {
            try {
                const confirmation = confirm(`Êtes-vous sûr de vouloir effacer "${categorie.name}" du Local Storage ?`);

                if (confirmation) {
                    // Effacer l'élément du Local Storage
                    localStorage.removeItem(`categorie_${categorie.id}`);
                    // Vous pouvez également ajouter des actions supplémentaires si nécessaire
                }
            } catch (error) {
                console.error("Erreur lors de l'effacement du Local Storage :", error);
            }
        },

        modifierDansLocalStorage(categorie) {
            try {
                const nouvellesDonnees = prompt(`Entrez les nouvelles données de la catégorie "${categorie.name}"`, categorie.name);

                if (nouvellesDonnees !== null) {
                    // Modifier la valeur dans le Local Storage
                    categorie.name = nouvellesDonnees;
                    localStorage.setItem(`categorie_${categorie.id}`, JSON.stringify(categorie));
                    // Vous pouvez également ajouter des actions supplémentaires si nécessaire
                }
            } catch (error) {
                console.error("Erreur lors de la modification dans le Local Storage :", error);
            }
        },

        addCategorie(state, categorie) {
            state.lastCategorie += 1;

            categorie.id = state.lastCategorie;

            localStorage.setItem(`categorie_${categorie.id}`, JSON.stringify(categorie));

            localStorage.setItem("lastCategorieId", state.lastCategorie);
        },

        ajouterCategorie() {
            const nouvelleCategorie = {
                name: this.nouvelElement,
            };
            this.$store.commit("addCategorie", nouvelleCategorie);
            this.nouvelElement = "";
        },









        
    },
    
}

</script>

<style>
.container{
    /* background-color: #333; */
    width: 100%;
    height: 100vh;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    max-width: 600px;
}
@media screen and (max-width:1200px) {
    .container{
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
.containerAjout button{
    margin-left: 10px;
    /* background-color : green; */
}
.containerAjout input{
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
.modifSupp{
  margin: 10px;
}
.modifSupp button {
    width: 100px;
    height: 20px;
    margin-right: 10px;
    border-radius: 15px;
    font-size: small;
    color: rgb(111, 30, 30);
    background-color: antiquewhite;
}



















</style>