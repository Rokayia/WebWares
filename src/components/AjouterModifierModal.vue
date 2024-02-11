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
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.616);  
      height: 100vh;                                         
      width: 100%;
      display: flex;
      justify-content: center;                                             
      align-items: center;
      margin-top: 0px;
  }
  
  .modal{
      max-width: 600px;
      height: 650px;
      width: 100%;
      background-color: white;
      border-radius:10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      max-height: 650px;
      position: relative;
      margin: 5px;
      font-family: cursive;
      
  }
  .iconModalClose{
    position: absolute;
     right: 0;
     margin: 8px;
     cursor: pointer;
     color: black;
     font-size: 25px;
     z-index: 10;
  }
  @media  (max-width: 630px) {
    .modal{
        width: 100%;
    }
    .formModalModif h2 {
        font-size: 1rem;
    }
    .info_Modal {
       width: 100%;
    }

  }
  </style>