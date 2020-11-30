<script>
export default {
  name: 'BuyerForm', 
  props: {
    nameTitle: String, 
    nameInput: String
  }, 
  methods: {
    submitForm(event, type) {
        event.preventDefault();
        console.log(type);
        // if(type == 'acheteur') {
        //     let url = '';
        // } else {
        //     let url = '';
        // }

        // fetch(url, 
        //     {
        //         method: 'POST', 
        //         headers: {'Content-Type': 'application/json'}, 
        //         body: 
        //     }
        // )
    }
  }
}
</script>

<template>
    <div class="row">
        <form class="offset-3 col-6">
            <legend>Créer un compte vendeur</legend>
            <div class="row">
                <div class="col-6">
                    <input type="text" id="" name="lastName" placeholder="Nom" class="form-control">
                </div>
                <div class="col-6">
                    <input type="text" id="" name="firstName" placeholder="Prénom" class="form-control">
                </div>
            </div>
            <input type="text" id="" name="companyName" placeholder="Nom de l'entreprise" class="form-control">
            <div class="row">
                <div class="col-6">
                    <input type="email" id="" name="email" placeholder="Email" class="form-control">
                </div>
                <div class="col-6">
                    <input type="text" id="" name="siren" placeholder="SIREN" class="form-control">
                </div>
            </div>
            <input type="password" id="" name="password" placeholder="Mot de passe" class="form-control">
            <input type="password" id="" name="password-confirm" placeholder="Confirmez votre mot de passe" class="form-control">
            <div class="text-center">
                <input type="submit" value="S'inscrire" class="btn btn-success" @click="submitForm(event, nameInput)">
                <div>
                    Déjà un compte ?  <router-link to="">Se connecter</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    form {
        margin-top: 40px;
    }
    input {
        margin-bottom: 10px;
    }
</style>