<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Pluto.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Pluto</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          Pluto is a tiny world of rock and ice, only two-thirds the
          size of Earth’s Moon. It is one of five dwarf planets in our
          Solar System that have so far been discovered.
          Dwarf planets are mostly round in shape. Pluto, Eris, Haumea, and Makemake
          are all found in the outer reaches of the Solar System within
          the Kuiper Belt. This is a broad ring of objects that starts
          near Neptune and spreads out to roughly 9.3 billion miles
          (15 billion km) from the Sun. The fifth dwarf planet, Ceres,
          lies in the asteroid belt.
        </span>
        <v-spacer class="mb-2"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/13')"
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
