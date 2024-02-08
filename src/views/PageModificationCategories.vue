<template>

    <div v-for="(categorie, index) in categories" :key="index">
        {{ categorie.name }}

        <button @click="supprimerCategorie(categorie)">Supprimer</button>
        <button @click="modifierCategorie(categorie)">Modifier</button>

    </div>

    <input
        class="ajouterClass"
        id="nouvelElement"
        type="text"
        v-model="nouvelElement"
    />
    
    <button @click="ajouterElement">Ajouter une catégorie</button>

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


        supprimerCategorie(categorie) {
            const index = this.categories.indexOf(categorie);

            if (index !== -1) {
                // Supprimez l'élément du tableau côté client
                this.categories.splice(index, 1);
            } else {
                console.error("L'élément à supprimer n'a pas été trouvé dans le tableau.");
            }
        },


        async modifierCategorie(categorie) {
            try {
                // Affichez un formulaire d'édition ou utilisez une interface utilisateur pour obtenir les nouvelles données
                const nouvellesDonnees = prompt("Entrez les nouvelles données de la catégorie", categorie.name);
                categorie.name = nouvellesDonnees;
              
            } catch (error) {
                console.error("Erreur lors de la modification côté serveur :", error);
                // Gérez les erreurs de manière appropriée
            }
        },

        ajouterElement() {
            if (this.nouvelElement.trim() !== "") {
                // Ajoutez le nouvel élément au tableau côté client
                this.categories.push({ name: this.nouvelElement });
                // Effacez le champ de saisie
                this.nouvelElement = "";
            } else {
                console.error("Le champ ne peut pas être vide.");
            }
        },




    },
}

</script>

<style></style>