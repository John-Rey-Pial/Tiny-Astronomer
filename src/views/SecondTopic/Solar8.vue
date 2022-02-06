<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Jupiter.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Jupiter</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>

        <span>
          The fifth planet from the Sun, Jupiter is the largest
          planet in our Solar System. It is more than 1,300 times
          the volume of Earth. Jupiter is a gas giant, made mostly
          of hydrogen and helium with a small rocky core. Near the
          surface, powerful forces whip up clouds of brightly colored
          misty-looking gas, forming storms that can grow bigger than
          the Earth and last for hundreds of years. Jupiter was named
          after the king of the Roman gods.
        </span>
        <v-spacer class="mb-4"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/9')"
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
