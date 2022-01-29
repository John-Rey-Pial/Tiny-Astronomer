<template>
  <div>
    <div>
      <img class="design" src="../assets/materials/Evaluation Image.png" alt />
      <div
        style="text-align: center; margin-top: 10px"
      >Objective: Determining your knowledge about Astronomy</div>
      <div class="caption" style="display: flex; margin-top: 30px">
        <div style="margin-left: 300px">
          <v-icon>mdi-clock-time-three</v-icon>Time Limit: 60 minutes
        </div>
        <div style="margin-left: 120px">
          <v-icon>mdi-note-text-outline</v-icon>Total Items: 30 items
        </div>
      </div>
      <v-btn class="purple white--text take-test-btn">Take Test</v-btn>
      <v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px;">
        <span>Click 'Take Test' to Start</span>
      </v-spacer>
    </div>
  </div>
</template>
<script>
export default {};
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