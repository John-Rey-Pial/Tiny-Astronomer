<template>
  <div>
      <img src="../../../src/assets/materials/SolarSystem.png" alt="" class="background">
      <div class="overlay"></div>
    <div style="display: flex; z-index: 1000; position: relative">
      <section style="margin-top: 20px; margin-left: 50px">
        <span style="font-size: 20px">
          <strong>Chapter</strong>
          <nav style="font-size: 24px;">
            <ul>
              <li  @click="$router.push('/solar/0')">
                <strong>1</strong>
                <span style="margin-left: 50px">
                  <strong>Solar System</strong>
                </span>
              </li>
              <li  @click="$router.push('/solar/1')">
                <strong>2</strong>
                <span style="margin-left: 50px">
                  <strong>The Sun</strong>
                </span>
              </li>
              <li  @click="$router.push('/solar/2')">
                <strong>3</strong>
                <span style="margin-left: 50px">
                  <strong>The Rocky Planets</strong>
                </span>
              </li>
              <li  @click="$router.push('/solar/7')">
                <strong>4</strong>
                <span style="margin-left: 50px">
                  <strong>Gas Giants</strong>
                </span>
              </li>
              <li  @click="$router.push('/solar/12')">
                <strong>4</strong>
                <span style="margin-left: 50px">
                  <strong>Dwarf Planet and Space Objects</strong>
                </span>
              </li>
            </ul>
          </nav>
        </span>
      </section>
      <section style="margin-top: 20px; margin-left: 50px">
           <img src="../../../src/assets/materials/SolarSystem.png" alt="Motions" style="width: 350px">
      </section>
    </div>
  </div>
</template>

<style scoped>
.background{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 94%;
    opacity: 0.2;
}

nav ul {
  text-decoration: none;
  list-style-type: none;
  margin-top: 40px;
  cursor: pointer;
}
ul li {
  padding: 10px;
}
li:hover {
  background-color: rgb(219, 194, 219);
  border-radius: 10px;
}
</style>