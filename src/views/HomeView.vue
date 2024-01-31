<template>

<div class="containerLandingPage">
  <div class="cardLeft">
  <h1>Bienvenue sur WebWares votre solution de commande en ligne simplifié</h1>
  <btnLanding  label="En Savoir Plus" backgroundColor="EnSavoirPlus"/>
</div>
<div class="cardRight">
  
  <video src="../video&PhotosLandingPage/LandingPageVideo.mp4" autoplay loop muted ></video>
 
  
</div>
</div>
<div class="containerFormContact">
  <div class="cardLeftForm">
  <img src="../video&PhotosLandingPage/cuisineLandingPage.jpg" alt="">
  <h5>WebWares</h5>
  <p>15 place Georges Pompidou, 69150 Lyon</p>
  <p>0256487931</p>
  <p>contact-us@wares.fr</p>
  
</div>
<div class="cardRightFormContact">
  <h3>Une question ? Laissez nous savoir cela dans ce formulaire.</h3>
  <formulaireLandingPage name="NOM" email="E-MAIL" msg="MESSAGE"/>
  <btnLanding  label="Envoyer" backgroundColor="EnvoyerLandingPage"/>
  
</div>
</div>
<div>
<btn/>
</div>
</template>

<script>
import formulaireLandingPage from '@/components/formulaireLandingPage.vue'
import btnLanding from '@/components/btnLandingPage.vue'
import btn from '@/components/myFooter.vue'
export default {

  components:{
    btn,
    btnLanding,
    formulaireLandingPage,
  }

}
</script>

<style>
.containerLandingPage{
  background-color: #F1F1F1 ;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  
  
}
.cardLeft{
  height: 100%;
  width: 50%;
  
}

.cardLeft h1{
  font-size: 4rem;
  text-align:center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 400;
}
.cardRight{
  height: 100%;
  width: 50%;
  
  
  
  
  
  
}
.cardRight video{
  height: 600px;
  
  
  
  

}
.cardRight img{
  height: 600px;
 
}

.containerFormContact{
  background-color: #F9F7F4 ;
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 45px;
}

.cardLeftForm{
  height: 100%;
  width: 50%;
  padding-top: 20px;
  
}

.cardRightFormContact{
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
}

</style>