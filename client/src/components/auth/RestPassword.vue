<template>

    <div>
        <h3>Rest Password</h3>

        <form action="" @submit.prevent="userSubmit">
            <label for="password">New Password</label>
            <input type="email" name="email" id="email" v-model="email" placeholder="Email">
            <input type="password" id="password" v-model="password" placeholder="password">
            <button type="submit">Reset Password</button>
        </form>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: 'RestPassword',
    data(){
            return{
                email:'',
                password: ''
            }
        },
        methods:{
            async userSubmit(){
                const response = await axios.post('/auth/RestPassword',{
                    email : this.email,
                    password : this.password,
                })
                console.log(response);
            }
        }
}
</script>