<template>
    <div class="footer indigo darken-4 white--text caption mt-2 " style="width: 100%;">
      <v-flex>
        <nav> 
        <ul>
          <img id="footer-design" src="../assets/materials/Footer-stars.png" alt="design">
          <li style="margin-left:2%">About</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li style="margin-left:5%">Share your story</li>
          <li>Donate</li>
          <li>Volunteer</li>
        </ul>
        <v-divider class="white mt-2 mb-3"></v-divider>
        <cite class="ml-6"> &copy; 2021 Tiny Astronomer</cite>
        </nav>
      </v-flex>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

.footer{
  padding: 2px;
  padding-top: 4px;
}
#footer-design{
  width: 40px;
}
nav ul{
  display: flex;
  text-decoration: none;
  list-style-type: none;
  line-height: 10px;
}
nav li{
  flex-basis: 10%;
}

</style>