<template>
  <div>
    <button :class="btnClass" @click="btnLandingPage">{{ label }}</button>
  </div>
</template>

<script>
export default {
    props:{
        label: String,
        backgroundColor: String,

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


          }

        }
    }

}
</script>

<style>
.EnSavoirPlus-btn{
    background-color: #7d9167;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    border:none;
    padding: 15px;
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

</style>