<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px">
        <img
          src="../../../src/assets/materials/revolution.png"
          alt="Revolution"
          width="360"
          height="310"
          style="margin-left: 10px"
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
                style="width: 250px; margin-left: 150px; margin-top: 100px;"
              />
            </section>
            <section>
              <div v-if="answer==='incorrect'">
                <div id="text" class="blue lighten-5 blue--text">
                  <div style="font-size: 18px">
                    <strong>OH NO! We ran out of gas.</strong> Let's fuel up by answering this question.
                  </div>
                  <div style="color: black; font-size: 30px; margin-top: 10px; text-align: center">
                    <strong>What is responsible for the Earth's shift of seasons?</strong>
                  </div>
                </div>
                <v-spacer style="margin-top: 50px"></v-spacer>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="others">Rotation</v-btn>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="correct">Revolution</v-btn>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="others">Reflection</v-btn>
                <v-expand-x-transition>
                  <div
                    class="green white--text"
                    style="font-size: 15px; margin-left: 30px; text-align: center; width: 650px; padding: 10px; border-radius: 20px"
                    v-if="timerCount ==0"
                  >
                    <strong>Hint</strong>
                    <v-divider style="background: grey"></v-divider>
                    <v-spacer></v-spacer>
                    <span
                      style="font-size: 15px"
                    >I rotate in 24 hours in my axis. I revolve in 1 year with the tilted Earth. I reflect if I want to.</span>
                  </div>
                </v-expand-x-transition>
              </div>

              <div v-else-if="answer === 'correct'">
                <div id="text" class="blue lighten-5 blue--text" style="width: 700px">
                  <div style="font-size: 18px">
                    <strong>YOU ARE RIGHT!</strong> Now we are ready to go!
                  </div>
                  <div style="color: black; font-size: 20px; margin-top: 10px; text-align: justify">
                    <span>
                      <strong>INDEED! Earth's tilted axis causes the seasons. Throughout the year, different parts of Earth receive the Sun's most direct rays. So, when the North Pole tilts toward the Sun, it's summer in the Northern Hemisphere. And when the South Pole tilts toward the Sun, it's winter in the Northern Hemisphere.</strong>
                    </span>
                    <v-spacer style="margin-bottom: 10px;"></v-spacer>
                    <div class="blue--text" style=" text-transform: uppercase; font-size: 18px">
                      <strong>Good Job! Now lets up up and away to the next chapter ...</strong>
                    </div>
                  </div>
                </div>
                <v-btn
                  class="indigo darken-4 white--text"
                  style="margin-top: 5px; margin-left: 600px; text-transform: capitalize; width: 100px"
                  @click=" $router.push('/motions/3')"
                >Next</v-btn>
              </div>
              <div v-else>
                <div
                  id="text"
                  class="blue lighten-5 blue--text"
                  style="margin-right: 200px; overflow: scroll; height: 350px; width: 800px"
                >
                  <div>
                    <section
                      style="margin-right: 70px; margin-top: 20px; margin-left: 50px; text-align: justify"
                    >
                      <span style="font-size: 30px;">
                        <strong>Earth's Rotation</strong>
                      </span>
                      <v-spacer class="mb-6"></v-spacer>
                      <span>
                        <strong>OH NO. You got it wrong! Earth's tilted axis causes the seasons. Throughout the year, different parts of Earth receive the Sun's most direct rays. So, when the North Pole tilts toward the Sun, it's summer in the Northern Hemisphere. And when the South Pole tilts toward the Sun, it's winter in the Northern Hemisphere.</strong>
                      </span>
                      <v-spacer style="margin-bottom: 25px"></v-spacer>
                      <span
                        style="font-size: 20px; color: white; background: grey; padding: 10px; border-radius: 10px"
                      >
                        <strong>WELL, CHECK THIS OUT!</strong>
                      </span>
                    </section>
                    <section style="margin-top: 20px; margin-left: 100px">
                      <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/Y0_GLKU0NEY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <v-spacer></v-spacer>
                      <span
                        class="caption"
                        style="color: gray"
                      >Source: &copy; Crashcourse Kids, 2016</span>
                    </section>
                    <v-spacer style="margin-bottom: 10px;">
                      <v-divider></v-divider>
                    </v-spacer>
                    <div class="blue lighten-5 blue--text">
                      <div style="font-size: 18px; text-align: center">
                        <strong>OH NO! We ran out of gas.</strong> Let's fuel up by answering this question.
                      </div>
                      <div
                        style="color: black; font-size: 30px; margin-top: 10px; text-align: center"
                      >
                        <strong>If the Northern hemisphere tilts away from the sun, it is _____ there.</strong>
                      </div>
                    </div>
                    <v-spacer style="margin-top: 50px"></v-spacer>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="others2"
                    >Spring</v-btn>
                    <v-btn class="purple lighten-4 black--text option mb-4" @click="correct">Winter</v-btn>
                    <v-btn class="purple lighten-4 black--text option mb-4" @click="others2">Autumn</v-btn>
                    <div v-if="answer === 'others2'">
                      <v-btn
                        class="red darken-4 white--text"
                        style="margin-top: 5px; margin-left: 600px; text-transform: capitalize; width: 100px"
                        @click=" $router.push('/motions/2')"
                      >TRY AGAIN</v-btn>
                    </div>
                  </div>
                </div>
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
      timerCount: 60
    };
  },
  methods: {
    showComp() {
      this.show = true;
    },
    correct() {
      this.answer = "correct";
    },
    others() {
      this.answer = "others";
    },
    others2() {
      this.answer = "others2";
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
  margin-top: 200px;
}
.option {
  width: 90%;
  margin-left: 30px;
  text-transform: capitalize;
}
</style>