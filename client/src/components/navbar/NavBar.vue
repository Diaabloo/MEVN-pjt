<template>

    <nav class="navbar navbar-expand navbar-light fixed-top">

        <div class="container">
            <router-link to="/" class="navbar-brand" v-if="!user">S<span class="span">ANT</span>E</router-link>
            <router-link to="/" class="navbar-brand" v-if="user">{{ user.role }} Page</router-link>

            <div class="collapse navbar-collapse">

                <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link"> Log in </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"> Sign up </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto" v-if="user">

                    <li class="nav-item name">
                        <p class="nav-link">Bonjour, {{ user.firstName }} {{ user.lastName }}</p>
                    </li>

                    <li class="nav-item">
                        <a href="javascript:void(0)" @click="handleClick" class="nav-link"> Logout</a>
                    </li>
                </ul>

            </div>


        </div>

    </nav>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name : 'NavBar',
    methods:{
        handleClick(){
            localStorage.removeItem('token');
            this.$store.dispatch('user',null)
            this.$router.push('/')
        }
    },
    computed:{
        ...mapGetters(['user'])
    }
}
</script>

<style scoped>
.name{
    margin: 0px 50px;
}
.span{
 color: #1C8EF9;
}
.navbar-brand{
    font-size: 25px;
}
</style>
