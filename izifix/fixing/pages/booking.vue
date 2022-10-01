<script setup>
import Payments from './components/Payments.vue';
import Reserve from './components/Reserve.vue';
</script>

<template>
  <main>
    <div class="contenido">
      <Reserve class="caja"/>
      <Payments class="caja"/>
    </div>
  </main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
.contenido {
  width: 750px;
  position: absolute;
  top: 0;
  left: 25%;
  background-color: #DAE2FF;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px 50px;
}
.caja {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #DAE2FF;
}
input {
  margin-left: 20px;
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 3px;
  border: 1px solid black;
}
h1 {
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
