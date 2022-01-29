<template>
  <div>
    <div>
      <div class="backdrop" @click.self="closeExplore">
        <v-card class="form rounded-2" style="width: 38%; height: 24rem">
          <section
            class="heading-6 white--text"
            style="text-align: center; padding-top: 10px; padding-bottom: 10px; height: 11%"
          >Login</section>
          <v-spacer class="mb-10"></v-spacer>
          <div style="display: flex; margin-left: 20px;">
            <div class="input-column pt-3">Username</div>
            <input
              class="user-name"
              type="text"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="Username"
              v-model="name"
            />
            <br />
            <br />
          </div>

          <div style="display: flex; margin-top: 15px; margin-left: 20px; margin-bottom: 10px;">
            <div class="input-column pt-3">Password</div>
            <input
              class="user-name"
              type="text"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="Password"
              v-model="name"
            />
            <br />
            <br />
          </div>

          <span class="caption" style="padding-left: 340px; ">Forgot your password?</span>
          <v-btn class="submit-btn purple white--text mt-3">Login</v-btn>
          <v-spacer class="mb-4"></v-spacer>
          <span style="margin-left: 46%;">or</span>
          <v-spacer class="mb-2"></v-spacer>
          <v-btn class="depressed" style="margin-left: 37%;" >
            <strong @click="signUp">Sign Up</strong>
          </v-btn>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      component: ''
    };
  },

  methods: {
    closeExplore() {
      this.$emit("close");
    },
    signUp(){
       this.$emit('signUp', 'SignIn')
    }
  }
};
</script>


<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}
.form {
  margin-left: 35%;
  margin-right: 40%;
  margin-top: 8%;
  position: center;
}
section {
  background-color: purple;
  width: 100%;
  height: 30px;
}
.input-column {
  padding: 5px;
  width: 120px;
  margin-left: 15px;
  border: solid rgb(179, 173, 173) 2px;
  border-radius: 5px;
  background: rgb(207, 200, 200);
  text-align: center;
  vertical-align: center;
}
.user-name {
  padding: 5px;
  width: 300px;
  margin-left: 15px;
  border: solid rgb(179, 173, 173) 2px;
  border-radius: 5px;
}

.submit-btn {
  margin-left: 13%;
  width: 70%;
  text-transform: capitalize;
}
#paulo {
  display: flex;
  flex: 15%;
  width: 10%;
  margin-top: 1rem;
  margin-left: 4rem;
}
#paulo-message {
  flex: 90%;
}
.message {
  height: 40%;
  margin-right: 10%;
  margin-top: 5%;
  margin-left: 1rem;
  border-style: solid;
  border: blue 10px;
  border-radius: 3px;
}
.flex-container {
  display: flex;
  justify-content: space-evenly;
}
::placeholder {
  color: rgba(228, 187, 228, 0.911);
}
input:focus::placeholder {
  color: transparent;
}
input:focus {
  outline: none !important;
  border-color: violet;
  box-shadow: 0 0 1 0px #719ece;
}



</style>