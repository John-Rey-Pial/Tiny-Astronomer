<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px; margin-left: 10px">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/Dvhl891zGqU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <span class="caption" style="color: gray">Source: &copy; Crashcourse Kids, 2016</span>
      </section>
      <section style="margin-right: 70px; margin-top: 20px; margin-left: 50px; text-align: justify">
        <span style="font-size: 30px;">
          <strong>Rocky Planets</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>
        <span>
          Rocky planets are made mostly of rock and metal.
          They have a hot core surrounded by a layer of hot
          rock called the mantle. On the surface is a thin layer
          of solid rock called the crust. Rocky planets are smaller
          than gas planets, but are made of heavier materials.
          There are four rocky planets in our Solar System:
          Mercury, Venus, Earth, and Mars. They are the closest
          planets to the Earth, and so are sometimes known as
          the inner planets.
        </span>
        <v-spacer class="mb-3"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/3')"
        >Next</v-btn>
      </section>
    </div>
  </div>
</template>