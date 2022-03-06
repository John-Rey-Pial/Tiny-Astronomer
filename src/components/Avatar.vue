<template>
  <div>
    <v-flex>
      <img id="logo" src="../assets/materials/Logo.png" alt="Logo" />
      <v-spacer></v-spacer>
      <img id="paulo" src="../assets/materials/Paulo.png" alt="Paulo" />
      <span id="text" class="blue lighten-5 blue--text">
        <Strong>Welcome to Tiny Astronomers! </Strong> Let us learn and explore the beauty of space!
      </span>
    </v-flex>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
#paulo {
  flex: 10%;
  width: 3.5rem;
  vertical-align: middle;
  margin-left: 3rem;
}
#text {
  margin-left: 2rem;
  border-style: solid;
  border: blue 10px;
  border-radius: 10px;
  padding: 20px;
  padding-right: 240px; 
  
}
#logo {
  width: 220px;
  margin-left: 40%;
}
</style>