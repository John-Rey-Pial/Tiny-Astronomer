<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/rocky.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Earth.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Earth</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          The third planet from the Sun, Earth is the only planet in the
          universe known to support life. It has two things that are vital
          for living creatures: an atmosphere rich in oxygen, and a large
          supply of liquid water on its surface. Earth sits an ideal distance
          from the Sun – if it were any closer, it would be so hot that water
          would boil away. If it were any further away, its surface would be
          cold and frozen, like the planet Mars.
        </span>
        <v-spacer class="mb-4"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/6')"
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
