<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/rocky.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 70px">
        <img src="../../../src/assets/materials/Mercury.png" alt="Rotation" style="width: 360px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 130px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Mercury</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          Mercury is the smallest planet in the Solar System and the
          closest to the Sun. During the day, temperatures can reach
          a blistering 806F (430C), which is hot enough to melt lead.
          However, Mercury has a very thin atmosphere, so the heat of
          the day escapes very quickly at nighttime. Nights on Mercury
          are freezing cold, much colder than the coldest place on Earth.
          The name Mercury from a Roman god renowned for his swiftness.
          Mercury spins on its axis very slowly, but it orbits the Sun
          faster than the other planets.
        </span>

        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/4')"
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
