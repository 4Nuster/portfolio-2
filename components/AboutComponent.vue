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
            A Software Developer with an MSc in Computer Vision<span>.</span> I possess a strong aptitude for rapid
            learning<span>,</span>
            creativity<span>,</span> adaptability<span>,</span> and self<span>-</span>motivation<span>.</span> My passion
            lies in the realms of Web Development<span>,</span> UI<span>/</span>UX Design<span>,</span>
            Virtual Reality<span>,</span> and Artificial Intelligence<span>.</span>
            <br><br>
            Work Experience<span>:</span> <br>
            <span>-</span> Salesforce Developer Consultant at SOLJIT <span>(</span>Feb <span>2023 -</span>
            Present<span>)</span> <br>
            <span>-</span> Frontend Developer and UI<span>/</span>UX Designer <span>(</span>Jul <span>2022 -</span> Feb
            <span>2023)</span> <br>
            <br>
            Education<span>:</span> <br>
            <span>-</span> MSc<span>,</span> Computer Vision at USTHB <span>(</span>Oct <span>2022)</span>
            <br>
            <span>-</span> BSc<span>,</span> Software Engineering at USTHB <span>(</span>Nov
            <span>2020)</span>
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
  width: 38vw;
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

.content span {
  font-family: RussoOne, sans-serif;
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

@media only screen and (max-width: 1600px) {
  .container {
    width: 32vw;
  }

  .my-photo {
    height: 40vh;
  }

  .title,
  .title-bg {
    font-size: 54px;
  }

  .content {
    font-size: 20px;
  }
}

@media only screen and (max-width: 1400px) {

  .title,
  .title-bg {
    font-size: 48px;
  }

  .content {
    font-size: 18px;
  }
}

@media only screen and (max-width: 1200px) {

  .title,
  .title-bg {
    font-size: 40px;
  }

  .content {
    font-size: 16px;
  }
}

@media only screen and (max-width: 1024px) {
  .about {
    height: auto;
  }

  .flex {
    flex-direction: column-reverse;
    margin-bottom: 50px;
  }

  .container {
    width: 80vw;
    margin-right: 0;
  }

  .my-photo {
    height: 80vw;
  }
}
</style>
