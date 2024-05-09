<template>
    <div class="register">
        <form @submit.prevent="userSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="firstName" placeholder="First name">
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="lastName" placeholder="Last name">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
            <div v-if="emailError" class="alert alert-danger">{{ emailError }}</div>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
            <div v-if="passwordError" class="alert alert-danger">{{ passwordError }}</div>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model="passwordConfirm" placeholder="Confirm Password">
            <div v-if="passwordConfirmError" class="alert alert-danger">{{ passwordConfirmError }}</div>
        </div>

        <div class="form-group">
            <div><label>Role</label></div>
            <select v-model="role">
                <option disabled value="">Please select one</option>
                <option>Adjoint</option>
                <option>Admin</option>
                <option>Infirmier</option>
                <option>Ingenieur</option>
                <option>Medcin</option>
                <option>Pharmacie</option>
                <option>Technicien</option>
            </select>
        </div>

        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterUser',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: '',
            emailError: '',
            passwordError: '',
            passwordConfirmError: ''
        }
    },
    methods: {
        async userSubmit() {
            this.clearErrors();

            if (!this.validateEmail(this.email)) {
                this.emailError = 'Invalid email format';
                return;
            }

            if (this.password.length < 6) {
                this.passwordError = 'Password must be at least 6 characters';
                return;
            }

            if (this.password !== this.passwordConfirm) {
                this.passwordConfirmError = 'Passwords do not match';
                return;
            }

            const response = await axios.post('/auth/signup', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
                role: this.role
            });

            console.log(response);
            this.$router.push('/login');
        },
        validateEmail(email) {
            // Simple email validation regex
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(email);
        },
        clearErrors() {
            this.emailError = '';
            this.passwordError = '';
            this.passwordConfirmError = '';
        }
    }
}
</script>

<style scoped>
  .register{
    width: 500px;
    margin: 60px auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
.form-group {
    margin-bottom: 25px;
}
.alert{
    margin: 10px;
}

</style>