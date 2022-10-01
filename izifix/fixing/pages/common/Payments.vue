<script>
export default {
  name: 'Payments',
  data(){
    return{
      contact:{
        name:'',
        card:'',
        ccv:'',
        expiration:'',
        mail:'',
      }
    }
  }
}
</script>

<template>
<div>
  <form name="form" id="form">
    <h1>Select payment method</h1>
    <div class="met">
      <h2><input id="cash" type="radio" name="pay" checked
                 onclick="document.getElementById('nam').disabled = true;
                 document.getElementById('cardn').disabled = true;
                 document.getElementById('exp').disabled = true;
                 document.getElementById('cv').disabled = true;
      "> Cash</h2>
      <h2><input type="radio" name="pay"
                 onclick="document.getElementById('em').removeAttribute('disabled');
                 document.getElementById('nam').removeAttribute('disabled');
                 document.getElementById('cardn').removeAttribute('disabled');
                 document.getElementById('exp').removeAttribute('disabled');
                 document.getElementById('cv').removeAttribute('disabled');
      "> Card</h2>
    </div>
    <div class="fields">
      <p>
        <input type="email" id="em" size=36 name="mail" placeholder="Email" class="form-control inp" v-model="contact.mail"/>
      </p>
      <p>
        <input type="text" id="nam" size=36 name="name" placeholder="Full name" class="form-control inp" v-model="contact.name" disabled/>
      </p>
      <p>
        <input type="text" id="cardn" size=36  name="card" placeholder="Card number" class="form-control inp" v-model="contact.card" disabled/>
      </p>
      <p>
        <input type="text" id="exp" size=14 name="expiration" placeholder="Expiration date (M/Y)" class="form-control" v-model="contact.expiration" disabled/>
        <input type="text" id="cv" size=14 name="ccv" placeholder="CVV" class="form-control inp" v-model="contact.ccv" disabled/>
      </p>
    </div>
    <input type="submit" id="sub" value="Book" title="Reservar" class="btn btn-primary"/>
  </form>
</div>
</template>

<style scoped>
h2{
  font-size: 20px;
}
.btn:hover {
  cursor: pointer;
}
#exp {
  width: 130px;
}
#sub {
  width: 80px;
  height: 40px;
  border: none;
  background-color: #5674C3;
  color: white;
  font-weight: bold;
}
.met {
  margin-bottom: 7px;
}
.fields {
  margin-bottom: 8px;
}
</style>
