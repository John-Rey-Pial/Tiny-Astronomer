<template>
  <div>
    <div style="display: flex;">
      <section style="margin-top: 20px; margin-left: 10px">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/6FB0rDsR_rc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <span class="caption" style="color: gray">Source: &copy; Crashcourse Kids, 2016</span>
      </section>
      <section style="margin-right: 70px; margin-top: 20px; margin-left: 50px; text-align: justify">
        <span style="font-size: 30px;">
          <strong>The Sun</strong>
        </span>
        <v-spacer class="mb-6"></v-spacer>
        <span>
          The sun is our local star, a great spinning ball of hot, 
          glowing gas that provides light and heat to all the planets
           in the solar system. The source of its power lies deep in its 
           centra core, which is like a continually exploding nuclear bomb
            giving out enoumous amounts of energy. The sun is by far the 
            biggest and heaviest object in the whole solar system, and its 
            gravity keeps everything else traveling around it in slightly 
            flattened circular paths called orbits.
        </span>
        <v-spacer></v-spacer>
        <span
          style="font-size: 14px; margin-left: 100px; color: gray;"
        >(Click 'Next' if you are done reading.)</span>
        <v-btn
          class="indigo darken-4 white--text"
          style="margin-top: 5px; margin-left: 300px; text-transform: capitalize; width: 100px"
          @click="$router.push('/solar/2')"
        >Next</v-btn>
      </section>
    </div>
  </div>
</template>