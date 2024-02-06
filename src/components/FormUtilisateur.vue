<template>
    
    <div class="containerFormulaire">
        <div class="infosUtilisateurs">
            <form action="">
                <h3 class="titleForm">Informations de livraison</h3>

                <div class="infosPerso">
                    
                    <label class="label" for="idRaisonSociale">Raison Sociale</label>
                    <input class="espacement" type="text" name="raisonSocialePerso" id="idRaisonSociale" placeholder="Raison Sociale" :value="currentUtilisateur.raisonSociale" readonly>

                    <label class="label" for="idSiret">SIRET</label>
                    <input class="espacement" type="text" name="siretPerso" id="idSiret" placeholder="SIRET" :value="currentUtilisateur.siret" readonly>

                    <label class="label" for="idEmail">Email</label>
                    <input class="espacement" type="text" name="emailPerso" id="idEmail" placeholder="Email" :value="currentUtilisateur.email" readonly>

                    <!-- <input class="espacement" type="text" name="motDePassePerso" id="" placeholder="Mot de passe" :value="currentUtilisateur.motDePasse" readonly> -->
                    <!-- <input class="espacement" type="text" name="rolePerso" id="" placeholder="rôle" :value="currentUtilisateur.role" readonly> -->
                </div>

                <div class="infosAdresse">

                    <label class="label" for="idCodePostal">Code Postal</label>
                    <input class="espacement" type="text" name="codePostal" id="idCodePostal" placeholder="Code Postal" :value="currentUtilisateur.codePostal" readonly>

                    <label class="label" for="idVille">Ville</label>
                    <input class="espacement" type="text" name="ville" id="idVille" placeholder="Ville" :value="currentUtilisateur.ville" readonly>

                    <label class="label" for="IdAdresse">Adresse</label>
                    <input class="espacement" type="text" name="adresse" id="IdAdresse" placeholder="Adresse (exemple : 12 rue de Nulle Part)" :value="currentUtilisateur.adresse" readonly>

                </div>
                <!-- <div class="btnFormulaire">
                    <button type="button">CONTINUER</button>
                </div> -->
            </form>
        </div>
    </div>

</template>


<script>

export default {
    props: {
        currentUtilisateur: {
            type: Object,
            required: true
        }

    }
}

</script>

<style>

.containerFormulaire {
    width: 500px;
    height: 600px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 35px auto;
    flex-direction: column;
    border: 2px solid rgb(185, 185, 185);
    box-shadow: 0 0 10px 0 rgb(185, 185, 185);;
    border-radius: 5px;
    
}

.titleForm{
    color: rgb(0, 0, 0);
    text-align: center;
    /* background-color: rebeccapurple; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-self: flex-start;
    font-size: 25px;

  

}

.infosPerso{
    /* background-color: blueviolet; */
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Détermine le nombre de colonnes en fonction de l'espace disponible */
    /* gap: 10px; */
}

.infosAdresse{
    text-align: center;
    /* background-color: rgb(174, 192, 16); */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    /* gap: 10px; */
}

.infosAdresse input {
    margin-bottom: 15px;
}

.infosUtilisateurs{
    display: flex;
    align-items: center;
    justify-content: center;
}

.infosPerso,
.infosAdresse,
.btnFormulaire {
 
    text-align: center;
}
/* 
#IdAdresse{
    width: 380px;
} */

.espacement {
    /* padding: 5px; */
    margin: 5px;
    background-color: transparent;
    border: none;
    border-bottom: 1px dashed #474747;
    outline: none;
    padding-bottom: 1px;
    text-align: center;
}

.infosPerso input {
    margin-bottom: 15px;
}

.btnFormulaire{
    display: flex;
    align-items: center;
    justify-content: end;
}

.btnFormulaire button{
    background-color: rgb(209, 209, 209);
    color: rgb(114, 114, 114);
    margin-right: -50px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    border-radius: 3px;
    width: 150px;
    height: auto;
    border: none;
    font-size: large;
    margin-bottom: 100px;
}

.btnFormulaire button:hover {
    background-color: #a5a5a5;
}

.label {
    /* background-color: aqua; */
    color: #a5a5a5;
    justify-content: center;
    align-items: center;
    font-size: small;
   
    
}
@media(max-width: 600px){
    .containerFormulaire{
        width: 350px;
    }

}
@media(max-width: 600px){
    .containerFormulaire{
        width: 300px;
    }
    .titleForm{
        font-size: 1.5rem;
    }
}


</style>