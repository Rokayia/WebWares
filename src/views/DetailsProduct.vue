<template>
  <div class="details">
    <productCard

    :image="getImgUrl(currentProduct.image)"
      :titre="currentProduct.titre"
      :prix="currentProduct.prix"
      :moq="currentProduct.moq"    
      backgroundColor="white"
    >
      <p class="description">{{ currentProduct.description }}</p>
    </productCard>
  </div>
</template>

<script>
import productCard from "@/components/ProdCard.vue";
export default {
  components: {
    productCard,
  },
  methods: {
    getImgUrl(pic) {
    
      return require("../assets/" + pic);
    }
  },
  computed: {
    currentProduct() {
      return this.$store.state.currentProduct;
    },
  },
  mounted() {
    let prodId = this.$route.params.id;
    this.$store.dispatch("oneProd", prodId);
  },
};
</script>

<style>
.details {
  margin: 10vh auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.description {
  font-size: larger;
  color: rgb(8, 131, 8);
  font-weight: bold;

  padding-bottom: 10px;
}
</style>
