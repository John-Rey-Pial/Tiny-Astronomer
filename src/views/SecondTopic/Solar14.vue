<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/moon.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Moon</strong>
        </span>
        <v-spacer class="mb-1"></v-spacer>

        <span>
          The moon is Earth’s only natural satellite. It is a dusty, airless place,
          dotted with craters and dark, flat plains of solidified lava called seas,
          or maria. The moon appears bright in the night sky because it reflects
          light from the sun. As the moon spins exactly once during each orbit of
          Earth, the same side, the “near side”, is always seen. The other, mysterious
          side of the moon is known as the “far side”. Twelve people have walked on
          the moon’s surface, making it the only body in space other than Earth to
          have been visited by humans.
        </span>
        <v-spacer class="mb-1"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/quiz2/intro')"
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
