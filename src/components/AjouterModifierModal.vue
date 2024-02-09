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
      
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.616);
  
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
  }
  
  .modal{max-width: 600px;
    height: 100%;
    width: 100%;
      background-color: white;
      margin-top: 10px;
      border-radius:10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      max-height: 700px;
  }
  .iconModalClose{
   position: absolute;
     top: 10px;
     right: 10px;
     cursor: pointer;
     color: black;
     font-size: 25px;
     z-index: 10;
  }
  .containerModal{
    height: 100%;
    width: 100%;
  
   
    
  }
  </style>