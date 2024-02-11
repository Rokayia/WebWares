<template>
  <div>
    <button v-show="showButton" :class="btnClass" @click="btnLandingPage">{{ label }}</button>
  </div>
</template>

<script>
export default {
    props:{
        label: String,
        backgroundColor: String,
        showButton:{
            type:Boolean,
            default:true
        }

    },

    methods:{
        btnLandingPage(){
            this.$emit("generalLandingPage")
        }
    },

    computed: {
        btnClass() {

        return {

            'EnSavoirPlus-btn': this.backgroundColor === 'EnSavoirPlus',
            'EnvoyerLandingPage-btn':this.backgroundColor === 'EnvoyerLandingPage',
            'ValiderConnexion-btn':this.backgroundColor === 'ValiderConnexion',
            'ValiderInscription-btn':this.backgroundColor === 'ValiderInscription',
            'AjouterPanier-btn':this.backgroundColor === 'AjouterPanier',
            'SupprimerPanier-btn':this.backgroundColor === 'SupprimerPanier',
            'ModifierBackOffice-btn':this.backgroundColor === 'ModifierBackOffice',
            'SupprimerBackOffice-btn':this.backgroundColor === 'SupprimerBackOffice',

          }

        }
    }

}
</script>

<style>
.ModifierBackOffice-btn{
    background-color: rgb(218, 182, 91);
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 9px;
    margin-bottom: 15px;
    width:110px;
    border-radius: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
     
}
.SupprimerBackOffice-btn{
    background-color: red;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 9px;
    margin: 10px;
    width:110px;
    border-radius: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
     
}
.EnSavoirPlus-btn{
    background-color: #7d9167;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    
}
.EnSavoirPlus-btn:hover{
    background-color: black;
    transition: 0.4s;
}
.EnvoyerLandingPage-btn{
    margin-top: 20px;
    background-color: #ADA99B;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    border:none;
    padding: 10px;
    border-radius: 3px;
    
}
.EnvoyerLandingPage-btn:hover{
    background-color: black;
    transition: 0.4s;
    
}

.ValiderConnexion-btn{
    background-color: #a7c28a;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 10px 30px 10px 30px;
    margin-top: 40px;
    border-radius: 5px;
    
}
.ValiderConnexion-btn:hover{
    background-color: black;
    transition: 0.4s;
}
.ValiderInscription-btn{
    background-color: #a7c28a;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 10px 30px 10px 30px;
    margin-top: 40px;
    border-radius: 5px;

}
.ValiderInscription-btn:hover{
    background-color: black;
    transition: 0.4s;
}
.AjouterPanier-btn{
    background-color: #7d9167;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 10px 30px 10px 30px;
    margin-top: 10px;
    border-radius: 5px;

}
.SupprimerPanier-btn{
    background-color: red;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border:none;
    padding: 10px 30px 10px 30px;
    margin-top: 3px;
    border-radius: 5px;

}
</style>