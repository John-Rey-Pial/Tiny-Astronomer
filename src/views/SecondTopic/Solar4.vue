<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/rocky.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 90px">
        <img src="../../../src/assets/materials/Venus.png" alt="Rotation" style="width: 300px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 170px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Venus</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          Venus is the second planet from the Sun,
          and the second brightest object in the night
          sky after Earth’s Moon. Its atmosphere is thick with poisonous gas,
          and temperatures on the ground are hotter than an oven.
          The surface of Venus is hidden by thick clouds of
          sulfuric acid. Despite its dangerous environment,
          Venus takes its name from the ancient Roman goddess of
          love and beauty. Venus spins so slowly that its day lasts
          longer than its year.
        </span>
        <v-spacer></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/5')"
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
