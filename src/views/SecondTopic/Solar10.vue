<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Uranus.png" alt="Rotation" style="width: 350px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 160px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Uranus</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          Uranus is the third largest planet in the Solar System
          and the second farthest from the Sun. While most planets
          spin like tops on an axis, Uranus spins on its side like
          a rolling ball. Scientists believe that a major collision
          with an object much larger than an asteroid caused the
          planet to tip over. Uranus is named after the ancient
          Greek god of the sky. It is very hard to see from Earth
          with the naked eye, and it was the first planet to be
          discovered using a telescope.
        </span>
        <v-spacer class="mb-1"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/11')"
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
  opacity: 0.2;
}
</style>
