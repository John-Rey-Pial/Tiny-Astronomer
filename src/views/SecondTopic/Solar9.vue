<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Saturn.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Saturn</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          Saturn is the sixth planet from the Sun, and the second largest
          planet in our Solar System after Jupiter. It is famous for its
          huge system of colorful rings. Saturn has a large family of more
          than 60 moons. It is also the lightest planet in the solar system.
          Like Jupiter, Uranus, and Neptune, Saturn is a
          gas giant – a huge ball of gas and liquid with a small solid
          core at its very center. Saturn was named after the Roman god
          of agriculture and wealth.
        </span>
        <v-spacer class="mb-4"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/10')"
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
