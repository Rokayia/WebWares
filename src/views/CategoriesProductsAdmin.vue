<template>
    <MyHeader
     :currentUtilisateur="currentUtilisateur" 
     @deconnexionEventBtn="deconnecterCurrentUser" 
      :is-user="isUser" :is-visible="isHere()"/>
  

  <div>hello</div>
  <myFooter />
</template>

<script>
import myFooter from "@/components/myFooter.vue";
import MyHeader from "@/components/GeneralHeader.vue";
export default {
    data() {
    return {
      isConnected: false,
      isUser: false,
    };
  },
  components: {
    MyHeader,
    myFooter,
   
  },
  methods:{
   
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$router.push({
        name: "home"
      });
    location.reload();
   
    },
    isHere(){
      if(this.currentUtilisateur){
        return true;
      }else{
        return false;
      }
    },
  },
  computed: {
    currentUtilisateur() {
     
      return this.$store.getters.getCurrentUtilisateur;
    },

  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
          localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    this.$store.dispatch("loadUtilisateurs"),
    this.$store.dispatch("oneUtilisateur")
   
 
  },
};
</script>

<style>

</style>