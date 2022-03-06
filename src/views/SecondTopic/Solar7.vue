<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px; margin-left: 10px">
         <img src="../../../src/assets/materials/gas.jpg" style="width: 450px; height: 300px" />
        <span class="caption" style="color: gray">Source: &copy; Crashcourse Kids, 2016</span>
      </section>
      <section style="margin-right: 70px; margin-top: 20px; margin-left: 50px; text-align: justify">
        <span style="font-size: 30px;">
          <strong>Gas Giants</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>
        <span>
          Gas planets are made of layers of gas and liquid around a small,
          rocky core. They are much larger than rocky planets, but are made
          of lighter materials. They often have large families of moons,
          and may also have rings of dust and debris. There are four gas
          planets in our Solar System. Jupiter and Saturn are known as gas
          giants, because of their enormous size. Uranus and Neptune are smaller
          and much colder, and are known as ice giants as well as gas giants.
        </span>
        <v-spacer class="mb-1"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/8')"
        >Next</v-btn>
      </section>
    </div>
  </div>
</template>