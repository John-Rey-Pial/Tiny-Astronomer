<template>
  <div>
    <div>
      <div>
        <div style="display: flex">
          <v-card class="rounded-2 mt-2 ml-2 mb-0" style="width: 17%; height: 7rem;  ">
            <section
              class="heading-6 white--text rounded-bottom-0"
              style="text-align: center; padding-top: 5px; padding-bottom: 5px; width:100%;"
              :v-model="name"
            >Student Name</section>
            <v-flex class="flex-container">
              <v-icon class="user ml-2 mt-1" style="font-size: 70px">mdi-account-circle</v-icon>
              <span class="learning-level">
                Learning Level:
                <v-spacer>Novice</v-spacer>
              </span>
            </v-flex>
          </v-card>

          <Avatar />
        </div>
      </div>
    </div>

    <div>
      <div>
        <div style="display: flex">
          <v-card class="rounded-2 mt-1 ml-2" style="width: 17%; height: 26.4rem">
            <section
              class="purple heading-6 white--text rounded-bottom-0 pb-2 pt-1"
              style="text-align: center; width:100%; "
            >Topic</section>
            <nav>
              <v-spacer style="margin-bottom: 40px"></v-spacer>
              <ul class="heading-3 black--text rounded-0" style="padding-left:0px;">
                <li>
                  <router-link to="/intro" >Introduction</router-link>
                </li>
                <li>
                  <router-link to="/content" >Content</router-link>
                </li>
                <li>
                  <router-link to="/progress">Progress</router-link>
                </li>
                <li>
                  <router-link to="/surveys">Surveys</router-link>
                </li>
                <li>
                  <router-link to="/references" >References</router-link>
                </li>
              </ul>
            </nav>
          </v-card>

          <div>
            <div class="content-section mt-2">
              <v-card>
                <section
                  class="indigo darken-4 heading-6 white--text rounded-bottom-0"
                  style="text-align: left; padding-top: 5px; padding-bottom: 2px;"
                >
                  <span class="ml-4">{{$route.name}}</span>
                </section>
                <section class="white" style=" height:388px; margin-bottom: 2px">
                  <router-view />
                </section>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>     
<script>
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
export default {
  components: { Avatar, Footer },

  data() {
    return {};
  }
};
</script>

<style scoped>
section {
  background: purple;
}

.learning-level {
  text-align: left;
  margin-top: 10px;
  line-height: 30px;
}
.flex-container {
  display: flex;
  justify-content: space-evenly;
}

nav ul {
  display: block;
  text-decoration: none;
  list-style-type: none;
  text-align: center;
}
li a {
  text-decoration: none;
  color: inherit;
  border: solid rgb(240, 240, 240) 1px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 4px;

  padding-left: 55px;
  padding-right: 55px;
}
nav li {
  margin-top: 30px;
}

a:hover {
  background-color: rgb(219, 194, 219);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  padding-left: 55px;
  padding-right: 55px;
  transition-delay: 0.5ms;
  border-radius: 10px;
}
.router-link-exact-active {
  background-color: rgb(219, 194, 219);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 10px;
}
.user-name {
  display: flex;
}

.content-section {
  width: 65rem;
  margin-left: 30px;
  background: blue;
}
</style>