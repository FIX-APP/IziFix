<template>
  <div class="request">
    <div>
        <h1>Solicitar servicio de mantenimiento</h1>
        <br/>
        <h4>Seleccione su distrito</h4>
        <pv-dropdown v-model="selectedCity1" :options="distrits" optionLabel="name" optionValue="code" placeholder="Select a distrite" />
        <br/>
        <h4>Seleccione su electrodomestico</h4>
        <pv-dropdown v-model="selectedCity2" :options="electrodomestico" optionLabel="name" optionValue="code" placeholder="Select a electrodomestic" />
    </div>
    <div class="datatec">
      <div>
        <h2>Seleccione los técnicos más cercanos a su domicilio</h2>
        <Map></Map>
      </div>
      <div>
        <h2>Datos del taller de mantenimiento</h2>
        <h4>Nombre: aaaa</h4>
        <h4>Valoración: </h4>
        <h4>Precio por servicio: </h4>
        <h4>Días disponibles: </h4>
        <h4>Servicios adicionales: </h4>
      </div>
    </div>
    <pv-button label="Confirmar"> <a href="./confirmacion">Confirmar</a></pv-button>
  </div>
  
  </template>
  
  <script>
    import Map from "./google-map.component.vue"
  export default {
    components:{
      Map
    },
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            distrits: [
                {name: 'Comas', code: 'cm'},
                {name: 'Los Olivos', code: 'lovs'},
                {name: 'Independencia', code: 'idp'},
                {name: 'San Miguel', code: 'sm'},
                {name: 'Surco', code: 'src'},
            ],
            electrodomestico:[
                {name:'Licuadora',code:"lc"},
                {name:'Refrigeradora',code:"lc"},
                {name:'Horno Microondas',code:"lc"},
                {name:'Hervidora',code:"lc"},
                {name:'Plancha',code:"lc"},
            ],
        }
    },
    
  }
  </script>
  
  <style lang="scss" scoped>
    div{
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }
    .request{
      display: flex;
      flex-direction: column;
      margin: auto;
    }
    .datatec{
      display: flex;
      flex-direction: row;
    }
  </style>