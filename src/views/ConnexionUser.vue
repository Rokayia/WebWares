<template>
  <MyHeader />
  <div class="containerConnexion">
    
      <div class="containerConnect">
    <h1>CONNEXION</h1>
    <label for="email">E-MAIL</label>
    <input type="text" placeholder="Votre e-mail" id="email" v-model="verifUser.email">
    <label for="password">MOT DE PASSE</label>
    <input type="password" placeholder="Votre mot de passe" id="password" v-model="verifUser.motDePasse">
    <p class="erreurConnect">{{ erreur }}</p>
    <BtnConnexion label="VALIDER" backgroundColor="ValiderConnexion" @click="ValiderUser()"/>
  </div>
  
  </div>
  <myFooter/>
</template>

<script>
import BtnConnexion from '@/components/btnLandingPage.vue'
import MyHeader from '@/components/GeneralHeader.vue'
import myFooter from '@/components/myFooter.vue'

export default {

 

  data(){

return{


verifUser:{

},
erreur:''
}
  },



    components:{
        BtnConnexion,
        MyHeader,
        myFooter
    },

    methods:{

    
      ValiderUser(){
        let trouve = false
        this.utilisateurs.forEach(user => {
         console.log("user" + user) ;
         if(user.email === this.verifUser.email && user.motDePasse === this.verifUser.motDePasse){
            this.$store.commit('setCurrentUtilisateur',user)
            this.$router.push('/')
            trouve = true
          }
        
        })
        if(trouve === false){
          this.erreur = 'email ou mot de passe incorrect'
        }
        
        

      }

    },

     computed: {
      utilisateurs() {
      return this.$store.getters.getUtilisateurs;
    },

   
  },

}
</script>

<style>
.containerConnexion{
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.containerConnect{
  max-width: 600px;
  width: 30%;
  padding: 35px;
  display: flex;
  flex-direction: column;  
 
}
.containerConnect h1{
  color: #A7C28A;
  
}

.containerConnect label{
  margin: 60px 0px 10px 0px;

}

.containerConnect input{
  text-align: center;
  height: 40px;
  border: none;
  outline: 2px solid #A7C28A;
  border-radius: 5px;

}
.erreurConnect{
  color: red;
}

</style>