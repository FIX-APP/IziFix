<template>
  <div class="content flex flex-column align-items-center">
        <pv-datatable :value="artifacts" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    Products
                    <pv-button icon="pi pi-plus" @click="displayDialog=true"></pv-button>
                    <pv-dialog header="Header" v-model:visible="displayDialog">
                        <template #header>
		                    <h3>Header</h3>
	                    </template>
                        <pv-input-text class="input-artiName flex justify-content-center" type="text" v-model="name" placeholder="Artifacts Name" />
                        <pv-input-text class="input-artURL flex justify-content-center" type="text" v-model="url" placeholder="URL Image" toggleMask  />
                        <template #footer>
		                    <pv-button label="No" icon="pi pi-times" class="p-button-text" @click="displayDialog=false"/>
                            <pv-button label="Add artifact" icon="pi pi-check" autofocus @click="addArtifact()"/>
	                    </template>
                    </pv-dialog>
                </div>
            </template>
            <pv-column field="name" header="Name"></pv-column>
            <pv-column header="Image" >
                <template #body="slotProps">
                    <img :src="slotProps.data.url" class="product-image"/>
                </template>
            </pv-column>
            <pv-column header="Options">
                <template #body="slotProps">
                    <pv-button icon="pi pi-trash" @click="deleteArtifact(slotProps.data.id)"/>
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
import {userService} from '../../core/services/userService';
export default{
    components:{
    },
    data(){
        return{
            artifacts:[],
            displayDialog:false,
            selectedUser:null,
            technicians:[],
            name:"",
            url:""
        }
    },
    services:null,
    userServices:null,
    created(){
        this.services=new artifactService();
        this.userServices=new userService();
    },
    mounted(){
        this.services.getByUserId(this.$route.params.id).then(value=>{
            this.artifacts=value.data;
        });
        print("artefactos: ",this.artifacts);
    },
    methods:{
       addArtifact(){
        this.services.registerArtifact(parseInt(this.$route.params.id),this.name,this.url);
        this.displayDialog=false;
       },
       deleteArtifact(id){
        this.services.deleteArtifact(id);
       }
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
