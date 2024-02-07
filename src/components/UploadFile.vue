<!-- <template>
    <div class="file">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div class="fields">
          <label>Upload File</label><br />
          <input type="file" ref="file" @change="onSelect" />
        </div>
        <div class="fields">
          <button>Submit</button>
        </div>
        <div class="message">
          <h5>{{ message }}</h5>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "FileUpload",
    data() {
      return {
        file: "",
        message: "",
      };
    },
    methods: {
      onSelect() {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        const file = this.$refs.file.files[0];
        this.file = file;
        if (!allowedTypes.includes(file.type)) {
          this.message = "Filetype is wrong!!";
        }
        if (file.size > 10000000) {
          this.message = "Too large, max size allowed is 1000kb";
        }
      },
      async onSubmit() {
        const formData = new FormData();
        formData.append("file", this.file);
        try {
          await axios.post("http://localhost:5000/upload", formData);
          this.message = "Uploaded!";
        } catch (err) {
          console.log(err);
          this.message = err.response.data.error;
        }
      },
    },
  };
  </script>
  
  <style></style> -->
  
  <template>
    <img style="height:20vh" :src="url" alt="" />
  </template>
  <script>
  import { storage } from '../firebase';
  import { ref, getDownloadURL } from 'firebase/storage';
  
  export default {
    props: {
      path: String,
    },
    data: () => {
      return {
        url: 'https://via.placeholder.com/140x100',
      };
    },
    mounted() {
      getDownloadURL(ref(storage,this.path)).then(
        (download_url) => (this.url = download_url)
      )
    }
  };
  </script>
  