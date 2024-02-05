<template>

  <footer>

    <div class="footerContainer">
  
      <div class="blocfooterService">
        <h3>Nos Services</h3>
        <ul class="listeServices">
          <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
          <li><router-link to="/politique-de-confidentialite">Politique de confidentialité</router-link></li>
          <li><router-link to="/conditions-utilisation">Conditions d'utilisation</router-link></li>

        </ul>  
      </div>
      
      <div class="blocfooterReseauxSociaux">
        <h3>Nos réseaux</h3>
        <ul class="listeMedia">            
          <li><a href="https://www.facebook.com/">
            <img src="../assets/Facebook_f_logo_(2021).svg" alt="icones réseaux sociaux"> </a></li>
          <li><a href="https://www.twitter.com"><img src="../assets/Logo_of_Twitter.svg" alt="icones réseaux sociaux"> </a></li>
          <li><a href="https://www.linkedin.com"><img src="../assets/LinkedIn_icon.svg.png" alt="icones réseaux sociaux"></a></li>
        </ul>  
      </div>
    
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

footer{
    width: 100%;
    background-color: #eadfd8;
    color: #333;
} 

.footerContainer{
  max-width: 1100px;
  width:100%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  
  
  
}

.blocfooterService{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.listeMedia img{
    width: 40px;
}


.blocfooterReseauxSociaux {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.listeServices li{
  margin-top: 5px;
}
.listeServices a{
  color: grey;
  
}

.listeMedia{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
}

@media (max-width:485px){
  .listeServices a{
    font-size: 10px;
  }
  .blocfooterService h3{
    font-size: 18px;
  }
  .blocfooterReseauxSociaux h3{
    font-size: 18px;
}
.listeMedia img{
    width: 30px;
}
}


</style>