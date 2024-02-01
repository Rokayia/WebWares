<template>
  <div>
    <form >
        <label for="name">{{ name }}</label>
    <input type="text" id="name">

    <label for="email">{{ email }}</label>
    <input type="text" id="email">

    <label for="message">{{ msg }}</label>
    <textarea  id="message" ></textarea>

    </form>
  </div>
</template>

<script>
export default {
    props:{
        name: String,
        email: String,
        msg: String,
       

    },

}
</script>

<style>
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 500px;
  width: 100%;
  gap: 20px;
 

}

form input{
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;

}

form textarea{
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  resize: none;
  outline: none;
}

</style>