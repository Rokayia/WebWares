<template>
  <h3>Vue.js Convert Image to Base64</h3>

    <input type="file" @change="convertToBase64" accept="image/*" />
    <br />
    <div v-if="showImage">
      <img :src="base64textString" :alt="imageName" />
    </div>
    <br />
    <textarea v-model="base64textString" rows="5"></textarea>
 
</template>

<script>

export default {
  data() {
        return {
          base64textString: '',
          imageName: '',
          showImage: false
        };
      },
      methods: {
        convertToBase64(event) {
          const file = event.target.files[0];
          this.imageName = file.name;
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.base64textString = reader.result;
            this.showImage = true;
          };
          reader.onerror = (error) => {
            console.log('Error: ', error);
          };
        }
      }

}
</script>

<style>

</style>