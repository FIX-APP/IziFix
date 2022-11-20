<template>
  <div class="content flex flex-column align-items-center">

    <div>
        <pv-datatable :value="appointments" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    Appointments
                    <pv-button icon="pi pi-plus" @click="display=true"></pv-button>
                    <pv-dialog header="Header" v-model:visible="display">
                        <template #header>
		                    <h3>Add an appointment</h3>
	                    </template>
                        <pv-dropdown v-model="selectedTech" :options="technicians" optionLabel="name"></pv-dropdown>
                        <pv-input-text class="input-artURL flex justify-content-center" type="text" v-model="desc" placeholder="Add description of your problem" toggleMask  />
                        <template #footer>
		                    <pv-button label="No" icon="pi pi-times" class="p-button-text" @click="display=false"/>
                            <pv-button label="Add artifact" icon="pi pi-check" autofocus @click="addAppointment()"/>
	                    </template>
                    </pv-dialog>
                </div>
            </template>
            <pv-column field="user.name" header="User"></pv-column>
            <pv-column field="technician.name" header="Technician"></pv-column>
        </pv-datatable>
	</div>
  </div>

</template>

<script>
import { appointmentService } from '../../core/services/appointmentService';
import { userService } from '../../core/services/userService';
export default{
    components:{
    },
    data(){
        return{
            appointments:[],
            display:false,
            technicians:[],
            selectedTech:null,
            desc:""
        }
    },
    services:null,
    techService:null,
    created(){
        this.services=new appointmentService();
        this.techService=new userService();
    },
    mounted(){
        this.techService.getAllUsers().then(value=>{
            this.technicians=value.data;
        });
        this.services.getAllAppointments().then(value=>{
            value.data.forEach(element => {
                if(element.user.id==this.$route.params.id){
                    this.appointments.push(element);
                }
            });
        })
    },
    methods:{
        addAppointment(){
            this.services.registerAppointment(parseInt(this.$route.params.id),this.selectedTech.id,this.desc);
            this.display=false;
        }

    }

}
</script>

<style scoped>

</style>
