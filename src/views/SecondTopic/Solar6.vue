<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/rocky.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Mars.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Mars</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          The fourth planet from the Sun, after Mercury, Venus, and Earth.
          It is a rocky planet about half the size of earth. Mars and earth
          share some similarities. Both planets have season, and both layers
          of ice at their north and south poles. However, unlike Earth, the
          surface of Mars is cold and dry, with only a thin atmosphere that
          is mostly made up of carbon dioxide gas. Its name comes from the
          Roman god of war.
        </span>
        <v-spacer class="mb-4"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/7')"
        >Next</v-btn>
      </section>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 93%;
  opacity: 0.15;
}
</style>
