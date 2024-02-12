<template>
  <MyHeader :currentUtilisateur="currentUtilisateur" :currentUtilisateurCommande="currentUtilisateurCommande"
    @deconnexionEventBtn="deconnecterCurrentUser" :is-visible="isHere()" :is-user="isUser()" />

  <div class="contGeneral">
    <div class="container-inscription">
      <h1>Inscription</h1>
      <p>Déjà Inscrit ? Connectez-vous</p>
      <div class="container-form">
        <div class="card1">
          <label for="RaisonSocial">Raison sociale (nom complet de l’entreprise)</label>
          <input type="text" id="RaisonSocial" placeholder="WebWares" v-model="checkUser.raisonSociale" />

          <label for="NumeroSiret">Numéro de Siret</label>
          <input type="number" id="NumeroSiret" placeholder="ex: 12345678901234" v-model="checkUser.siret"
            :class="{ 'is-error': error }" />
          <div class="error" v-if="error.length">
            <span v-for="(errors, index) in error" :key="index" class="is-error">{{ errors }}</span>
          </div>

          <label for="Adresse">Adresse complete de l’entreprise </label>
          <input type="text" id="" placeholder="Adresse" v-model="checkUser.adresse" />
          <input type="number" id="" placeholder="Code postal" v-model="checkUser.codePostal" />
          <input type="text" id="Adresse" placeholder="Ville" v-model="checkUser.ville" />
        </div>
        <div class="card2">
          <label for="email">ADRESSE EMAIL</label>
          <input type="text" id="email" placeholder="Mail" v-model="checkUser.email" />
          <div class="error" v-if="errmail.length">
            <span v-for="(errmail, index) in errmail" :key="index" class="is-error">{{ errmail }}</span>
          </div>

          <label for="password">MOT DE PASSE</label>
          <input type="password" placeholder="Votre mot de passe" id="password" v-model="checkUser.motDePasse" />
          <div class="error" v-if="errmp.length">
            <span v-for="(errmp, index) in errmp" :key="index" class="is-error">{{ errmp }}</span>
          </div>
          <label for="ConfirmPassword">CONFIRMATION DE MOT DE PASSE</label>
          <input type="password" placeholder="Confirmez votre mot de passe" id="ConfirmPassword"
            v-model="checkUser.confirmPassword" />
          <div class="error" v-if="errconfirmmp.length">
            <span v-for="(errconfmp, index) in errconfirmmp" :key="index" class="is-error">{{ errconfmp }}</span>
          </div>
          <BtnInscription label="VALIDER" backgroundColor="ValiderInscription" @click="getSiret()" />
        </div>
      </div>
    </div>
  </div>
  <myFooter />
</template>

<script>
import BtnInscription from "@/components/btnLandingPage.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      checkUser: {},
      commande: {},
      error: [],
      errmail: [],
      errmp: [],
      errconfirmmp: [],
      isConnected: false,
    };
  },
  components: {
    BtnInscription,
    MyHeader,
    myFooter,
  },

  methods: {
    isUser() {
      if (this.currentUtilisateur && this.currentUtilisateur.role == 'ADMIN') {
        return false;
      } else {
        return true;
      }
    },
    getSiret() {
      this.error = [];
      this.errmail = [];
      this.errmp = [];
      this.errconfirmmp = [];

      let regex = /^\d{14}$/;
      if (!regex.test(this.checkUser.siret)) {
        this.error.push("Numéro de siret est invalide");
      }
      let regex2 =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
      if (!regex2.test(this.checkUser.email)) {
        this.errmail.push("adresse email est invalide");
      }

      let regex3 =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
      if (!regex3.test(this.checkUser.motDePasse)) {
        this.errmp.push(
          "mot de passe est invalide : Au moins un caractère spécial, un chiffre , une majuscule et  minimum de 8 caractères"
        );
      }
      if (this.checkUser.motDePasse !== this.checkUser.confirmPassword) {
        this.errconfirmmp.push("le mot de passe ne correspondent pas");
      }
      if (
        this.error.length === 0 &&
        this.errmail.length === 0 &&
        this.errmp.length === 0 &&
        this.errconfirmmp.length === 0
      ) {
        this.checkUser.role = "USER";

        this.$store.commit("addUtilisateur", this.checkUser);

        this.commande.userId = this.lastUtilisateur;
        this.commande.coutTotal = 0;
        this.commande.produits = [];



        this.$store.commit("setCurrentUtilisateur", this.checkUser);
        this.$store.commit("addCommande", this.commande);

        this.$store.commit("setCurrentUtilisateurCommande", this.commande);

        this.checkUser = {};
        this.error = [];
        this.errmail = [];
        this.errmp = [];

        this.$router.push({
          name: "home",
        });
      }

    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes", this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande", 1);
      this.$router.push({
        name: "inscription",
      });
      location.reload();
    },
    isHere() {
      if (this.currentUtilisateur) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    lastUtilisateur() {
      return this.$store.getters.getLastUtilisateur;
    },
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
  },
};
</script>

<style>
.contGeneral {
  min-height: 100vh;
}

.container-inscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0px 30px 0px;

}

.card1 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card2 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.container-form {
  background-color: rgb(241, 245, 237);
  max-width: 1200px;
  width: 80%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 1px #00000029;
  margin-top: 20px;
}

.container-form label {
  margin-top: 30px;
  font-size: 12px;

  text-transform: uppercase;
}

.container-form input {
  margin-top: 10px;
  text-align: center;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  outline: 2px solid #a7c28a;
}

.container-form input:focus {
  outline: 2px solid #7d9167;
}

.error {
  width: 250px;

}

.is-error {
  color: red;
  font-size: 0.8rem;
}

@media(max-width:819px) {
  .container-form {
    display: flex;
    flex-direction: column;
    height: 100%;


  }
}
</style>
