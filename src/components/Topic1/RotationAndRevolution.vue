<template>
  <div style="display: flex">
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6SzjlsuyTdk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="mt-5 ml-10"
      ></iframe>
      <v-spacer></v-spacer>
      <span class="ml-10 caption" style="color: gray">Source: &copy; Peekaboo Kidz, 2020</span>
    </div>
    <div>
      <section class="mt-5 ml-15" style="font-size: 24px;">
        <strong>Earth's Rotation and Revolution</strong>
      </section>
      <section class="mt-10">
        <button
          @click="component='Overview';OverviewActive=true; TranscriptActive=false"
          :class="{OverviewActive}"
        >
          <strong class="ml-10">Overview</strong>
        </button>
        <button
          @click="component='Transcript';TranscriptActive=true; OverviewActive=false"
          :class="{TranscriptActive}"
        >
          <strong class="ml-10">Transcript</strong>
        </button>
        <v-spacer class="mb-3"></v-spacer>
        <v-divider class="ml-5"></v-divider>
        <component v-bind:is="component"></component>
      </section>
      
      <span style="font-size: 14px; margin-left: 100px; color: gray">(Click 'Next' if you are done watching.)</span>
      <v-btn
        class="indigo darken-4 white--text"
        style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
        @click="$router.push('/motions/1')"
      >Next</v-btn>
    </div>
  </div>
</template>

<script>
import Overview from "../Topic1/Overview.vue";
import Transcript from "../Topic1/Transcript.vue";
export default {
  components: {
    Overview: Overview,
    Transcript: Transcript
  },
  data() {
    return {
      component: "Overview",
      OverviewActive: true,
      TranscriptActive: false
    };
  }
};
</script>
<style scoped>
.TranscriptActive {
  color: indigo;
}
.OverviewActive {
  color: indigo;
}
</style>
