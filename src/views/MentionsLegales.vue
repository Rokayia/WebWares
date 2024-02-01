<template>

  
  <div class="head-home">
    <div class="connect">
     <router-link to="/listProducts" class="nav-link">Connexion</router-link>
      <router-link to="/listProducts" class="nav-link">Inscrivez-vous</router-link>
      </div>
    <MyHeader />
 </div>

    
    <div class="mentionLegal">
        <h1>Mentions Legales</h1>
        <br><br>
        <h2>Garantie légale</h2>
        
        <p>Si vous êtes un consommateur basé dans l'EEE et que vous avez accepté nos conditions d'utilisation, les lois de protection des consommateurs de l'EEE vous confèrent une garantie légale couvrant les contenus numériques, les services ou les biens que nous vous fournissons. En vertu de cette garantie, nous sommes responsables de tout défaut de conformité que vous constatez : </p>
        
        <p>Dans les deux ans qui suivent la livraison de biens (tels qu'un téléphone) ou la fourniture ponctuelle de contenus numériques ou de services (tels que l'achat d'un film) ;</p>
        <p>A tout moment au cours de la fourniture "continue" de contenus numériques ou de services (tels que Maps ou Gmail).</p>
        
        <p>Il se peut que les lois de votre pays prévoient une durée de garantie encore plus longue. Vos droits en vertu de ces garanties légales ne sont limités par aucune autre garantie commerciale que nous proposons. Si vous souhaitez effectuer une réclamation au titre de la garantie, veuillez nous contacter.</p>
        <br><br>
        <h2>Responsabilités</h2>
        <h3>Pour tous les utilisateurs</h3>
        <p>Nos responsabilités ne sont limitées par les présentes conditions d'utilisation que dans le cadre des lois applicables. Les présentes conditions d'utilisation ne limitent pas la responsabilité en cas de fraude, de déclarations trompeuses à caractère frauduleux ou de décès ou dommages corporels dus à une négligence ou à une faute délibérée.
        
        Hormis les responsabilités décrites ci-dessus, Google est seulement responsable de ses violations des présentes conditions d'utilisation ou des Conditions supplémentaires spécifiques à certains services applicables, sous réserve des lois applicables.</p>
           <br><br>
        <h3>Pour les utilisateurs professionnels et les organisations uniquement</h3>
        <p>Dans les limites autorisées par la loi applicable, vous vous engagez à indemniser Google et ses administrateurs, dirigeants, employés et sous-traitants en cas de procédure judiciaire engagée par un tiers (y compris en cas d'action émanant d'autorités publiques), lorsqu'une telle procédure résulte de votre utilisation illégale des services ou de la violation des présentes conditions d'utilisation ou des Conditions supplémentaires spécifiques à certains services. Cette indemnisation couvre toute responsabilité ou dépense découlant des demandes, pertes, dommages, jugements, amendes, frais de justice et frais juridiques.</p>
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
.mentionLegal{
    height: 100%;
        background-color: white;
       

}
.mentionLegal h1,h2,h3{
    text-align: center;
    color: rgb(0, 0, 0);
    margin-bottom: 20px;
    margin-top: 10px;
}
.mentionLegal p{
    color: rgb(0, 0, 0);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: justify;
    margin: 0 auto;
    max-width: 1200px;
    width:100%;
  
}
</style>