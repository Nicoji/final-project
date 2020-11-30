<script>
export default {
  name: 'BuyerForm', 
//   methods: {
//     submitForm(event) {
//         event.preventDefault();

        // const firstName = document.querySelector('#firstName');
        // const lastName = document.querySelector('#lastName');
        // const email = document.querySelector('#email');
        // const password = document.querySelector('#password');
        // const passwordConfirm = document.querySelector('#passwordConfirm');
        
        // // Faire ici les verifs des champs pour renvoyer une erreur si présente

        // const newUser = {
        //     firstName: firstName, 
        //     lastName: lastName, 
        //     email: email,
        //     password: password,
        // }

        // newuser = JSON.stringify(newUser);
        
        // fetch('http://localhost:3000/signup', 
        //     {
        //         method: 'POST', 
        //         headers: {'Content-Type': 'application/json'}, 
        //         body: newUser
        //     }
        // )
        // .then(response => response.json())
        // .then(() => {
        //     console.log('User registered');
        // })
        // .catch()
    // }
//   }
}
</script>

<template>
    <div class="row">
        <form class="offset-3 col-6">
            <legend>Créer un compte acheteur</legend>
            <div class="row">
                <div class="col-6">
                    <input type="text" id="lastName" name="lastName" placeholder="Nom" class="form-control">
                </div>
                <div class="col-6">
                    <input type="text" id="firstName" name="firstName" placeholder="Prénom" class="form-control">
                </div>
            </div>
            <input type="email" id="email" name="email" placeholder="Email" class="form-control">
            <input type="password" id="password" name="password" placeholder="Mot de passe" class="form-control">
            <input type="password" id="pswConfirm" name="password-confirm" placeholder="Confirmez votre mot de passe" class="form-control">
            <div class="text-center">
                <input type="submit" value="S'inscrire" class="btn btn-success" @click="submitForm(event)">
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

