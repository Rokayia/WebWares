<template>

  <footer>

    <div class="footerContainer">
  
      <div class="bloc footerService">
        <h3>Nos Services</h3>
        <ul class="listeServices">
          <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
          <li><router-link to="/politique-de-confidentialite">Politique de confidentialité</router-link></li>
          <li><router-link to="/conditions-utilisation">Conditions d'utilisation</router-link></li>

        </ul>  
      </div>
      
      <div class="bloc footerReseauxSociaux">
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





/* footer{
    border-top: 1px dashed black;
    width: 100%;
  background-color: rgb(201, 157, 157);
    color: #333;
} */

.footerContainer{
 max-width: 1200px;
  width:100%;
  margin: 0 auto;
  display: flex;
  background-color: #eadfd8; ;
  margin-top: auto;  align-items: flex-start;
  font-size: 20px;
  padding: 10px 0;
  /* margin-top: auto; */
}

.bloc {
    width: 25%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.footerService h3{
    font-size: 25px;
    padding-bottom: 20px;
    color: #333;
}

.listeMedia img{
    width: 50px;
}

.footerService li{
    list-style-type: none;
    /* padding: 2px 0; */
}
.footerService a{
    text-decoration: none;
    color: #333;
}
/* .footerService h3{
    padding-left: 40px;
} */

.footerReseauxSociaux ul{
    list-style-type: none;
}
/* .footerReseauxSociaux h3{
    padding-left: 40px;
} */
.footerReseauxSociaux {
  gap: 15px;
  text-decoration: none;
}

.listeMedia{
  display: flex;
  justify-content: space-between;
}
</style>