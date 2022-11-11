
<template>
    <div class="content flex flex-column align-items-center">
         <section class="title">
           <h1 class="title__text">{{$t("MY PROFILE")}}</h1>
         </section>
       </div>
       <div class="content">
 
 <pv-card class="card">
     <template #header>
         <img class="card-image" src="@/assets/img/user-section-images/user-photo.jpg">
     </template>
     <template #title>
         {{$t("Profile Information")}}
     </template>
     <template #subtitle>
         {{$t("User Profile")}}
     </template>
     <template #content>
         <div class="information-user">
             <p class="information-user-header">{{$t("Name:")}}</p>
             <p class="information-user-info"> </p>
             <p class="information-user-header">{{$t("LastName:")}}</p>
             <p class="information-user-info"> </p>
             <p class="information-user-header">{{$t("Address:")}}</p>
             <p class="information-user-info"> </p>
             <p class="information-user-header">{{$t("Phone:")}}</p>
             <p class="information-user-info"> </p>
             <p class="information-user-header">{{$t("Email:")}}</p>
             <p class="information-user-info"> </p>
             <p class="information-user-header">{{$t("Password:")}}</p>
             <p class="information-user-info">*********</p>
         </div>
     </template>
     <template #footer>
         <div class="foot">
             <pv-button icon="pi pi-user-edit" class="p-button-rounded p-button-secondary" @click=""></pv-button>
         </div>
     </template>
 </pv-card>    
 
 </div>
 </template>
 
 <script>
 
 
 </script>
 
 <style scoped>
 
 
 
 
 
 
 </style>