<template>
  <div>
    <div style="display: flex;">
      <img src="../../../src/assets/materials/gas.jpg" alt class="background" />
      <div class="overlay"></div>
      <section style="margin-top: 20px; margin-left: 50px">
        <img src="../../../src/assets/materials/Neptune.png" alt="Rotation" style="width: 400px" />
      </section>
      <section
        style="margin-right: 70px; margin-top: 20px; margin-left: 110px; text-align: justify"
      >
        <span style="font-size: 30px;">
          <strong>Neptune</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>
        <span>
          Neptune is the second coldest planet in the Solar System
          after Uranus, and the furthest from the Sun. Methane gas
          in its upper atmosphere makes it look blue in color. At
          the top of iits cloud layers, the temperature is usually
          a freezing -330F (-201C), though it can get even colder.
          Unlike its calm neighbor Uranus, Neptune often experiences
          raging storms. The planet takes its name from the ancient
          Roman god of the sea.
        </span>
        <v-spacer class="mb-4"></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px;color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
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
                    <strong>Which of the lightest planet of the solar system?</strong>
                  </div>
                </div>
                <v-spacer style="margin-top: 50px"></v-spacer>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="others">Mercury</v-btn>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="others">Jupiter</v-btn>
                <v-btn class="purple lighten-4 black--text option mb-4" @click="correct">Saturn</v-btn>
                <v-expand-x-transition>
                  <div
                    class="green white--text"
                    style="font-size: 15px; margin-left: 30px; text-align: center; width: 620px; padding: 10px; border-radius: 20px"
                    v-if="timerCount ==0"
                  >
                    <strong>Hint</strong>
                    <v-divider style="background: grey"></v-divider>
                    <v-spacer></v-spacer>
                    <span
                      style="font-size: 15px"
                    >I also have my blings. You can see it in my colorful rings.</span>
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
                      <strong>WOW! The second largest planet in the solar system, Saturn is a "gas giant" composed primarily of hydrogen and helium. But it's best known for the bright, beautiful rings that circle its equator. The rings are made up of countless particles of ice and rock that each orbit Saturn independently.</strong>
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
                  @click=" $router.push('/solar/12')"
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
                        <strong>The Gas Giants</strong>
                      </span>
                      <v-spacer class="mb-6"></v-spacer>
                      <span>
                        <strong>OH NO! You got it wrong! The second largest planet in the solar system, Saturn is a "gas giant" composed primarily of hydrogen and helium. But it's best known for the bright, beautiful rings that circle its equator. The rings are made up of countless particles of ice and rock that each orbit Saturn independently.</strong>
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
                        src="https://www.youtube.com/embed/WoPtsnIcSv8"
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
                        <strong>What is Saturn mostly composed of?</strong>
                      </div>
                    </div>
                    <v-spacer style="margin-top: 50px"></v-spacer>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="correct"
                    >Helium and Hydrogen</v-btn>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="others2"
                    >Oxygen</v-btn>
                    <v-btn
                      class="purple lighten-4 black--text option mb-4"
                      @click="others2"
                    >Carbon Dioxide</v-btn>
                    <div v-if="answer === 'others2'">
                      <v-btn
                        class="red darken-4 white--text"
                        style="margin-top: 5px; margin-left: 600px; text-transform: capitalize; width: 100px"
                        @click=" $router.push('/solar/7')"
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
.background {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 93%;
  opacity: 0.15;
}
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
