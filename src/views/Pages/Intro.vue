<template>
  <div>
    <div style="display: flex">
      <div style="width: 60%"></div>
      <div>
        <div class="message">
          Meet the
          <v-spacer>Developers.</v-spacer>
        </div>
        <img class="design" src="../../assets/materials/Interface Text.png" alt="design" />
        <div style="margin-top: 30px; margin-left: 50px; font-size: 14px;">The creators that begun an initiative that 
          <v-spacer></v-spacer>
          adapts to the new normal </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.devs {
  border: rgba(133, 90, 133, 0.973) 5px solid;
  margin: 3px;
}

.message {
  font-size: 35px;
  margin-top: 20px;
  margin-left: 50px;
}

.design {
  width: 300px;
  height: 70px;
  margin: 0;
  padding: 0;
}
</style>