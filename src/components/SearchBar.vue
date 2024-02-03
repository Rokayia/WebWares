<template>
    <div class="searsh">
        <input type="text" placeholder="Votre recherche" @input="onSearch" v-model="this.query">
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              query:''
          }
      },
  
      methods:{
          onSearch(){
             this.$store.commit('setQuery', this.query)
          }
  
      }
  
  }
  </script>
  
  <style>
  .searsh input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
background-color: #f4efeb;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
  </style>