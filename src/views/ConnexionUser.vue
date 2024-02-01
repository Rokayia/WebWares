<template>
  <div class="containerConnexion">
    
      <div class="containerConnect">
    <h1>CONNEXION</h1>
    <label for="email">E-MAIL</label>
    <input type="text" placeholder="Votre e-mail" id="email">
    <label for="password">MOT DE PASSE</label>
    <input type="password" placeholder="Votre mot de passe" id="password">
    <BtnConnexion label="VALIDER" backgroundColor="ValiderConnexion"/>
  </div>
  
  </div>
</template>

<script>
import BtnConnexion from '@/components/btnLandingPage.vue'
export default {

    components:{
        BtnConnexion,
    }

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

</style>