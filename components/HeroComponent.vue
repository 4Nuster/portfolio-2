<template>
  <section class="hero">
    <img class="bg1" src="../assets/crincle.svg">
    <div class="container">
      <h2 class="nickname">
        <span class="start">&#8220;</span>NOOSTER<span>&#8221;</span>
      </h2>
      <h1 class="title">YASSINE BACHA</h1>
      <h2 class="subtitle">SOFTWARE DEVELOPER<br />MSc IN COMPUTER VISION</h2>
      <p class="scroll">Scroll down to continue</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero .bg1 {
  position: absolute;
  height: 150%;
  width: 150%;
  top: -62%;
  left: -15%;
  z-index: -1;
  /* filter: blur(4px); */
  animation: rotation 60s linear infinite;
}

.hero .container {
  margin-top: 200px;
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

.nickname {
  font-family: DovensBold, sans-serif;
  font-size: clamp(32px, 50vw, 80px);
  color: #151518;
  -webkit-text-stroke: .04em #c29a7588;
  line-height: 0px;
  margin-right: 24vw;
  margin-bottom: 20px;
}

.hero .nickname span {
  font-family: SecularOne;
  -webkit-text-stroke: .01em #c29a7588;
}

.hero .title {
  font-family: DovensBold, sans-serif;
  font-size: clamp(48px, 70vw, 120px);
  line-height: clamp(48px, 70vw, 120px);
  background: linear-gradient(to bottom, #c29a75, #c17c64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0px;
  margin-bottom: 0px;
  filter: drop-shadow(0 6px 12px #00000088);
}

.hero .subtitle {
  font-family: DovensRegular, sans-serif;
  font-size: clamp(24px, 50vw, 48px);
  color: #151518;
  background: linear-gradient(to bottom, #c17c64, #5b423c);
  -webkit-background-clip: text;
  -webkit-text-stroke: .1em transparent;
  /* -webkit-text-stroke: .03em #c17c64; */
  margin-top: 0px;
}

.scroll {
  font-size: 28px;
  font-family: DovensRegular, sans-serif;
  color: #ffffff;
  margin-top: 200px;
  opacity: 0;
  animation: fade-in-out ease-in-out 5s 1.5s infinite;
}

@keyframes fade-in-out {
  0% {
    opacity: 0%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    opacity: 0%;
  }
}</style>
