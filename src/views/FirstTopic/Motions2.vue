<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px">
        <img
          src="../../../src/assets/materials/revolution.png"
          alt="Revolution"
          style="width: 400px; margin-left:20px"
        />
      </section>
      <section style="margin-right: 70px; margin-top: 5px; margin-left: 100px; text-align: justify">
        <span style="font-size: 30px;">
          <strong>Revolution</strong>
        </span>
        <v-spacer></v-spacer>
        <span>
          When the Earth revolves, it moves in an orbit around the Sun. The orbit is
          elliptical, which means that it is similar to an oval in shape.
        </span>
        <v-spacer class="mb-6"></v-spacer>
        <span>
          The revolution of the Earth around the Sun and the tilt of Earth's axis
          are responsible for the changing seasons. It takes the Earth one year,
          or 365 1/4 days, to make one complete revolution around the Sun. Because
          the Earth's axis is tilted, different parts of the Earth will be tilted
          toward or away from the Sun at different times of the year.
        </span>
        <v-spacer></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px; color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/motions/3')"
        >Next</v-btn>
      </section>
    </div>
  </div>
</template>