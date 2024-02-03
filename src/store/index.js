import { createStore } from "vuex";
// Initialiser le state lastUser avec la valeur du local storage
function getLastProd() {
  // Récupérer l'id du dernier utilisateur enregistré
  let lastProd = localStorage.getItem("lastProdId");
  //  On récupère le dernier is si il existe sinon on commence à 0
  return lastProd ? parseInt(lastProd) : 0;
}

function getLastUtilisateur() {
  // Récupérer l'id du dernier utilisateur enregistré
  let lastUtilisateur = localStorage.getItem("lastUtilisateurId");
  //  On récupère le dernier is si il existe sinon on commence à 0
  return lastUtilisateur ? parseInt(lastUtilisateur) : 0;
}
export default createStore({
  state: {
    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: "Luminaires" },
      { id: 3, name: "Tapis" },
      { id: 4, name: "Objets de décorations" },
    ],
    query: "",
    lastProd: getLastProd(),
    lastUtilisateur:getLastUtilisateur(),
    produits: [
      {
        id: 1,
        image: "mobilier-5.jpg",
        titre: "Table à manger en bois",
        description: "Table à manger en bois massif avec finition élégante.",
        prix: 299.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 2,
        image: "luminaire-1.jpg",
        titre: "Lampe moderne",
        description: "Lampe avec un design moderne et éclairage ajustable.",
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 3,
        image: "tapis-2.jpg",
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif géométrique.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 4,
        image: "deco-3.jpg",
        titre: "Vase éthnique en argile",
        description: "Vase éthnique en argile avec motifs gravés à la main.",
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
      {
        id: 5,
        image: "mobilier-4.jpg",
        titre: "Canapé vert sapin",
        description: "Canapé vert sapin en velour avec un design moderne .",
        prix: 399.99,
        moq: 4,
        categorieId: 1,
      },
      {
        id: 6,
        image: "luminaire-2.jpg",
        titre: "Lampe bout bois",
        description: "Lampe blanche avec un bout en bois",
        prix: 59.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 7,
        image: "tapis-3.jpg",
        titre: "Tapis rustique coloré",
        description: "Tapis rustique fin avec des couleurs orangées.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 8,
        image: "deco-4.jpg",
        titre: "Vase moderne blanc",
        description: "Grand vase neutre blanc de forme ovale.",
        prix: 49.99,
        moq: 25,
        categorieId: 4,
      },
      {
        id: 9,
        image: "mobilier-3.jpg",
        titre: "Canapé camel",
        description: "Canapé en cuir de couleur camel, 3 places .",
        prix: 299.99,
        moq: 6,
        categorieId: 1,
      },
      {
        id: 10,
        image: "luminaire-3.jpg",
        titre: "Lampe bois",
        description: "Lampe moderne d'extérieur ovale en bois",
        prix: 89.99,
        moq: 15,
        categorieId: 2,
      },
      {
        id: 11,
        image: "tapis-4.jpg",
        titre: "Tapis forme éléphant",
        description: "Tapis gris en laine en forme d'éléphant",
        prix: 79.99,
        moq: 15,
        categorieId: 3,
      },
      {
        id: 12,
        image: "deco-5.jpg",
        titre: "Vase style velour",
        description: "Vase style velour bleu marine.",
        prix: 99.99,
        moq: 13,
        categorieId: 4,
      },

      {
        id: 13,
        image: "mobilier-2.jpg",
        titre: "Table murale",
        description: "Table murale en bois avec deux accorche dorée.",
        prix: 29.99,
        moq: 10,
        categorieId: 1,
      },
      {
        id: 14,
        image: "luminaire-4.jpg",
        titre: "Lampe noire",
        description: "Lampe métallique noir style rétro.",
        prix: 59.99,
        moq: 12,
        categorieId: 2,
      },
      {
        id: 15,
        image: "tapis-5.jpg",
        titre: "Tapis vert sapin",
        description: "Tapis épais vert sapin rectangulaire",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 16,
        image: "deco-1.jpg",
        titre: "Vase en bois",
        description: "Vase en bois forme ovale.",
        prix: 79.99,
        moq: 15,
        categorieId: 4,
      },

      {
        id: 17,
        image: "mobilier-1.jpg",
        titre: "Table blanche bout bois",
        description: "Table de chevet blanche avec 3 pieds en bois.",
        prix: 39.99,
        moq: 10,
        categorieId: 1,
      },
      {
        id: 18,
        image: "luminaire-5.jpg",
        titre: "Lampe bois originale",
        description:
          "Lampe moderne d'intérieur avec une forme originale en bois",
        prix: 99.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 19,
        image: "tapis-1.jpg",
        titre: "Tapis fourrure beige",
        description: "Tapis léger en fourrure de couleur beige",
        prix: 69.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 20,
        image: "deco-2.jpg",
        titre: "Vase vert clair",
        description:
          "Vase en verre de couleur vert clair avec des formes géométriques.",
        prix: 99.99,
        moq: 20,
        categorieId: 4,
      },
    ],

   
    commandes : [
      {
        id: 1,
        produits: [
          { produitId: 1, quantite: 2 },
          { produitId: 3, quantite: 1 }
        ],
        coutTotal: 689.97,
        userId: 1
      },
      {
        id: 2,
        produits: [
          { produitId: 2, quantite: 1 },
          { produitId: 4, quantite: 3 }
        ],
        coutTotal: 539.96,
        userId: 2
      },
    ],

    utilisateurs: [
      {
        id: 1,
        raisonSociale: "Entreprise A",
        siret: "12345678901234",
        adresse: "123 Rue de la République",
        codePostal: "75001",
        ville: "Paris",
        email: "entrepriseA@example.com",
        motDePasse: "motdepasseA",
        role: "USER",
      },
      {
        id: 2,
        raisonSociale: "Entreprise B",
        siret: "56789012345678",
        adresse: "456 Avenue des Champs-Élysées",
        codePostal: "75008",
        ville: "Paris",
        email: "entrepriseB@example.com",
        motDePasse: "motdepasseB",
        role: "ADMIN",
      },
    ],
    currentProduct: [],
    currentUtilisateur: [],

  },
  getters: {
    filteredProduits(state) {
      if (!state.query) return state.produits;
      let query = state.query.toLowerCase();
      return state.produits.filter((user) =>
        user.titre.toLowerCase().includes(query.toLowerCase())
      );
    },
    getProduits(state) {
      return state.produits;
    },

    getUtilisateurs(state){
      let users = Object.keys(localStorage)
        .filter((key) => key.startsWith("utilisateur_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
        console.log("getuser" + users);
        if(users.length){
          state.utilisateurs = users;
        }
      return state.utilisateurs;

    },
    getCategories(state){
      return state.categories;

    },
    
    getCurrentUtilisateur(state){
      if(localStorage.getItem(`currentUtilisateur`)){
        return state.currentUtilisateur;
      }else{
        return ;
      }
     

    }
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setCurrentUtilisateur(state, utilisateur) {
      console.log("dans le set")
      if(utilisateur==0){
        console.log("dans le if")
        localStorage.removeItem(`currentUtilisateur`);
      }else{
        console.log("dans le else")
        state.currentUtilisateur = utilisateur;
        localStorage.setItem(`currentUtilisateur`, JSON.stringify(utilisateur));
      }
      
    },
    setCurrentProduct(state, prod) {
      state.currentProduct = prod;
    },
    setProduct(state, prods) {
      state.produits = prods;
    },
    setUtilisateur(state, utilisateurs) {
      state.utilisateurs = utilisateurs;
    },
    addProd(state, prod) {

      // On incrément ele dernier id de 1

      state.lastProd += 1;
      // On ajoute une propriété id à l'objet userData
      prod.id = state.lastProd;
      // On enregistre l'utilisateur dans le local storage
      localStorage.setItem(`prod_${prod.id}`, JSON.stringify(prod));
      // On enregistre le dernier id dans le local storage
      localStorage.setItem("lastProdId", state.lastProd);
    },
    addUtilisateur(state, utilisateur) {
      state.lastUtilisateur += 1;

      utilisateur.id = state.lastUtilisateur;

      localStorage.setItem(`utilisateur_${utilisateur.id}`, JSON.stringify(utilisateur));

      localStorage.setItem("lastUtilisateurId", state.lastUtilisateur);
    },
  },
  actions: {
    loadProds(context) {
      //localStorage.clear();
      context.getters.getProduits.forEach(function (currentValue) {
        let selectedProd = localStorage.getItem(`prod_${currentValue.id}`);
        if (!selectedProd) {
          context.commit("addProd", currentValue);
        }
      });
      let prods = Object.keys(localStorage)
        .filter((key) => key.startsWith("prod_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      context.commit("setProduct", prods);
    },
    loadUtilisateurs(context) {
      //localStorage.clear();
      
      context.getters.getUtilisateurs.forEach(function (currentValue) {
        let selectedUtilisateur = localStorage.getItem(`utilisateur_${currentValue.id}`);
        if (!selectedUtilisateur) {
          context.commit("addUtilisateur", currentValue);
        }
      });
      let users = Object.keys(localStorage)
        .filter((key) => key.startsWith("utilisateur_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      context.commit("setUtilisateur", users);
    },
    oneProd(context, prodId) {
      let selectedProd = localStorage.getItem(`prod_${prodId}`);
      console.log(selectedProd);
      if (selectedProd) {
        let prodObj = JSON.parse(selectedProd);
        context.commit("setCurrentProduct", prodObj);
      } else {
        alert("Produit introuvable");
      }
    },
    oneUtilisateur(context, utilisateurId) {
      let selectedUtilisateur= localStorage.getItem(`utilisateur_${utilisateurId}`);
      console.log(selectedUtilisateur);
      if (selectedUtilisateur) {
        let utilisateurObj = JSON.parse(selectedUtilisateur);
        context.commit("setCurrentUtilisateur", utilisateurObj);
      } else {
        alert("Utilisateur introuvable");
      }
    },
  },
  modules: {},
});