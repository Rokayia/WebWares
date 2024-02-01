<template>
   <div class="container-inscription" >
    <h1>Inscription</h1>
    <p>Déjà Inscrit ? Connectez-vous</p>
    <div class="container-form">
        
        <div class="card1">
  <label for="RaisonSocial">Raison sociale (nom complet de l’entreprise)</label>
    <input type="text" id="RaisonSocial" placeholder="WebWares">

    <label for="NumeroSiret">Numéro de Siret</label>
    <input type="number" id="NumeroSiret" placeholder="ex: 12345678901234">

    <label for="Adresse">Adresse complete de l’entreprise </label>
    <input type="text" id="Adresse" placeholder="Adresse">
    <input type="number" id="Adresse" placeholder="Code postal">
    <input type="text" id="Adresse" placeholder="Ville">
</div>
     <div class="card2">
    <label for="email">ADRESSE EMAIL</label>
    <input type="text" id="email" placeholder="Mail">

    <label for="password">MOT DE PASSE</label>
    <input type="password" placeholder="Votre mot de passe" id="password">
    <label for="ConfirmPassword">CONFIRMATION DE MOT DE PASSE</label>
    <input type="password" placeholder="Confirmez votre mot de passe" id="ConfirmPassword">
    <BtnInscription label="VALIDER" backgroundColor="ValiderInscription"/>
</div>
</div>
    </div>
</template>

<script>
import BtnInscription from '@/components/btnLandingPage.vue'
export default {
    components:{
        BtnInscription
    },
   

    

}
</script>

<style>
.container-inscription{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 600px;
    margin: 0 auto;
  
}

.card1{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}
.card2{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.container-form{
    background-color: #F1F1F1;
    max-width: 1200px;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.container-form label{
    margin-top: 30px;
    text-transform: uppercase;
}

.container-form input{
    margin-top: 10px;
    text-align: center;
    width: 50%;
    height: 30px;
    border-radius: 5px; 
    outline: none;
    border: none;  

}
.container-form input:focus{
    outline: 2px solid #7d9167;
}



</style>