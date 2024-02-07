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
function getLastCommande() {
  // Récupérer l'id du dernier utilisateur enregistré
  let lastCommande = localStorage.getItem("lastCommandeId");
  //  On récupère le dernier is si il existe sinon on commence à 0
  return lastCommande ? parseInt(lastCommande) : 0;
}
function getLastCommandePrise() {
  // Récupérer l'id du dernier utilisateur enregistré
  let lastCommandePrise = localStorage.getItem("lastCommandePriseId");
  //  On récupère le dernier is si il existe sinon on commence à 0
  return lastCommandePrise ? parseInt(lastCommandePrise) : 0;
}
function getLastCategorie() {
  // Récupérer l'id du dernier utilisateur enregistré
  let lastCategorie = localStorage.getItem("lastCategorieId");
  //  On récupère le dernier is si il existe sinon on commence à 0
  return lastCategorie ? parseInt(lastCategorie) : 0;
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
    lastUtilisateur: getLastUtilisateur(),
    lastCommande: getLastCommande(),
    lastCommandePrise: getLastCommandePrise(),
    lastCategorie:getLastCategorie(),
    produits: [
      {
        id: 1,
        image: "mobilier-5.jpg",
        titre: "Table à manger en bois",
        description: "Table à manger en bois massif avec finition élégante.",
        prix: 299.99,
        moq: 5,
        stock: 1500,
        categorieId: 1,
      },
      {
        id: 2,
        image: "luminaire-1.jpg",
        titre: "Lampe moderne",
        description: "Lampe avec un design moderne et éclairage ajustable.",
        prix: 129.99,
        moq: 10,
        stock: 1500,
        categorieId: 2,
      },
      {
        id: 3,
        image: "tapis-2.jpg",
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif géométrique.",
        prix: 89.99,
        moq: 20,
        stock: 1500,
        categorieId: 3,
      },
      {
        id: 4,
        image: "deco-3.jpg",
        titre: "Vase éthnique en argile",
        description: "Vase éthnique en argile avec motifs gravés à la main.",
        prix: 49.99,
        moq: 20,
        stock: 1500,
        categorieId: 4,
      },
      {
        id: 5,
        image: "mobilier-4.jpg",
        titre: "Canapé vert sapin",
        description: "Canapé vert sapin en velour avec un design moderne .",
        prix: 399.99,
        moq: 4,
        stock: 1500,
        categorieId: 1,
      },
      {
        id: 6,
        image: "luminaire-2.jpg",
        titre: "Lampe bout bois",
        description: "Lampe blanche avec un bout en bois",
        prix: 59.99,
        moq: 10,
        stock: 1500,
        categorieId: 2,
      },
      {
        id: 7,
        image: "tapis-3.jpg",
        titre: "Tapis rustique coloré",
        description: "Tapis rustique fin avec des couleurs orangées.",
        prix: 89.99,
        moq: 20,
        stock: 1500,
        categorieId: 3,
      },
      {
        id: 8,
        image: "deco-4.jpg",
        titre: "Vase moderne blanc",
        description: "Grand vase neutre blanc de forme ovale.",
        prix: 49.99,
        moq: 25,
        stock: 1500,
        categorieId: 4,
      },
      {
        id: 9,
        image: "mobilier-3.jpg",
        titre: "Canapé camel",
        description: "Canapé en cuir de couleur camel, 3 places .",
        prix: 299.99,
        moq: 6,
        stock: 1500,
        categorieId: 1,
      },
      {
        id: 10,
        image: "luminaire-3.jpg",
        titre: "Lampe bois",
        description: "Lampe moderne d'extérieur ovale en bois",
        prix: 89.99,
        moq: 15,
        stock: 1500,
        categorieId: 2,
      },
      {
        id: 11,
        image: "tapis-4.jpg",
        titre: "Tapis forme éléphant",
        description: "Tapis gris en laine en forme d'éléphant",
        prix: 79.99,
        moq: 15,
        stock: 1500,
        categorieId: 3,
      },
      {
        id: 12,
        image: "deco-5.jpg",
        titre: "Vase style velour",
        description: "Vase style velour bleu marine.",
        prix: 99.99,
        moq: 13,
        stock: 1500,
        categorieId: 4,
      },

      {
        id: 13,
        image: "mobilier-2.jpg",
        titre: "Table murale",
        description: "Table murale en bois avec deux accorche dorée.",
        prix: 29.99,
        moq: 10,
        stock: 1500,
        categorieId: 1,
      },
      {
        id: 14,
        image: "luminaire-4.jpg",
        titre: "Lampe noire",
        description: "Lampe métallique noir style rétro.",
        prix: 59.99,
        moq: 12,
        stock: 1500,
        categorieId: 2,
      },
      {
        id: 15,
        image: "tapis-5.jpg",
        titre: "Tapis vert sapin",
        description: "Tapis épais vert sapin rectangulaire",
        prix: 89.99,
        moq: 20,
        stock: 1500,
        categorieId: 3,
      },
      {
        id: 16,
        image: "deco-1.jpg",
        titre: "Vase en bois",
        description: "Vase en bois forme ovale.",
        prix: 79.99,
        moq: 15,
        stock: 1500,
        categorieId: 4,
      },

      {
        id: 17,
        image: "mobilier-1.jpg",
        titre: "Table blanche bout bois",
        description: "Table de chevet blanche avec 3 pieds en bois.",
        prix: 39.99,
        moq: 10,
        stock: 1500,
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
        stock: 1500,
        categorieId: 2,
      },
      {
        id: 19,
        image: "tapis-1.jpg",
        titre: "Tapis fourrure beige",
        description: "Tapis léger en fourrure de couleur beige",
        prix: 69.99,
        moq: 20,
        stock: 1500,
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
        stock: 1500,
        categorieId: 4,
      },
    ],

    commandes: [
      {
        id: 1,
        produits: [
          { produitId: 1, quantite: 2 },
          { produitId: 3, quantite: 1 },
        ],
        coutTotal: 689.97,
        userId: 1,
      },
      {
        id: 2,
        produits: [
          { produitId: 2, quantite: 1 },
          { produitId: 4, quantite: 3 },
        ],
        coutTotal: 539.96,
        userId: 2,
      },
    ],
    commandesPrises: [],
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

    currentUtilisateur: {},

    currentUtilisateurCommande: {   
      id: 0,
      produits: [
    
      ],
      coutTotal:0,
      userId: 0,
    },
    roles:[]
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
    getLastUtilisateur(state) {
      let lastUser = JSON.parse(localStorage.getItem("lastUtilisateurId"));
      console.log("getlasuser" + lastUser);
      if (lastUser) {
        state.lastUtilisateur = lastUser;
      }

      return state.lastUtilisateur;
    },

    getUtilisateurs(state) {
      let users = Object.keys(localStorage)
        .filter((key) => key.startsWith("utilisateur_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      console.log("getuser" + users);
      if (users.length) {
        state.utilisateurs = users;
      }
      return state.utilisateurs;
    },
    getCommandes(state) {
      let commandes = Object.keys(localStorage)
        .filter((key) => key.startsWith("commande_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));

      if (commandes.length) {
        state.commandes = commandes;
        console.log("getcommandes" + state.commandes[0].id);
      }
      return state.commandes;
    },
    getCommandesPrises(state) {
      let commandesPrises = Object.keys(localStorage)
        .filter((key) => key.startsWith("commandePrise_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));

      if (commandesPrises.length) {
        state.commandesPrises = commandesPrises;
      }
      return state.commandesPrises;
    },
    getCategories(state) {
      let categories = Object.keys(localStorage)
      .filter((key) => key.startsWith("categorie_"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    if (categories.length) {
      state.categories = categories;
    }
      return state.categories;
    },
    getRoles(state) {
      let users = Object.keys(localStorage)
      .filter((key) => key.startsWith("utilisateur_"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
      let roles=[];
    users.forEach(function (currentValue) {
   if(currentValue.role=="ADMIN"){
    roles.push(true);
   }else{
    roles.push(false);
   }
state.roles=roles;

    });

    return state.roles
    },
    getCurrentUtilisateurCommande(state) {
      let currentUtilisateurCommande = JSON.parse(
        localStorage.getItem("currentUtilisateurCommande")
      );

      if (currentUtilisateurCommande) {
        state.currentUtilisateurCommande = currentUtilisateurCommande;

      } 
      return state.currentUtilisateurCommande;
    },

    getCurrentUtilisateur(state) {
      let currentUtilisateur = JSON.parse(
        localStorage.getItem("currentUtilisateur")
      );

      if (currentUtilisateur) {
        state.currentUtilisateur = currentUtilisateur;

        return state.currentUtilisateur;
      } else {
        return undefined;
      }
    },
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setCurrentUtilisateur(state, utilisateur) {
      console.log("dans le current");
      if (utilisateur == 0) {
        localStorage.removeItem(`currentUtilisateur`);
      } else {
        state.currentUtilisateur = utilisateur;
        localStorage.setItem(`currentUtilisateur`, JSON.stringify(utilisateur));
      }
    },
    setCurrentUtilisateurCommande(state, commande) {
      let trouve = false;
      if (commande) {
        console.log("dans le commande" + commande);
        state.currentUtilisateurCommande = commande;
        localStorage.setItem(
          `currentUtilisateurCommande`,
          JSON.stringify(commande)
        );
      } else {
        let utilisateur = this.getters.getCurrentUtilisateur;
        this.getters.getCommandes.forEach(function (currentValue) {
          let commandeSelected = JSON.parse(
            localStorage.getItem(`commande_${currentValue.userId}`)
          );
          if (commandeSelected != null) {
            if (utilisateur && utilisateur.id === commandeSelected.userId) {
              trouve = true;
              console.log("dans le if setcur" + trouve);
              state.currentUtilisateurCommande = currentValue;
              localStorage.setItem(
                `currentUtilisateurCommande`,
                JSON.stringify(currentValue)
              );
            }
          }
        });
        // if (trouve == false) {
        //   console.log("pas la");
        //   let commande = state.currentUtilisateurCommande;
        //   console.log("comande " + commande );
        //   commande.userId= utilisateur.userId;
        //   localStorage.setItem("currentUtilisateurCommande", commande);
     
        // }
        if (utilisateur == undefined) {
          localStorage.removeItem(`currentUtilisateurCommande`);
        }
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
    setCommandes(state, commande) {
      if (commande != undefined) {
        this.getters.getCommandes.forEach(function (currentValue) {
          if (currentValue.id == commande.id && commande.userId==currentValue.userId) {
            console.log("dans le if commande" + commande.coutTotal);
            localStorage.setItem(
              `commande_${currentValue.id}`,
              JSON.stringify(commande)
            );
          }
        });
      }
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

      localStorage.setItem(
        `utilisateur_${utilisateur.id}`,
        JSON.stringify(utilisateur)
      );

      localStorage.setItem("lastUtilisateurId", state.lastUtilisateur);
    },
    addCommande(state, commande) {
      state.lastCommande += 1;

      commande.id = state.lastCommande;

      localStorage.setItem(`commande_${commande.id}`, JSON.stringify(commande));

      localStorage.setItem("lastCommandeId", state.lastCommande);
    },   
     addCategorie(state, categorie) {
      state.lastCategorie += 1;

      categorie.id = state.lastCategorie;

      localStorage.setItem(`categorie_${categorie.id}`, JSON.stringify(categorie));

      localStorage.setItem("lastCategorieId", state.lastCategorie);
    },
    addCommandePrise(state, commande) {
      state.lastCommandePrise += 1;

      commande.id = state.lastCommandePrise;

      localStorage.setItem(
        `commandePrise_${commande.id}`,
        JSON.stringify(commande)
      );

      localStorage.setItem("lastCommandePriseId", state.lastCommandePrise);
    },
    deleteProd(state, prodId) {
      let index = state.getters.getProduits.findIndex(
        (prod) => prod.id === prodId
      );

      if (index !== -1) {
        if (confirm("Voulez-vous vraiment supprimer cet produit ?")) {
          state.produits.splice(index, 1);
          localStorage.removeItem(`prod_${prodId}`);
          alert("Utilisateur supprimé");
        }
      }
    },
    deleteCommande(state, commandeId) {
      let index = this.getters.getCommandes.findIndex(
        (commande) => commande.id === commandeId
      );
      console.log("index" + index);
      if (index !== -1) {
        state.commandes.splice(index, 1);
        localStorage.removeItem(`commande_${commandeId}`);
      }
    },
    modifyCommandeDefault(state, commandeId,commandeUserId) {
      console.log("commandeId" + commandeId);
     let index=-1
      this.getters.getCommandes.forEach(function (currentValue) {
     if(currentValue.id == commandeId && currentValue.userId==commandeUserId){
       index = currentValue.id;
     }
      });

     
      console.log("index" + index);
      if (index !== -1) {
        state.commandes[index].coutTotal=0;
        state.commandes[index].produits=[];

        localStorage.setItem(`commande_${commandeId}`, JSON.stringify(state.commandes[index]));
      }
    },
  },
  actions: {
    loadProds(context) {
      //localStorage.clear();
      context.getters.getProduits.forEach(function (currentValue) {
        let selectedProd = localStorage.getItem(`prod_${currentValue.id}`);
        console.log("selected" + selectedProd);
        if (selectedProd == null) {
          console.log("dans le add prod");
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
        let selectedUtilisateur = localStorage.getItem(
          `utilisateur_${currentValue.id}`
        );
        if (selectedUtilisateur == null) {
          context.commit("addUtilisateur", currentValue);
        }
      });
      let users = Object.keys(localStorage)
        .filter((key) => key.startsWith("utilisateur_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      context.commit("setUtilisateur", users);
    },
    loadCommandes(context) {
      //localStorage.clear();

      context.getters.getCommandes.forEach(function (currentValue) {
        let selectedCommande = localStorage.getItem(
          `commande_${currentValue.id}`
        );
        if (selectedCommande == null) {
          context.commit("addCommande", currentValue);
        }
      });
      let commandes = Object.keys(localStorage)
        .filter((key) => key.startsWith("commande_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      context.commit("setCommandes", commandes);
    },
    loadCategories(context) {
      //localStorage.clear();

      context.getters.getCategories.forEach(function (currentValue) {
        let selectedCategorie = localStorage.getItem(
          `categorie_${currentValue.id}`
        );
        if (selectedCategorie == null) {
          context.commit("addCategorie", currentValue);
        }
      });
      let commandes = Object.keys(localStorage)
        .filter((key) => key.startsWith("categorie_"))
        .map((key) => JSON.parse(localStorage.getItem(key)));
      context.commit("setCategories", commandes);
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
    oneUtilisateurinList(context, utilisateurId) {
      let selectedUtilisateur = localStorage.getItem(
        `utilisateur_${utilisateurId}`
      );

      if (selectedUtilisateur) {
        let userObj = JSON.parse(selectedUtilisateur);

        context.commit("setCurrentProduct", userObj);
      } else {
        alert("Produit introuvable");
      }
    },
    oneUtilisateur(context) {
      let selectedUtilisateur = localStorage.getItem(`currentUtilisateur`);

      if (selectedUtilisateur) {
        let utilisateurObj = JSON.parse(selectedUtilisateur);
        context.commit("setCurrentUtilisateur", utilisateurObj);
      } else {
        context.commit("setCurrentUtilisateur", 0);
      }
    },

    oneUtilisateurCommande(context) {
      let selectedUtilisateur = localStorage.getItem(
        `currentUtilisateurCommande`
      );

      if (selectedUtilisateur) {
        let utilisateurObj = JSON.parse(selectedUtilisateur);
        context.commit("setCurrentUtilisateurCommande", utilisateurObj);
      } else {
        context.commit("setCurrentUtilisateurCommande", 0);
      }
    },
  },

  modules: {},
});
