<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    :currentUtilisateurCommande="currentUtilisateurCommande" 
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="false"
    :is-user=" true"
  />

  <div class="containerConnexion">
    <div class="containerConnect">
      <h1>CONNEXION</h1>
      <label for="email">E-MAIL</label>
      <input
        type="text"
        placeholder="Votre e-mail"
        id="email"
        v-model="verifUser.email"
      />
      <label for="password">MOT DE PASSE</label>
      <input
        type="password"
        placeholder="Votre mot de passe"
        id="password"
        v-model="verifUser.motDePasse"
      />
      <p class="erreurConnect">{{ erreur }}</p>
      <BtnConnexion
        label="VALIDER"
        backgroundColor="ValiderConnexion"
        @click="ValiderUser()"
      />
    </div>
  </div>
  <myFooter />
</template>

<script>
import BtnConnexion from "@/components/btnLandingPage.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      verifUser: {},
      erreur: "",
      isConnected: false,
      // isUser: true,
    };
  },

  components: {
    BtnConnexion,
    MyHeader,
    myFooter,
  },

  methods: {
    IsUser(){
      if(this.currentUtilisateur && this.currentUtilisateur.role=='USER'){
        return true;
      }else{
        return false;
      }
    },
    ValiderUser() {
      let trouve = false;
      this.utilisateurs.forEach((user) => {
       
        if (
          user.email === this.verifUser.email &&
          user.motDePasse === this.verifUser.motDePasse
        ) {
          this.verifUser=user;
          console.log("verifuser" + this.verifUser);
          trouve = true;
        }
      });
      if (trouve === false) {
        this.erreur = "email ou mot de passe incorrect";
      }

      if (this.verifUser.role === "USER") {
        console.log("dans USER");
            this.$store.commit("setCurrentUtilisateur", this.verifUser);
            console.log("apres commiy USER");
            this.$store.commit("setCurrentUtilisateurCommande");
            this.$router.push("/");
            trouve = true;
          } else if(this.verifUser.role === "ADMIN"){
            console.log("dans ADMIN");
            this.$store.commit("setCurrentUtilisateur", this.verifUser);
            this.$router.push("/ListUsers");
            
          }
    },
    isHere(){
      if(this.currentUtilisateur){
        return true;
      }else{
        return false;
      }
    }
  },

  computed: {
    utilisateurs() {
      return this.$store.getters.getUtilisateurs;
    },
    currentUtilisateur() {
     
     return this.$store.getters.getCurrentUtilisateur;
   },
   currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },

  },
    mounted() {
      // this.$store.dispatch("loadProds")
    //   this.$store.dispatch("loadCommandes");
    // this.$store.dispatch("loadUtilisateurs"),
    // this.$store.dispatch("oneUtilisateur")
    // this.$store.dispatch("oneUtilisateurCommande")
  },
};
</script>

<style>
.containerConnexion {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.containerConnect {
  max-width: 600px;
  width: 50%;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a7c28a28;
  box-shadow: 0px 0px 10px 1px #00000029;
}
.containerConnect h1 {
  color: #a7c28a;
}

.containerConnect label {
  margin: 60px 0px 10px 0px;
}

.containerConnect input {
  text-align: center;
  height: 40px;
  width: 200px;
  border: none;
  outline: 2px solid #a7c28a;
  border-radius: 5px;
}
.erreurConnect {
  color: red;
}
</style>
