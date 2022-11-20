<template>
    <div class="container mt-3 bg-white">
    <h2>Register</h2>
    <form action="/action_page.php">
        <div class="mb-3">
        <label>Name:</label>
        <input type="text" class="form-control" placeholder="Enter name" v-model="name">
        </div>
        <div class="mb-3">
        <label>Last Name:</label>
        <input type="text" class="form-control" placeholder="Enter your last name" v-model="lastName">
        </div>
        <div class="mb-3">
        <label>Cellphone:</label>
        <input type="text" class="form-control" placeholder="Enter your cellphone" v-model="cellphone">
        </div>
        <div class="mb-3">
        <label>Address:</label>
        <input type="text" class="form-control" placeholder="Enter your address" v-model="address">
        </div>
        <div class="mb-3 mt-3">
        <label for="email">Email:</label>
        <input type="email" class="form-control"  placeholder="Enter your email" v-model="email">
        </div>
        <div class="mb-3">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
        </div>
        <div class="mb-3">
        <label>Rol:</label>
        <input type="text" class="form-control" placeholder="Enter your rol" v-model="rol">
        </div>
        <button class="btn btn-primary" @click="registerUser()">Register</button>
        <button class="btn btn-primary" @click="back()">Cancel</button>
    </form>
    </div>
</template>
<script>
import { userService } from '../../core/services/userService';
export default{
    data(){
        return{
            name:"",
            lastName:"",
            cellphone:"",
            password:"",
            email:"",
            address:"",
            rol:""
        }
    },
    service:null,
    created(){
        this.service=new userService();
    },
    methods:{
        registerUser(){
            this.service.registerUser(this.name,this.lastName,this.cellphone,this.password,this.email,this.address,this.rol);
            this.$router.push('/login');
        },
        back(){
            this.$router.push('/login');
        }
    }
}
</script>
<style>
    div{
        color: black;
    }
</style>