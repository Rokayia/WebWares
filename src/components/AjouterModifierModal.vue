<template>
    <div class="modal-overlay" v-if="isVisible">
      <div class="modal">
          <font-awesome-icon class="iconModalClose" @click="closeModal" :icon="['fas', 'xmark']" size="2x"/>
          <slot></slot>
      
      </div>
    </div>
  </template>
  
  <script>
 
  export default {
      data(){
          return{
           
          }
      },
      props:{
          isVisible:{
              type:Boolean
          },
           showCloseBtn:{
              type:Boolean,
              default: true
           }
      },
    
      methods:{
          closeModal(){
              this.$emit('close')
          }
      }
  
  }
  </script>
  
  <style>
  .modal-overlay{
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .modal{
      background-color: white;
      padding: 20px;
      border-radius:10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  }
  .iconModalClose{
margin-left: 400px;
  }
  </style>