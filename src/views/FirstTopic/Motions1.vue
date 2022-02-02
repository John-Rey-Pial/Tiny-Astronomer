<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px">
        <img src="../../../src/assets/materials/rotation.png" alt="Rotation" />
      </section>
      <section style="margin-right: 70px; margin-top: 5px; margin-left: 100px; text-align: justify">
        <span style="font-size: 30px;">
          <strong>Rotation</strong>
        </span>
        <v-spacer></v-spacer>
        <span>
          The rotation of the Earth is responsible for the
          change between night and day. When one part of the Earth
          is rotated toward the Sun, it is daytime there. When the
          same part of Earth is rotated away from the Sun, it is nighttime there.
        </span>
        <v-spacer></v-spacer>
        <span>
        The Sun and Moon appear to rise in the East and set in the West each day.
        At midday, the Sun appears to be almost directly overhead. But this
        apparent motion of the Sun and Moon is a result of the rotation of the
        Earth on its axis. Similarly, the stars appear to move across the sky
        each night. This is also because the Earth is rotating.
        </span>
        <v-spacer></v-spacer>
        <span style="font-size: 14px; margin-left: 100px; color: gray;">(Click 'Next' if you are done reading.)</span>
        <v-btn
        class="indigo darken-4 white--text"
        style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
        @click="$router.push('/motions/2')"
      >Next</v-btn>
      </section>
      
    </div>
  </div>
</template>