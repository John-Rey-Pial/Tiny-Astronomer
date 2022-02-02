<template>
  <div>
    <div style="display: flex">
      <div style="width: 100%;">
        <section class="heading">
          <strong>Question 11 out of 15</strong>
        </section>
        <v-spacer style="margin-bottom: 20px"></v-spacer>
        <div class="question">The change of seasons is caused due to ________.  </div>
        <nav>
          <ul>
            <li>Rotation</li>
            <li>Revolution</li>
            <li>Movement of the Sun</li>
          </ul>
        </nav>
        <div style="margin-left: 530px;">
          <v-btn style="text-transform: capitalize">Clear Choice</v-btn>
          <v-btn class="indigo darken-4 white--text ml-3" style="text-transform: capitalize">Confirm Answer</v-btn>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.heading {
  font-size: 18px;
  margin-top: 30px;
  color: grey;
  margin-left: 210px;
}
.question {
  font-size: 23px;
  margin-bottom: 40px;
  margin-left: 210px;
}
nav ul {
  list-style-type: none;
}
li {
  font-size: 18px;
  padding: 10px;
  border: rgb(211, 204, 204) 1px solid;
  background: whitesmoke;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: 190px;
  margin-right: 220px;
  padding-left: 30px;
}
</style>