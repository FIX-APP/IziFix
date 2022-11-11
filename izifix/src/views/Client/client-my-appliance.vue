<template>
    <div>
          <pv-datatable :value="artifacts" responsiveLayout="scroll">
              <template #header>
                  <div class="table-header">
                      Products
                      <Button icon="pi pi-refresh" />
                  </div>
              </template>
              <pv-column field="name" header="Name"></pv-column>
              <pv-column header="url">
                  <template #body="slotProps">
                      <img :src="slotProps.data.url" class="product-image" />
                  </template>
              </pv-column>
  
              <template #footer>
                  In total you have {{artifacts ? artifacts.length : 0 }} artifacts.
              </template>
          </pv-datatable>
      </div>
  </template>
  
  
  <script>
  import {artifactService} from '../../core/services/artifactsService';
  export default{
      components:{
      },
      data(){
          return{
              artifacts:[]
          }
      },
      services:null,
      created(){
          this.services=new artifactService();
      },
      mounted(){
          this.services.getByUserId(this.$route.params.id).then(value=>{
              this.artifacts=value;
          });
      }
  }
  </script>
  
  <style lang="scss" scoped>
  .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .product-image {
      width: 50px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }
  </style>
  