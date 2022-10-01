<template>
  <div><pv-tabmenu :model="items" class="nav-bar" v-model:visible="drawer"/>  </div>

  <RouterView />
</template>
<script>

  export default {
    data() {
        return {
            items: [
                {label: 'Servicio', icon: 'pi pi-fw pi-wrench', to: '/solicitud'},
                {label: 'Registrarse', icon: 'pi pi-fw pi-circle-fill', to: '/register'}
            ]
        }
    }
}
</script>
<style>

  .nav-bar{
    margin-top: 0px;
    margin-left: 0px;
  }
</style>
