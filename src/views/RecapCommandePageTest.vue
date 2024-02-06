<template>
  <MyHeader
    :currentUtilisateur="currentUtilisateur"
    :currentUtilisateurCommande="currentUtilisateurCommande"
    @deconnexionEventBtn="deconnecterCurrentUser"
    :is-visible="isHere()"
    :is-user="isUser"
  />
  <div v-if="currentUtilisateur" class="recapCommande">
      <FormUtilisateurVue :currentUtilisateur="currentUtilisateur" />
      <section class="summary">
        <strong>Panier</strong>
        <table>
          <thead>
            <tr>
              <th>Produits</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <!-- Afficher tous les produits actifs -->
            <td></td>
            <td>
              <span>Total HT </span>|
              <span>Total TTC</span>
            </td>
            <tr v-for="(prod, id) in currentUtilisateurCommande.produits" :key="id">
              <div v-for="product in produits" :key="product.id">
                <div v-if="prod.produitId == product.id">
                  <td>
                    {{
                      product.titre
                    }}(quantite:{{
                      product.moq
                    }})
                  </td>
                  <td>
                    <strong> x {{ prod.quantite }}</strong>
                  </td>
                </div>
              </div>
      
                 <td>
                    <span> {{ totalProduct(prod) }}€ </span>|
                    <span>{{ totalProductTTC(prod) }} €</span>
                </td>
      
            </tr>
            <tr>
              <th>Total TTC</th>
              <th>{{ prixTotal() }}€ </th>
            </tr>
          </tbody>
        </table>
        <div>
    
    <btnValider
          label="Valider la commande"
          backgroundColor="ValiderConnexion"
          @click="validerCommande()"
        />
</div>
      </section>

  </div>

  <MyFooter />
</template>

<script>
import btnValider from "@/components/btnLandingPage.vue";
import FormUtilisateurVue from "@/components/FormUtilisateur.vue";
import MyHeader from "@/components/GeneralHeader.vue";
import MyFooter from "@/components/myFooter.vue";

export default {
  data() {
    return {
      utilisateurs: [
        {
          id: 1,
          raisonSociale: "Entreprise A",
          siret: "12345678901234",
          adresse: "123 Rue de la République",
          codePostal: "75001",
          ville: "Paris",
          email: "entrepriseA@example.com",
          motDePasse: "motdepasseA",
          role: "USER",
        },
      ],
      isConnected: false,
      isUser: true,
      produitSelected: {},
    };
  },
  components: {
    FormUtilisateurVue,
    MyHeader,
    MyFooter,
    btnValider
  },
  computed: {
    // Utilisation de mapState pour utiliser commandes depuis le store Vuex
    currentUtilisateur() {
      return this.$store.getters.getCurrentUtilisateur;
    },
    currentUtilisateurCommande() {
      return this.$store.getters.getCurrentUtilisateurCommande;
    },
    produits() {
      return this.$store.getters.getProduits;
    },
  
  },
  methods: {
    deconnecterCurrentUser() {
      this.$store.commit("setCurrentUtilisateur", 0);
      this.$store.commit("setCommandes", this.currentUtilisateurCommande);
      this.$store.commit("setCurrentUtilisateurCommande");
      this.$router.push({
        name: "home",
      });
      location.reload();
    },
    isHere() {
      if (this.currentUtilisateur && this.currentUtilisateurCommande) {
        return true;
      } else {
        return false;
      }
    },
    totalProduct( prod) {
        let total =0;
        this.produits.forEach(function (currentValue) {
          if(currentValue.id==prod.produitId){
          total=  (prod.quantite * currentValue.prix * currentValue.moq).toFixed(2);
          }
         
        });

      return total
    },

    totalProductTTC(prod) {
      // Taux de TVA
      const tauxTVA = 20;
      // Calcul du ttc
      let totalTTC =0

   
        this.produits.forEach(function (currentValue) {
          if(currentValue.id==prod.produitId){
            totalTTC= (
        prod.quantite *
        currentValue.prix *
        currentValue.moq *
        (1 + tauxTVA / 100)
      ).toFixed(2);

          }
         
        });
    
      return totalTTC;
    },
    validerCommande(){
  
  
 
        this.$store.commit("addCommandePrise", this.currentUtilisateurCommande);
        console.log('id current' + this.currentUtilisateurCommande.id )
        this.$store.commit("modifyCommandeDefault", this.currentUtilisateurCommande.id);
        this.currentUtilisateurCommande.coutTotal=0;
        this.currentUtilisateurCommande.produits=[]  
        this.$store.commit("setCurrentUtilisateurCommande", this.currentUtilisateurCommande);
        this.$router.push({
        name: "home",
      });
    },
    prixTotal(){
        if(this.currentUtilisateurCommande && this.currentUtilisateur){
     return   this.currentUtilisateurCommande.coutTotal.toFixed(2)
    }
      
    }
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<style>
section.summary {
  background-color: #f3f3f39f;
  border:solid;
  padding: 20px;
  min-height: 200px;
  max-height:300px;
  max-width:fit-content;
  min-width: 200px;
  text-align: center;
  margin-bottom: 15px;
  

}


section.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

section.summary table tbody tr:last-of-type th div {
  border-top: 1px solid black;
  padding-top: 4px;
}

.recapCommande{
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
  gap: 10px;
  

}
</style>
