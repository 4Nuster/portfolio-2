<template>
  <section class="hero">
    <img class="bg1" src="../assets/crincle.svg">
    <div class="container">
      <h2 class="nickname">
        <span class="start">&#8220;</span>NUSTER<span>&#8221;</span>
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
  color: var(--background-color);
  -webkit-text-stroke: .04em var(--secondary-color-50);
  line-height: 0px;
  margin-right: 20vw;
  margin-bottom: 20px;
}

.hero .nickname span {
  font-family: SecularOne;
  -webkit-text-stroke: .01em var(--secondary-color-50);
}

.hero .title {
  font-family: DovensBold, sans-serif;
  font-size: clamp(48px, 70vw, 120px);
  line-height: clamp(48px, 70vw, 120px);
  background: linear-gradient(to bottom, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0px;
  margin-bottom: 0px;
  filter: drop-shadow(0 6px 12px var(--black-50));
}

.hero .subtitle {
  font-family: DovensRegular, sans-serif;
  font-size: clamp(24px, 50vw, 48px);
  color: var(--background-color);
  background: linear-gradient(to bottom, var(--primary-color), var(--alternative-color));
  -webkit-background-clip: text;
  -webkit-text-stroke: .1em transparent;
  /* -webkit-text-stroke: .03em var(--primary-color); */
  margin-top: 0px;
}

.scroll {
  font-size: 28px;
  font-family: DovensRegular, sans-serif;
  color: var(--white);
  margin-top: 200px;
  opacity: 0;
  animation: fade-in-out ease-in-out 5s 1.5s infinite;
}

@keyframes fade-in-out {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media only screen and (max-width: 1600px) {
  .hero .container {
    margin-top: 180px;
  }
}

@media only screen and (max-width: 1400px) {
  .hero .container {
    margin-top: 150px;
  }

  .hero .title {
    font-size: 100px;
    line-height: 100px;
  }

  .hero .subtitle {
    font-size: 40px;
  }

  .nickname {
    font-size: 64px;
  }

  .scroll {
    margin-top: 150px;
  }
}

@media only screen and (max-width: 1200px) {
  .hero .title {
    font-size: 80px;
    line-height: 80px;
  }

  .hero .subtitle {
    font-size: 32px;
  }

  .nickname {
    font-size: 54px;
  }

  .scroll {
    margin-top: 100px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  .hero .title {
    font-size: 70px;
    line-height: 70px;
  }

  .hero .subtitle {
    font-size: 32px;
  }

  .nickname {
    font-size: 48px;
    margin-right: 32vw;
  }

  .scroll {
    margin-top: 100px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .hero {
    overflow: visible;
    margin-left: 12px;
    margin-right: 12px;
  }

  .hero .title {
    font-size: 54px;
    line-height: 54px;
  }

  .hero .subtitle {
    font-size: 20px;
  }

  .nickname {
    font-size: 32px;
    margin-right: auto;
  }

  .scroll {
    margin-top: 100px;
    font-size: 18px;
  }
}
</style>
