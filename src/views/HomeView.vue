<template>
  <div class="head-home">
    <div class="connect">
     <router-link to="/listProducts" class="nav-link">Connexion</router-link>
      <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
      </div>
    <MyHeader />
   
      

  </div>
</template>

<script>
// Import des fonctions de Vuex et component

import MyHeader from '@/components/GeneralHeader.vue'
export default {
 // Composant utilisés dans le composant principal
  components:{
   
    MyHeader
  }

}
</script>

<style>

.connect {
  width: 99vw;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.nav-link{
  font-weight: bold;
    color: #3b3b3b;
    text-decoration: none;
    
    display: block;
  }

.nav-link:hover {
  color:#94e9b6;
}

</style>