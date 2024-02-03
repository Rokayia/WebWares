<template>
<div class="homepage">
  
    <div class="head-home">
      <div class="connect">
       <router-link to="/connect" class="nav-link">Connexion</router-link>
        <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
        </div>
      <MyHeader />
  
  
  
    </div>
  
  
  <div class="containerBienvenue">
    <div class="containerLandingPage">
      <div class="cardLeft">
        <div class="title-btn">
      <h1>Bienvenue sur WebWares votre solution de commande en ligne simplifié</h1>
      <btnLanding  label="En Savoir Plus" backgroundColor="EnSavoirPlus"/>
    </div>
    </div>
    <div class="cardRight">
  
      <video src="../video&PhotosLandingPage/LandingPageVideo.mp4" autoplay loop muted ></video>
  
  
    </div>
    </div>
  </div>
    <div class="containerGe">
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
      <label for="name">NOM</label>
      <input type="text" id="name">

      <label for="email">EMAIL</label>
      <input type="text" id="email">

      <label for="message">MESSAGE</label>
      <textarea  id="message" ></textarea>

      <btnLanding  label="Envoyer" backgroundColor="EnvoyerLandingPage"/>
  
    </div>
    </div>
  </div>
  
  
  <div>
  <myFooter/>
  </div>
</div>


</template>

<script>

import btnLanding from '@/components/btnLandingPage.vue'
import myFooter from '@/components/myFooter.vue'
import MyHeader from '@/components/GeneralHeader.vue'
export default {




 // Composant utilisés dans le composant principal
  components:{

   
    MyHeader,
    myFooter,
    btnLanding,
    

  }

}
</script>

<style>
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
  
}
.homepage{

  max-width:1200;
  width:100%;
}

.containerBienvenue{
  display: flex;
  flex-direction: column;
  align-items: center;
   margin: 30px auto;

}

.containerLandingPage{
  background-color: #F1F1F1 ;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  
}
.cardLeft{
  height: 100%;
  width: 50%;
 
}

.title-btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
 
}
buuton {
  cursor: pointer;
}

.title-btn h1{
  font-size: 4rem;
  text-align:left;
  margin-left: 25px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 400;
  margin-bottom: 95px;
 
}
.cardRight{
  height: 100%;
  width: 50%;
  
}
.cardRight video{
  height: 500px;
  width: 100%;

}
.cardRight img{
  height: 600px;
 
}
.containerGe{
 background-color: #F9F7F4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 750px;
    margin: 0 auto;
}
.containerFormContact{
  
    max-width: 1500px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px ;
}

.cardLeftForm {
  height: 100%;
  width: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
}
.cardLeftForm h5{
  margin-bottom: 25px;
  font-size: 1.2rem;
}

.cardLeftForm p{
  text-align: center;
  width: 100%;
}
.head-home{
  max-width:1200px;
  width:100%;
  margin-top:20px;
}
.cardRightFormContact{
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cardRightFormContact label{
  margin-top: 25px;
}

.cardRightFormContact input{
  width: 50%;
  height: 30px;
}
.cardRightFormContact textarea{
  width: 80%;
  height: 50%;
  resize: none;
}

.connect {

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
      color: #3b3b3b;
 
}

/* MediaQuery */
@media (max-width:850px){

  .containerGe{
    height: 900px;
    padding-bottom: 20px;
  }
  .title-btn h1{
    font-size: 3rem;
  }

  .containerFormContact{
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px ;
    
  }
  .cardLeftForm{
    display:block;
    width: 600px;
    height: 600px;
    margin-bottom: 35px;
  }
  .cardLeftForm img{
    width: 100%;
  }

  .cardLeftForm h5{
  margin-bottom: 25px;
  font-size: 1rem;
}

.cardLeftForm p{
  text-align: center;
  width: 100%;
}
.cardRightFormContact{
  width: 600px;
  height: 100%;


}

}

@media (max-width:655px){
  .title-btn h1{
    font-size: 2rem;
    text-align: center;
    margin: 8px 8px 50px 8px;
  }
  .cardLeft{
    width: 100%;

  }
  .title-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
  .cardRight {
    display: none;
  }
  .cardRight video{
    display: none;
  }
  .cardLeftForm{
    display:block;
    width: 300px;
    height: 300px;
    margin-bottom: 35px;
  
  }
  .cardLeftForm img{
    width: 100%;
  }

  .cardRightFormContact{
    width: 100%;
  }
  
}

</style>