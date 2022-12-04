<template>
  <section class="about">
    <img class="bg2" src="../assets/crincle.svg" alt="" />
    <div>
      <div class="flex">
        <div class="container">
          <div class="title-grid">
            <h2 class="title">IT IS I</h2>
            <h2 class="title-bg">IT IS I</h2>
          </div>
          <p class="content">
            The FitnessGram Pacer Test is a multistage aerobic capacity test that
            progressively gets more difficult as it continues The meter pacer test
            will begin in seconds Line up at the start The running speed starts
            slowly but gets faster each minute after you hear this signal A single
            lap should be completed each time you hear this sound Remember to run in
            a straight line and run as long as possible The second time you fail to
            complete a lap before the sound your test is over The test will begin on
            the word start On your mark get ready start
          </p>
        </div>
        <img class="my-photo" src="../assets/me.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.about .bg2 {
  position: absolute;
  height: 85%;
  width: 85%;
  right: 40%;
  z-index: -1;
  filter: blur(16px);
  animation: rotation 30s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container {
  text-align: left;
  width: 40vw;
  margin-right: 5vw;
}
.title-grid {
  display: grid;
}

.title-grid .title,
.title-grid .title-bg {
  grid-row: 1;
  grid-column: 1;
}

.title {
  font-family: DovensBold, sans-serif;
  font-size: clamp(32px, 50vw, 72px);
  line-height: clamp(32px, 50vw, 72px);
  background: linear-gradient(to bottom, #c29a75, #c17c64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 12px #00000088);
}

.title-bg {
  margin-left: 20px;
  margin-top: 10px;
  font-family: DovensBold, sans-serif;
  font-size: clamp(32px, 50vw, 72px);
  line-height: clamp(32px, 50vw, 72px);
  -webkit-text-stroke: 3px #c17c6488;
  color: #151518;
  z-index: -1;
}

.content {
  font-family: DovensRegular, sans-serif;
  font-size: clamp(18px, 50vw, 24px);
  color: #ffffff;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.my-photo {
  height: 50vh;
  filter: drop-shadow(0 6px 12px #00000088);
}
</style>
