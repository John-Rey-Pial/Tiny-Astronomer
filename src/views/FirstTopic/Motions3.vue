<template>
  <div>
    <div style="display: flex">
      <section style="margin-top: 20px">
        <img
          src="../../../src/assets/materials/seasons.jpg"
          alt="Seasons"
          style="width: 300px; margin-left: 20px"
        />
      </section>
      <section
        style="
					margin-right: 70px;
					margin-top: 5px;
					margin-left: 100px;
					text-align: justify;
				"
      >
        <span style="font-size: 30px">
          <strong>Seasons</strong>
        </span>
        <v-spacer></v-spacer>
        <span>
          It is winter where the Earth tilts away from the Sun. The days are
          short, and the Sun is low in the sky, even at noon. It is summer where
          the Earth tilts toward the Sun. The days are long, and the Sun is high
          in the sky at noon.
        </span>
        <v-spacer></v-spacer>
        <span>
          In December, it is summer in the South Hemisphere and winter in the
          North Hemisphere. In June, it is summer in the North Hemisphere and
          winter in the South Hemisphere. Days are shortest in the winter and
          longest in the summer.
        </span>
        <v-spacer class="mb-10"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px; color: gray"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 430px; text-transform: capitalize; width: 100px"
          @click="showComp"
        >Next</v-btn>
      </section>
    </div>
    <v-expand-x-transition>
      <div v-if="show" style="width: 70%">
        <div class="card" scroll>
          <img src="../../assets/materials/space.jpg" class="back" />
          <div style="display: flex; z-index: 1000; position: relative">
            <section>
              <img
                src="../../assets/materials/ship.png"
                style="width: 250px; margin-left: 150px; margin-top: 100px; margin-right: 50px"
              />
            </section>
            <section>
              <div v-if="answer==='incorrect'">
                <div id="text" class="blue lighten-5 blue--text">
                  <div style="font-size: 18px">
                    <strong>OH NO! We ran out of gas.</strong> Let's fuel up by watching this video about Seasons.
                  </div>
                  <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/b25g4nZTHvM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <v-expand-x-transition>
                  <div v-if="timerCount ==0">
                    <v-btn
                      class="indigo darken-4 white--text"
                      style="margin-top: 5px; margin-left: 600px; text-transform: capitalize; width: 100px"
                      @click=" $router.push('/quiz1/intro')"
                    >Next</v-btn>
                  </div>
                </v-expand-x-transition>
              </div>
            </section>
          </div>
        </div>
      </div>
    </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      answer: "incorrect",
      timerCount: 5
    };
  },
  methods: {
    showComp() {
      this.show = true;
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  }
};
</script>

<style scoped>
.card {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}
.paulo {
  width: 150px;
  background: white;
  border-radius: 50%;
}
.back {
  height: 90%;
  width: 90%;
  position: absolute;
  border-radius: 30px;
  margin-top: 30px;
  margin-left: 50px;
  position: absolute;
  object-fit: cover;
}
#text {
  border-style: solid;
  border: blue 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 100px;
}
.option {
  width: 90%;
  margin-left: 30px;
  text-transform: capitalize;
}
</style>