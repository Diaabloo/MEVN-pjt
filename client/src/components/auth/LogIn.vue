<template>
    <div class="log">
        <form @submit.prevent="userSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block">Login</button>

        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

        <p class="forgot-password text-right">
            <router-link to="forgot"> Forgot password? </router-link>
        </p>
    </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "LogIn",
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        async userSubmit() {
            try {
                const response = await axios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token);
                this.$store.dispatch('user', response.data.user);

                // Redirect based on the user's role
                switch (response.data.user.role) {
                    case 'Pharmacie':
                        this.$router.push('/pharmacie-dashboard');
                        break;
                    case 'Adjoint':
                        this.$router.push('/adjoint-dashboard');
                        break;
                    case 'Infirmier':
                        this.$router.push('/infirmier-dashboard');
                        break;
                    case 'Admin':
                        this.$router.push('/admin-dashboard');
                        break;
                    case 'Ingenieur':
                        this.$router.push('/ingenieur-dashboard');
                        break;
                    case 'Medcin':
                        this.$router.push('/medcin-dashboard');
                        break;
                    case 'Technicien':
                        this.$router.push('/techni-dashboard');
                        break;
                    default:
                        this.$router.push('/');
                        break;
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'Incorrect email or password.';
                } else {
                    this.errorMessage = 'An error occurred while logging in. Please try again later.';
                }
            }
        }
    }
}
</script>

<style scoped>
.log{
    width: 450px;
    margin: 200px auto;
    background: #ffffff;
    box-shadow: 0px 20px 80px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}
.form-group {
    padding-bottom: 30px;
}
.alert{
    margin: 20px;
}
</style>