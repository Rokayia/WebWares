<template>
  
    <MyHeader/>

  <div class="titleAfficheListUsers">
    <h1>Liste Utilisateurs</h1>
  </div>
    <div class="containerGeneralGestionUser">
        <div class="cadre">
        <div class="cardsGestionUser" v-for="(element,index ) in utilisateurs" :key="index" v-bind="element.active" >
            

            <h3>{{ element.raisonSociale }}</h3>
            <h3>{{ element.siret }}</h3>
            <h3>{{ element.email }}</h3>
            <h3>{{ element.adresse }}</h3>
            <h3>{{ element.ville }}</h3>
            <h3>{{ element.codePostal }}</h3>
            
            <!-- faire un toggle button -->
            <div class="boxChangement"  >
                <div class="boxRaisonSocial">
           <p>USER</p>
        </div>
            <label class="switch" > 
            <input type="checkbox" @click="ToggleEvent(element)"  />
            <span class="slider round"></span>
            </label>
            <div class="boxAdmin">
            <p>ADMIN</p>
        </div>
           </div>

            
        </div>
        </div>
    </div>

   
<myFooter/>
  
 
</template>
 
<script>
import MyHeader from '@/components/GeneralHeader.vue'
import myFooter from '@/components/myFooter.vue'

export default {

    data(){
        return{
         
         
         
        
        }
    },
    components: {
        MyHeader,
        myFooter

    },

    methods:{
    
      ToggleEvent(toto){
        
            toto.active=!toto.active
            if(toto.active){
              toto.role= "ADMIN";
          
            }
            else{
              
              toto.role="USER"
            }

            this.$store.commit('setUtilisateur',this.utilisateurs)
            
        },
    },

    computed: {
        utilisateurs() {
      return this.$store.getters.getUtilisateurs;
    },
    roles() {
      return this.$store.getters.getRoles;
    },

},
mounted() {

  this.$store.dispatch("loadCommandes");
this.$store.dispatch("loadRoles")

  


}

}
</script>

<style>

.titleAfficheListUsers{
  margin-top: 40px;
}

.containerGeneralGestionUser{
    
    width: 100%;
    min-height: 100vh;
    
   
}
.cadre{
    max-width: 1100px;
    min-height: 90vh;
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
   flex-direction: column;
   background-color: #f1f1f170;
   gap: 40px;
   border-radius: 5px;
   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.281);
   
}
.cardsGestionUser{
    width: 90%;
    background-color:#bebab385;
    display: flex;
    flex-direction: column;
    margin: 20px 0px 20px 0px;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 500;
    text-transform: uppercase;
     
}
.cardsGestionUser:hover{
  background-color:rgba(0, 0, 0, 0.281);
  transition: 0.4s;
}
.boxChangement{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    min-width: 200px;
    background-color: #F1F1F1;
   
    
}
.boxChangement p{
    margin: 5px;
    
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}


.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}


.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bb0909;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #12ee42;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media(max-width: 450px){
      .titleAfficheListUsers{
        font-size: 12px;
      }
      .containerGeneralGestionUser{
        font-size: 10px;
      }
    }




</style>