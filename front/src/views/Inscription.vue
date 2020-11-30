<script>
import BuyerForm from '@/components/BuyerForm.vue';
import SellerForm from '@/components/SellerForm.vue';

export default {
    name: 'Inscription', 
    data() {
        return {
            active: 'buyer'
        }
    },
    components: {
        BuyerForm, 
        SellerForm
    }, 
    methods: {
        changeForm(actual) {
            const buyerMenu = document.querySelector('#buyer-menu');
            const sellerMenu = document.querySelector('#seller-menu');

            if(actual == 'seller') {
                this.active = 'seller';
                buyerMenu.classList.remove('active');
                sellerMenu.classList.add('active');
            } else {
                this.active = 'buyer';
                sellerMenu.classList.remove('active');
                buyerMenu.classList.add('active');
            }
        }
    }
}
</script>

<template>
    <div id="inscription">
        <div class="d-flex">
            <div id="buyer-menu" class="account-menu active" @click="changeForm('buyer')">Compte acheteur</div>
            <div id="seller-menu" class="account-menu" @click="changeForm('seller')">Compte vendeur (entreprise)</div>
        </div>
        <div id="buyer" v-if="this.active == 'buyer'">
            <BuyerForm />
        </div>
        <div id="seller" v-else>
            <SellerForm />
        </div>
    </div>
</template>

<style>
    #inscription {
        margin-top: 40px;
    }
    .active {
        background-color: rgb(129, 129, 129);
    }
    .d-flex {
        border: 2px solid rgb(77, 76, 76);
    }
    .account-menu {
        width: 50%;
        cursor: pointer;
        padding: 10px 0px;
    }
</style>