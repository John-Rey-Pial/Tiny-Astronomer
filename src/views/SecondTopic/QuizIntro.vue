<template>
  <div>
    <div>
      <img
        class="design"
        src="../../../src/assets/materials/SolarSystem.png"
        alt="The Solar System"
      />
      <div
        style="text-align: center; margin-top: 10px"
      >NOW, Let's see what you have learned so far...</div>
      <h1 style="text-align: center">Are you ready to put that knowledge to the test?</h1>
      <v-btn
        class="purple white--text take-test-btn mt-10"
        @click="$router.push('/quiz2')"
      >LET'S GO!</v-btn>
      <v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px;">
        <span>Click 'LET'S GO' to Start</span>
      </v-spacer>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.design {
  width: 200px;
  height: 150px;
  margin-top: 30px;
  margin-left: 40%;
}
.take-test-btn {
  width: 450px;
  height: 30px;
  text-transform: capitalize;
  margin-left: 300px;
  margin-top: 10px;
}
</style>