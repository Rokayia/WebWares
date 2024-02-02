<template>
  <header>
    <!-- <div>
    <a href="#" v-on:click.prevent="showDropDown=!showDropDown">
      <div>Catness</div>
      <img src="@/assets/logo1.jpg" alt="avatar">
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" class="fa" aria-hidden="true"></i>
    </a>
    <div v-if="showDropDown">
      <ul class="menu list pl0 pa0 ma0">
        <li v-for="link in links" class="list" :key="link.name">
          <a href="#" class="dd-link pointer hover-bg-moon-gray">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div> -->
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo1.jpg" alt="Logo de l'application"
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
            <div   v-for="category in categories"   :key="category.id">
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

      <!-- <div>{{ utilisateurs[0].raisonSociale }}</div> -->
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
      links: [
        {
          name: "Account",
        },
        {
          name: "Profile",
        },
        {
          name: "Logout",
        },
      ],
    };
  },
  methods: {
    getCatégories(categoriesId) {
      this.$router.push({ name: "categorieproduits", params: { id: categoriesId } });
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
  computed: {
    ...mapState(["utilisateurs"]),
    categories() {
      return this.$store.state.categories;
    },
  },
  mounted() {
    this.$store.dispatch("loadUtilisateurs");
  },
  
};

</script>

<style lang="scss">
.logo {
  display: inline;
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
</style>
