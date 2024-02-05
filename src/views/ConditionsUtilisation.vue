<template>
      
      <MyHeader
    :currentUtilisateur="currentUtilisateur"
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser"
  />
  
    <div class="utilisation">
        <h1>Conditions d'utilisation</h1>
        <br><br>
        <h2>Fournisseur de services</h2>
        <p>Dans l'Espace économique européen (EEE) et en Suisse, les services Google vous sont fournis par la société ci-dessous avec laquelle vous concluez un contrat :
        Google Ireland Limited
        société de droit irlandais immatriculée en Irlande
        (Numéro d'immatriculation : 368047/Numéro de TVA : IE6388047V)
        Gordon House, Barrow Street
        Dublin 4
        Irlande</p>
        <br><br>
        <h2>Limite d'âge</h2>
        <p>Si vous n'avez pas atteint la limite d'âge pour gérer votre propre compte Google, vous devez avoir l'autorisation d'un parent ou d'un représentant légal pour utiliser un compte Google. Veuillez demander à un parent ou à un représentant légal de lire les présentes conditions avec vous.
        Si vous êtes un parent ou un représentant légal, et si vous autorisez votre enfant à utiliser les services, les présentes conditions s'appliquent à vous, et vous êtes responsable des activités de votre enfant sur ces services.
        Certains services Google prévoient une limite d'âge indiquée dans leurs Conditions supplémentaires spécifiques.</p>
        <br><br>
        <h2>Votre relation avec Google</h2>
        <p>Les présentes conditions d'utilisation contribuent à déterminer la nature de votre relation avec Google. D'une manière générale, nous vous autorisons à utiliser nos services si vous acceptez de respecter ces conditions, qui reflètent le fonctionnement des activités de Google et la façon dont nous nous rémunérons. Par les termes "Google", "nous", "nos" et "notre", nous désignons Google Ireland Limited et ses sociétés affiliées.</p>
    </div>
    <br><br><br>
    <footerVue/>

</template>


<script>
import footerVue from '@/components/myFooter.vue'
import MyHeader from '@/components/GeneralHeader.vue'
export default {
    data() {
    return {
      isConnected: false,
      isUser: true,
    };
  },
    components: {
        footerVue,
        MyHeader,
    }

    ,
  methods:{
   
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes",this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande",1);
      this.$router.push({
        name: "conditionsutilisation"
      });
    location.reload();
   
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
    currentUtilisateur() {
     
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },

  },
  mounted() {
    
    this.$store.dispatch("loadUtilisateurs"),
    this.$store.dispatch("oneUtilisateur")
  },

};
</script>

<style>
.utilisation {
    height: 100%;
        background-color: white;

}

.utilisation h1,
h2,
h3 {
    text-align: center;
    color: rgb(0, 0, 0);
    margin-bottom: 20px;
    margin-top: 10px;
}

.utilisation p {
    color: rgb(0, 0, 0);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: justify;
    margin: 0 auto;
  
    width:100%;
}
</style>