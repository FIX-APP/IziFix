<template>
	<div>
		<pv-menu-bar :model="items">
			<template #start>
				<img alt="" src="@/assets/img/text-logos/logo_repair.png" height="20" class="mr-2">
			</template>
			<template #end>
                
			</template>
		</pv-menu-bar>
	</div>
</template>

<script>

export default {
    data() {
        return {
            items: [
                {
					label:'My artifacts',
					icon:'pi pi-home',
                    to: {name:'myappliance'}
                },
                {
					label:'Appointment',
					icon:'pi pi-book',
                    to: {name:'client-appointment'}
                },
                {
					label:'Profile',
					icon:'pi pi-calendar-times',
                    to: {name:'client-profile'}
                },
              {
                label:'LogOut',
                icon:'pi pi-sign-out',
                to: '/'
              }
            ]
        }
    }
}

</script>

<style>
   
</style>