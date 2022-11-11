<template>
    <div class="content flex flex-column align-items-center">
  
      <div>
          <pv-datatable :value="appointments" responsiveLayout="scroll">
              <template #header>
                  <div class="table-header">
                      Appointments
                      <Button icon="pi pi-refresh" ></Button>
                  </div>
              </template>
              <pv-column field="userId" header="userId"></pv-column>
              <pv-column field="technicianId" header="Technician ID"></pv-column>
              <pv-column field="description" header="Description"></pv-column>
          </pv-datatable>
      </div>
    </div>
  </template>
  
  <script>
  import { appointmentService } from '../../core/services/appointmentService';
  export default{
      components:{
      },
      data(){
          return{
              appointments:[]
          }
      },
      services:null,
      created(){
          this.services=new appointmentService();
      },
      mounted(){
          this.services.getByUserId(this.$route.params.id).then(value=>{
              this.appointments=value;
          });
  
          
      }
  }
  </script>
  
  <style scoped>
  
  </style>