<template>

<slot></slot>



<div class="connectionUser" v-if="isUser" v-cloak>
  <header  >

      <div class="logo">
        <router-link to="/">
          <img class="logoimg" src="@/assets/logo1.jpg" alt="Logo de l'application"
        /></router-link>
      </div>
  


<nav class="partie-nav">
   
      <ul class="nav-bar">
        <input type='checkbox' id='check' />
        <span class="menu">
        <router-link class="nav-burger" to="/">Accueil</router-link>
        <router-link  class="nav-burger" to="/listProducts">Tous les Produits</router-link>

        <!--Menu déroulant -->
        <ul class="nav-dropdown">
          <li class="nav-link dropdown">
            Catégories
            <ul class="dropdown-content">
              <div v-for="category in categories" :key="category.id">
                <router-link
                  :to="'/categorieProduct/:' + category.id"
                  v-on:click="getCatégories(category.id)"
                  class="nav-link"
                >
                  {{ category.name }}
      
                </router-link>
              </div>
            </ul>
          </li>
        </ul> 
     
     
        <div v-if="isVisible">
          <ul class="nav-dropdown">

            <router-link
                  :to="'/myOrder' "
                >
            <font-awesome-icon :icon="['fas', 'basket-shopping']" size="3x" />{{ quantitePanier() }}
          </router-link>
            <li class="nav-link dropdown">
              <div class="circle">
                <font-awesome-icon :icon="['fas', 'user']" size="3x" />
              </div>
              <ul class="dropdown-content">
                <router-link
                  :to="'/' "
                  class="nav-link"
                >
                Bienvenue, {{ currentUtilisateur.raisonSociale }}
                </router-link>
      
                <router-link to="/"
                @click="methGeneralEvent"
                >
                  Déconnexion
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
        <div v-else>
          <div class="head-home">
            <div class="connect">
              <router-link to="/connect" class="nav-link"
                >Connexion</router-link
              >
              <router-link to="/inscription" class="nav-link"
                >Inscrivez-vous</router-link
              >
            </div>
          </div>
        </div>
        <label for="check" class="close-menu"><font-awesome-icon :icon="['fas', 'Rectangle-Xmark']" size="2x" /></label>
    </span>
          <label for="check" class="open-menu"><font-awesome-icon :icon="['fas', 'bars']" size="3x" /></label>
       
      </ul>
    </nav>
      
    </header>
    </div>
    <div v-else>

      <header  >
      <div class="logo">
        <router-link to="/">
          <img class="logoimg" src="@/assets/logo1.jpg" alt="Logo de l'application"
        /></router-link>
      </div>
      <nav class="navbar">
        <router-link to="/categorieProductAdmin">Utilisateurs</router-link>
        <router-link to="/categorieProductAdmin">Tous les Produits</router-link>
        <router-link to="/categorieProductAdmin">Catégories</router-link>
        <router-link to="/categorieProductAdmin">Commandes</router-link>
   
          <div v-if="isVisible">
            <ul class="nav-dropdown">
            
              <li class="nav-link dropdown">
                <div class="circle">
                  <span style=" color: Tomato;">
                  <font-awesome-icon :icon="['fas', 'user']" size="3x" /> </span>
                </div>
                <ul class="dropdown-content">
                  <router-link
                    :to="'/categorieProductAdmin' "
                    class="nav-link"
                  >
                  Bienvenue, {{ currentUtilisateur.raisonSociale }}
                  </router-link>
                  <router-link to="/categorieProductAdmin"
                  @click="methGeneralEvent"
                  >
                    Déconnexion
                  </router-link>
                </ul>
              </li>
            </ul>
          </div>
      </nav>
    </header>
    </div>



 




</template>

<script>



   
export default {
 
 props: {
    currentUtilisateur: {
            type: Object,
            required: true
        },
        currentUtilisateurCommande: {
            type: Object,
            required: true
        },
        isVisible:{
            type:Boolean
        },
        isUser:{
            type:Boolean
        }
        
    },


  methods: {
    getCatégories(categoriesId) {
      this.$router.push({
        name: "categorieproduits",
        params: { id: categoriesId },
      });
    },
    getUser() {
    console.log("getuserheader"+this.currentUtilisateur.raisonSociale);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    methGeneralEvent() {

            this.$emit('deconnexionEventBtn');
        },
   quantitePanier(){
    if(this.currentUtilisateurCommande && this.currentUtilisateur){
     return this.currentUtilisateurCommande.produits.length
    }
   }
    // deconnecterCurrentUser() {
    //   this.$store.commit("setCurrentUtilisateur", 0);
    //   this.$router.push({
    //     name: "home"
    //   });

   
    // },

  
},


  computed: {
    categories() {
      return this.$store.state.categories;
    },
    // currentUtilisateur() {
    //   return this.$store.state.getCurrentUtilisateur;
    // },
    // currentUtilisateurCommande() {
    //   return this.$store.getters.getCurrentUtilisateurCommande;
    // },
  }
  

  
  
};
</script>

<style lang="scss">
.logo {
  display: inline;
  
}
.logo img{
  width:100%;
}
header {
  display: flex;
height: 100px;
  // justify-content: space-between;
  align-items: center;

  width: 100%;
}
.no-scroll {
  overflow: hidden;
}
.partie-nav{
  height: 100%;
}


.nav-bar {
  width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: relative;
    position:fixed;
    z-index: 1;
    padding: 12px 20px;
}
.menu {
display: flex;
}

.menu li a{
  display: inline-block;
    text-decoration: none;
    color: white;
    font-weight: 100;
    text-align: center;
    transition: 0.15s ease-in-out;
    position: relative;
    text-transform: uppercase;
}
.menu li a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: 0.1s ease;
}
.menu li a:hover:after {width: 100%;}
.open-menu , .close-menu {
    position: absolute;
    color: black;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
}
.open-menu {
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
.close-menu {
    top: 20px;
    right: 20px;
}
  a {
    font-weight: bold;
    color: #3b3b3b;
    text-decoration: none;
    // padding: 10px;
  }

  a:hover {
    color: #9abf72;
  }
  .nav-link {
    text-decoration: none;
    font-weight: bold;
    color: #3b3b3b;

    display: inline;
    margin: 0;
  }


  /* Menu déroulant */
  .nav-dropdown {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown {
    position: relative;

  }
  .dropdown:hover {
    color: #9abf72;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0;
  }

  .dropdown-content a {
    display: block;
    // padding: 10px;
  }
  .dropdown-content a:hover {
    background-color: #ada99b;
    color: #9abf72;
  }

  .dropdown-content div {
    display: block;
    // padding: 10px;
  }
  .dropdown-content div:hover {
    background-color: #ada99b;
    color: #9abf72;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }


.circle {
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 50%;
  margin: auto;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
}


.open-menu , .close-menu {
    position: absolute;
    color: black;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
}
.open-menu {
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
.close-menu {
    top: 20px;
    right: 20px;
}

#check {display: none;}

@media(max-width: 610px){
    .menu {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 55vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        background-color: grey;
        transition: all 0.2s ease-in-out;
    }
    .nav-link {
      padding: 0px;
    }
  
    .connect {
      flex-direction: column;
    }

    .open-menu , .close-menu {
      display: block;
    }
    #check:checked ~ .menu {right: 0;}
}

</style>
