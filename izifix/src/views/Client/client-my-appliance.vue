<template>
  <div class="content flex flex-column align-items-center">
        <section class="title">
          <h1 class="title__text">{{$t("MY APPLIANCES")}}</h1>
        </section>
      </div>
</template>


<script>
</script>

<style scoped>
.content{
    margin: auto 0;
    height: 95vh;
}
.title{
    text-align: center;
    padding: 2rem;
}
.contain-panel{
    width:100%;
    padding: 1rem;
    background-image: url("@/assets/img/backgrounds/appliance_pattern.jpg");
    background-size: cover;
}
.panel{
    text-align: center;
    width:100%;
    height: 100%;
}
.panel__image{
    width:80px;
    height: 80px;
    vertical-align: middle;
}
.panel__text{
    color: rgb(55, 55, 65);
    font-weight: bold;
    padding: 1rem;
}
@media(min-width:768px){

}

</style>