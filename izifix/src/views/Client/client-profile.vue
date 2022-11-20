
<template>
    <div class="container mt-3">
        <h2>Your Profile</h2>
        <div class="card bg-dark" style="width:400px">
            <img class="card-img-top" src="https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000" alt="Card image" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">Name:</h4>
                <p class="card-text">{{user.name}}</p>
                <h4 class="card-title">Last Name:</h4>
                <p class="card-text">{{user.lastName}}</p>
                <h4 class="card-title">Email:</h4>
                <p class="card-text">{{user.email}}</p>
                <h4 class="card-title">Password:</h4>
                <p class="card-text">***********</p>
                <a @click="displayDialog=true" class="btn btn-primary bg-dark">Edit Profile</a>
            </div>
        </div>
    </div>
    <pv-dialog header="Header" v-model:visible="displayDialog">
        <template #header>
		    <h3>Edit your profile</h3>
	    </template>
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="name" placeholder="Your Name" />
        <pv-input-text class="input-artURL flex justify-content-center" type="text" v-model="lastName" placeholder="Your last name" toggleMask  />
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="cellphone" placeholder="Your number" />
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="password" placeholder="Your password" />
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="email" placeholder="Your email" />
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="email" placeholder="Your address" />
        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="rol" placeholder="Your rol" />
        <template #footer>
		    <pv-button label="Cancel" icon="pi pi-times" class="p-button-text" @click="displayDialog=false"/>
            <pv-button label="Save" icon="pi pi-check" autofocus @click="editUser()"/>
	    </template>
    </pv-dialog>
</template>
<script>
import { userService } from '../../core/services/userService';
export default{
    data(){
        return{
           user:[],
           displayDialog:false,
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
    mounted(){
        this.service.getAllUsers().then(value=>{
            value.data.forEach(element => {
                if(element.id==this.$route.params.id){
                    this.user=element;
                }
            });
        })
    },
    methods:{
        editUser(){
            this.service.editUser(this.$route.params.id,this.name,this.lastName,this.cellphone,this.password,this.email,this.address,this.rol);
        }
    }
}
</script>
<style>
</style>