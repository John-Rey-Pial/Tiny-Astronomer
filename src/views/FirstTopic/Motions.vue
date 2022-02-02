<template>
  <div>
      <img src="../../../src/assets/materials/Motions.png" alt="" class="background">
      <div class="overlay"></div>
    <div style="display: flex; z-index: 1000; position: relative">
      <section style="margin-top: 20px; margin-left: 50px">
        <span style="font-size: 20px">
          <strong>Chapter</strong>
          <nav style="font-size: 24px;">
            <ul>
              <li  @click="$router.push('/motions/0')">
                <strong>1</strong>
                <span style="margin-left: 50px">
                  <strong>What makes the Earth go round?</strong>
                </span>
              </li>
              <li  @click="$router.push('/motions/1')">
                <strong>2</strong>
                <span style="margin-left: 50px">
                  <strong>Rotation of the Earth</strong>
                </span>
              </li>
              <li  @click="$router.push('/motions/2')">
                <strong>3</strong>
                <span style="margin-left: 50px">
                  <strong>Revolution of the Earth</strong>
                </span>
              </li>
              <li  @click="$router.push('/motions/3')">
                <strong>4</strong>
                <span style="margin-left: 50px">
                  <strong>Seasons</strong>
                </span>
              </li>
            </ul>
          </nav>
        </span>
      </section>
      <section style="margin-top: 20px; margin-left: 50px">
           <img src="../../../src/assets/materials/Motions.png" alt="Motions" style="width: 350px">
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