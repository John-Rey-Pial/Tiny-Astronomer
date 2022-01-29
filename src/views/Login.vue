<template >
  <div class="home">
    <v-container>
      <img id="logo" src="../assets/materials/Logo.png" alt="logo" />
      <v-flex class="flex-container">
        <img id="landing-image" src="../assets/materials/LandingImage.png" alt="landing-image" />
        <span id="text" class="display-1 ml-16">
          Building a virtual
          <v-spacer>classroom,</v-spacer>enjoyed by
          <v-spacer>everyone.</v-spacer>
          <img id="design" src="../assets/materials/Interface Text.png" alt="design" />
          <v-spacer class="mb-0"></v-spacer>
          <span class="caption">Non-profit platform that aims to impart knowledge to anyone.</span>
          <v-spacer></v-spacer>
          <v-btn
            class="purple accent-4 white--text"
            style="width: 10rem; height:3rem"
            @click="toggleExplore"
          >Explore</v-btn>
        </span>
      </v-flex>
    </v-container>

    <Foot class="mt-10" />
    <div v-if="showExplore">
      <component :is="component" @close="toggleExplore" v-on:signUp="signInOpen($event)" v-on:login="loginOpen($event)" ></component>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/Login-form.vue";
import Foot from "../components/Footer.vue";
import SignIn from "../components/SignIn.vue";
export default {
  components: {
    LoginForm: LoginForm,
    Foot: Foot,
    SignIn: SignIn
  },

  data() {
    return {
      showExplore: false,
      component:''
    };
  },

  methods: {
    toggleExplore() {
      this.showExplore = !this.showExplore;
      this.component="Login-form"
    },
    signInOpen(updatedView){
      this.component= updatedView
    },
    loginOpen(updatedView){
      this.component= updatedView
    }
  }
};
</script>
<style scoped>
.home {
  background: whitesmoke;
}
#logo {
  margin-left: 35%;
  margin-right: 40%;
  width: 35%;
  height: 35%;
}
#landing-image {
  align-items: center;
  width: 0%;
  height: 0%;
  margin-left: 8%;
  margin-top: 3rem;
  vertical-align: middle;
  flex: 40%;
}
#text {
  flex: 60%;
  margin-top: 3rem;
  padding-left: 10%;
  text-align: left;
  line-height: 45px;
}
.flex-container {
  display: flex;
  justify-content: space-evenly;
}
#design {
  width: 60%;
}
</style>