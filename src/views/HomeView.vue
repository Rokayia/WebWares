<template>
  <div class="homepage" v-cloak>
    <MyHeader :currentUtilisateur="currentUtilisateur" :currentUtilisateurCommande="currentUtilisateurCommande"
      @deconnexionEventBtn="deconnecterCurrentUser" :is-visible="isHere()" :is-user="isUser()" />

    <div class="containerBienvenue">
      <div class="containerLandingPage">
        <div class="cardLeft">
          <div class="title-btn">
            <h1>
              Bienvenue sur WebWares votre solution de commande en ligne
              simplifié
            </h1>
            <btnLanding label="Dénichez vos meubles et objects déco, connectez-vous." backgroundColor="EnSavoirPlus" />
          </div>
        </div>
        <div class="cardRight">
          <video src="../video&PhotosLandingPage/LandingPageVideo.mp4" autoplay loop muted></video>
        </div>
      </div>
    </div>
    <div class="containerGe">
      <div class="containerFormContact">
        <div class="cardLeftForm">
          <img src="../video&PhotosLandingPage/cuisineLandingPage.jpg" alt="" />
          <h5>WebWares</h5>
          <p>15 place Georges Pompidou, 69150 Lyon</p>
          <p>0256487931</p>
          <p>contact-us@wares.fr</p>
        </div>
        <div class="cardRightFormContact">
          <h3>Une question ? Laissez nous savoir cela dans ce formulaire.</h3>
          <label for="name">NOM</label>
          <input type="text" id="name" />

          <label for="email">EMAIL</label>
          <input type="text" id="email" />

          <label for="message">MESSAGE</label>
          <textarea id="message"></textarea>

          <btnLanding label="Envoyer" backgroundColor="EnvoyerLandingPage" />
        </div>
      </div>
    </div>


    <myFooter />

  </div>
</template>

<script>
import btnLanding from "@/components/btnLandingPage.vue";
import myFooter from "@/components/myFooter.vue";
import MyHeader from "@/components/GeneralHeader.vue";

export default {
  data() {
    return {
      isConnected: false,
    };
  },

  // Composant utilisés dans le composant principal
  components: {
    MyHeader,
    myFooter,
    btnLanding,
  },
  methods: {
    isUser() {
      if (this.currentUtilisateur && this.currentUtilisateur.role == 'ADMIN') {
        return false;
      } else {
        return true;
      }
    },
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes", this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande", 1);
      this.$router.push({
        name: "home"
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
    currentUtilisateur() {

      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
   
  },
  mounted() {
    this.$store.dispatch("loadCommandes")
    this.$store.dispatch("loadUtilisateurs")
    this.$store.dispatch("loadProds")
    this.$store.dispatch("oneUtilisateur")
    this.$store.dispatch("oneUtilisateurCommande")
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      location.reload();
    }

  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

.homepage {

  width: 100%;
}

.containerBienvenue {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
}

.containerLandingPage {
  background-color: #f1f1f1;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cardLeft {
  height: 100%;
  width: 50%;
}

.title-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}


.title-btn h1 {
  font-size: 50px;
  text-align: left;
  margin-left: 25px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 400;
  margin-bottom: 85px;
}

.cardRight {
  height: 100%;
  width: 50%;
}

.cardRight video {
  height: 500px;
  width: 100%;
}

.cardRight img {
  height: 600px;
}

.containerGe {
  background-color: #f9f7f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 20px;
  margin: 0 auto;
}

.containerFormContact {
  max-width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.cardLeftForm {
  height: 100%;
  width: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cardLeftForm h5 {
  margin-bottom: 25px;
  font-size: 1.2rem;
}

.cardLeftForm p {
  text-align: center;
  width: 100%;
}

.cardRightFormContact {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cardRightFormContact label {
  margin-top: 25px;
}

.cardRightFormContact input {
  width: 50%;
  height: 30px;
}

.cardRightFormContact textarea {
  width: 80%;
  height: 200px;
  resize: none;
}

.connect {
  display: flex;
  flex-direction: column;

}

.connect a:hover {
  color: #7D9167;
}

.nav-link {
  font-weight: bold;

  color: #3b3b3b;
  text-decoration: none;
  display: block;
}

.nav-link:hover {
  color: #3b3b3b;
}

/* MediaQuery */
@media (max-width: 850px) {
  .containerGe {
    padding-bottom: 20px;
  }

  .title-btn h1 {
    font-size: 3rem;
  }

  .containerFormContact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .cardLeftForm {
    display: block;
    width: 600px;
    height: 600px;
    margin-bottom: 35px;
  }

  .cardLeftForm img {
    width: 100%;
  }

  .cardLeftForm h5 {
    margin-bottom: 25px;
    font-size: 1rem;
  }

  .cardLeftForm p {
    text-align: center;
    width: 100%;
  }

  .cardRightFormContact {
    width: 600px;
    height: 100%;
  }

}

@media (max-width: 655px) {
  .title-btn h1 {
    font-size: 2rem;
    text-align: center;
    margin: 8px 8px 50px 8px;
  }

  .cardLeft {
    width: 100%;
  }

  .title-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }

  .cardRight {
    display: none;
  }

  .cardRight video {
    display: none;
  }

  .cardLeftForm {
    display: block;
    width: 300px;
    height: 300px;
    margin-bottom: 35px;
  }

  .cardLeftForm img {
    width: 100%;
  }

  .cardRightFormContact {
    width: 100%;
  }
}</style>
