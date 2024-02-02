<template>

  <!-- <div v-if="currentUtilisateur==null">
    <div class="head-home">
      <div class="connect">
        <router-link to="/listProducts" class="nav-link">Connexion</router-link>
        <router-link to="/listProducts" class="nav-link"
          >Inscrivez-vous</router-link
        >
      </div>
    </div>
  </div> -->
  <header v-bind="idcurrentUtilisateur">
    <div class="logo">
      <router-link to="/">
        <img class="logoimg" src="@/assets/logo1.jpg" alt="Logo de l'application"
      /></router-link>
    </div>
    <nav class="navbar">
      <router-link to="/">Accueil</router-link>
      <router-link to="/listProducts">Tous les Produits</router-link>
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
      <!-- <div v-if="currentUtilisateur!=null"> -->
        <!--Menu déroulant -->
        <!-- <ul class="nav-dropdown">
          <li class="nav-link dropdown">
            <div class="circle">
              <font-awesome-icon :icon="['fas', 'user']" size="3x" />
            
            </div>
            <ul class="dropdown-content">
              <router-link to="/" 
                >Bienvenue, {{ currentUtilisateur.raisonSociale }}</router-link
              >
              <router-link to="/" v-on:click="deconnecterCurrentUser()">
                Déconnexion
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else></div> -->
    </nav>
  </header>
</template>

<script>
export default {
      props:{
  idcurrentUtilisateur:Number,
          
      },
  methods: {
    getCatégories(categoriesId) {
      this.$router.push({
        name: "categorieproduits",
        params: { id: categoriesId },
      });
    },
    getUser() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
  },
  
};
</script>

<style lang="scss">
.logo {
  display: inline;
  
}
.logoimg{
  width:100%;
}
header {
  display: flex;

  // justify-content: space-between;
  align-items: center;

  width: 100%;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 16px;

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
    padding: 10px;
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
    display: inline-block;
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
  .dropdown:hover .dropdown-content {
    display: block;
  }
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
</style>
