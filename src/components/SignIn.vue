<template>
  <div>
    <div class="backdrop" @click.self="closeExplore">
      <v-card class="form">
        <div
          class="white--text rounded-bottom-0"
          style="width: 100%; padding: 10px; text-align: center; font-size: 18px; background: purple "
        >Sign Up</div>

        <div
          style="text-align: center; margin-top: 30px; margin-bottom: 30px; font-size: 18px;"
        >Join Tiny Astronomer!</div>
        <div>
          <div style="display: flex; margin-left: 3px; margin-top: 20px">
            <div class="input-column pt-3">First Name</div>
            <input
              class="user-name"
              type="text"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="First Name"
              v-model="firstName"
            />
            <br />
            <br />
          </div>
        </div>

        <div>
          <div style="display: flex; margin-left: 3px; margin-top: 5px">
            <div class="input-column pt-3">Last Name</div>
            <input
              class="user-name"
              type="text"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="Last Name"
              v-model="lastName"
            />
            <br />
            <br />
          </div>
        </div>

        <div>
          <div style="display: flex; margin-left: 3px; margin-top: 5px">
            <div class="input-column pt-3">User Name</div>
            <input
              class="user-name"
              type="text"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="Username"
              v-model="userName"
            />
            <br />
            <br />
          </div>
        </div>

        <div>
          <div style="display: flex; margin-left: 3px; margin-top: 5px">
            <div class="input-column pt-3">Password</div>
            <input
              class="user-name"
              type="password"
              required
              autocomplete="off"
              id="id.name"
              name="id.name"
              placeholder="Password"
              v-model="password"
            />
            <br />
            <br />
          </div>
        </div>
        <div
          style="text-align: center; font-size: 12px; margin-top: 20px;"
        >By Signing up for Tiny Astronomer, you agree to our</div>
        <v-spacer style="text-align: center; font-size: 12px;">
          <a href>Terms of Use and Privacy Policy</a>
        </v-spacer>
        <v-btn
          class="purple white--text"
          style="text-transform: Capitalize; text-align: center; margin-left: 30%; margin-top: 20px; width: 200px"
        >Submit</v-btn>
        <v-spacer></v-spacer>
        <div class="caption alr-have-accnt" style="text-align: center; margin-top: 10px">
          <span @click="loginForm" style="text-decoration: underline">Already have an account?</span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    closeExplore() {
      this.$emit("close");
    },
    loginForm(){
        this.$emit("login","Login-form")
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
  margin-top: 3%;
  position: center;
  width: 500px;
  height: 510px;
}

.input-column {
  font-family: Arial, Helvetica, sans-serif;
  padding: 3px;
  width: 110px;
  margin-left: 25px;
  border: solid rgb(179, 173, 173) 1px;
  border-radius: 5px;
  background: rgb(207, 200, 200);
  text-align: center;
  vertical-align: center;
}
.user-name {
  padding: 3px;
  width: 300px;
  margin-left: 15px;
  border: solid rgb(179, 173, 173) 1px;
  border-radius: 5px;
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

.alr-have-accnt :hover{
    cursor: pointer;
    
}
</style>