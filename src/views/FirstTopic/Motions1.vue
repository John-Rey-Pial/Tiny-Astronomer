<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px; margin-left: 10px">
        <img src="../../../src/assets/materials/rotation.png" width="350" height="300" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 5px; margin-left: 100px; text-align: justify"
        scroll
      >
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
        <span
          style="font-size: 14px; margin-left: 250px; color: gray; text-align: right"
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
                    <strong>It is night time now, so the earth is facing ______</strong>
                  </div>
                </div>
                <v-spacer style="margin-top: 50px"></v-spacer>
                <v-btn
                  class="purple lighten-4 black--text option mb-4"
                  @click="others"
                >towards the sun</v-btn>
                <v-btn
                  class="purple lighten-4 black--text option mb-4"
                  @click="correct"
                >away from the sun</v-btn>
                <v-btn
                  class="purple lighten-4 black--text option mb-4"
                  @click="others"
                >at the back of the sun</v-btn>
                <v-expand-x-transition>
                  <div
                    class="green white--text"
                    style="font-size: 15px; margin-left: 30px; text-align: center; width: 600px; padding: 10px; border-radius: 20px"
                    v-if="timerCount ==0"
                  >
                    <strong>Hint</strong>
                    <v-divider style="background: grey"></v-divider>
                    <v-spacer></v-spacer>
                    <span style="font-size: 15px">It is much brighter if we talk face to face.</span>
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
                      <strong>INDEED! The side facing the sun is bathed in light and heat- we call this daytime. This side facing away is cooler and darker, and experiences night. Because the earth is constantly spinning, the line between day and night is always moving around the planet. A day on Earth last 24 hours- that is how long it takes for the plan to spin around once.</strong>
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
                  @click=" $router.push('/motions/2')"
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
                        <strong>OH NO. You got it wrong! The side facing the sun is bathed in light and heat- we call this daytime. This side facing away is cooler and darker, and experiences night. Because the earth is constantly spinning, the line between day and night is always moving around the planet. A day on Earth last 24 hours- that is how long it takes for the plan to spin around once.</strong>
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
                        src="https://www.youtube.com/embed/1SN1BOpLZAs"
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
                        <strong>How many days does it take for Earth to complete one rotation?</strong>
                      </div>
                    </div>
                    <v-spacer style="margin-top: 50px"></v-spacer>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="others2"
                    >23 hours</v-btn>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="correct"
                    >1 Day</v-btn>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="others2"
                    >1 year</v-btn>
                    <div v-if="answer === 'others2'">
                      <v-btn
                        class="red darken-4 white--text"
                        style="margin-top: 5px; margin-left: 600px; text-transform: capitalize; width: 100px"
                        @click=" $router.push('/solar/1')"
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