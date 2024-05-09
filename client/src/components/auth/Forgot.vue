<template>
    <form @submit.prevent="userSubmit">
        <h3>Forgot Password</h3>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>

    import axios from "axios";

    export default {
        name:'Forgot',
        data(){
            return{
                email: ''
            }
        },
        methods:{
            async userSubmit(){
                const response = await axios.post('/auth/forgot',{
                    email : this.email,
                })
                console.log(response);
            }
        }

    }
</script>

<style scoped>
 .btn-block{
    margin-top: 15px;
    width: 100%;
 }
</style>