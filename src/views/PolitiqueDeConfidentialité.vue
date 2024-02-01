<template>
       <div class="head-home">
      <div class="connect">
       <router-link to="/listProducts" class="nav-link">Connexion</router-link>
        <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
        </div>
      <MyHeader />
  
  
  
    </div>
    <div class="confidentialite">
        <h1>Politique de confidentialité</h1>
        <br><br>
        <h2>Données personnelles</h2>
        <p> DocumentsLégaux s’engage à protéger votre vie privée et à assurer que votre visite sur notre site web soit complètement sécurisée.
        
        Si vous avez des questions ou des problèmes concernant notre politique de confidentialité ou son application, veuillez contacter notre responsable de la confidentialité ou la Commission nationale de l’informatique et des libertés. </p>
        <p> Pour maintenir la sécurité de vos données personnelles, nous utilisons pour la transmission d’informations confidentielles un protocole SSL avec cryptage de 128 bits ou plus. Il s’agit de la technologie utilisée par les banques, les gouvernements, et les sites comme eBay et Amazon pour la transmission d’informations confidentielles. </p>
        <p> Les informations qui se trouvent dans notre système ne sont accessibles que par les employés autorisés de DocumentsLégaux. Nos employés sont tenus de respecter notre politique de manière stricte et toute violation de cette politique résulte en cessation d'emploi et, le cas échéant, en poursuite en justice. </p>
        <p> Nous n’utilisons vos données personnelles que pour vous fournir les produits et les services que vous demandez. Cela comprend l’utilisation de vos données pour la réalisation de transactions ou pour vous adresser des communications ultérieures. Les numéros de cartes de crédit ne sont utilisés que pour le traitement des paiements et ils ne sont utilisés à aucune autre fin. </p>
        <p> Nous pouvons également utiliser vos données personnelles d’une manière qui ne permet pas votre identification ni n’autorise des tiers à vous contacter, mais qui permet d’identifier certains critères généraux concernant les utilisateurs de notre site web (nous pouvons par exemple informer des tiers du nombre d’utilisateurs inscrits, du nombre de visiteurs uniques, et des pages qui sont les plus fréquemment parcourues). </p>
        <br><br>
        <h3> Partage de vos données personnelles </h3>
        
        <p> Nous ne vendons ni ne louons votre identité ou vos données personnelles. Nous ne vendons ni ne louons notre liste de diffusion à des prestataires extérieurs. </p>
        <p> DocumentsLégaux ne divulguera pas vos données personnelles aux autorités à moins qu’elles ne soient exigées par la loi, mandat de perquisition, ordonnance de tribunal, assignation, ou enquête pour fraude. </p>
        <p> DocumentsLégaux ne partagera vos informations avec des tiers que dans le but de vous fournir les services et les produits que vous demandez. Tous les tiers ont l’interdiction formelle d’utiliser vos données personnelles sauf lorsqu’il s’agit de vous fournir ces services et il leur est demandé de respecter la confidentialité de vos données. </p>
        <p> DocumentsLégaux sauvegarde uniquement les données personnelles nécessaires à l’accès et l’utilisation de nos services. Ces données personnelles comprennent notamment les informations suivantes : nom et prénom, adresse email, numéro de téléphone, et autres informations de traitement des paiements ainsi que les données de création de documents. Sur demande de votre part, nous supprimerons vos données personnelles. </p>
    </div>
    <br> <br> <br>
    <myFooter/>
</template>


<script>
import myFooter from '@/components/myFooter.vue'
import MyHeader from '@/components/GeneralHeader.vue'
export default {
    components:{

   
MyHeader,
myFooter,


}
}
</script>

<style>
.confidentialite {
    height: 100%;
        background-color: white;

        

}

.confidentialite h1,
h2,
h3 {
    text-align: center;
    color: rgb(0, 0, 0);
    margin-bottom: 20px;
    margin-top: 10px;
}

.confidentialite p {
    color: rgb(0, 0, 0);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: justify;
    margin: 0 auto;
    max-width: 1200px;
    width:100%;
}</style>