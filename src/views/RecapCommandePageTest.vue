<template>
    <FormUtilisateurVue :currentUtilisateur="utilisateurs[0]"
    />
  
</template>

<script>
import FormUtilisateurVue from '@/components/FormUtilisateur.vue';

import { mapState } from 'vuex';

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
                }
            ]
        }
    },
    components: {
        FormUtilisateurVue,
       
    },
    computed: {
        ...mapState(["utilisateurs"])
    },
}


</script>

<style>

</style>





