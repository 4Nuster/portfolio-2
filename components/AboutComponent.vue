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
            Software Developer with<span class="alterfont">.</span> MSc in Computer Vision<span class="alterfont">.</span>
            Possessing a strong aptitude for rapid learning<span class="alterfont">,</span> creativity<span
              class="alterfont">,</span> adaptability<span class="alterfont">,</span> and self<span
              class="alterfont">-</span>motivation <span class="alterfont">.</span> My passion lies in Web
            Development<span class="alterfont">, </span> UI<span class="alterfont">/</span>UX Design<span
              class="alterfont">,</span> Virtual Reality<span class="alterfont">,</span> and Artificial Intelligence<span
              class="alterfont">.</span><br><br>

            Work Experience<span class="alterfont">:</span><br>

            <span class="date">
              <span class="alterfont">(</span>Feb<span class="alterfont"> 2023 - </span>Present<span
                class="alterfont">)</span><br>
            </span>
            <span class="alterfont">-</span> Salesforce Developer Consultant at Levio<br>

            <span class="date">
              <span class="alterfont">(</span>Jul<span class="alterfont"> 2022 - </span>Feb<span class="alterfont">
                2023)</span><br>
            </span>
            <span class="alterfont">-</span> Frontend Developer and UI<span class="alterfont">/</span>UX Designer at
            Originova<br><br>

            Education<span class="alterfont">:</span><br>

            <span class="date">
              <span class="alterfont">(</span>Ongoing<span class="alterfont">)</span><br>
            </span>
            <span class="alterfont">-</span> PhD<span class="alterfont">,</span> AI <span class="alterfont">&</span> Image
            Processing at University of
            Biskra<br>

            <span class="date">
              <span class="alterfont">(</span>Oct<span class="alterfont"> 2022)</span><br>
            </span>
            <span class="alterfont">-</span> MSc<span class="alterfont">,</span> Computer Vision at USTHB<br>

            <span class="date">
              <span class="alterfont">(</span>Nov<span class="alterfont"> 2020)</span><br>
            </span>
            <span class="alterfont">-</span> BSc<span class="alterfont">,</span> Software Engineering at USTHB<br>
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
  background: linear-gradient(to bottom, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 12px var(--black-50));
}

.title-bg {
  margin-left: 20px;
  margin-top: 10px;
  font-family: DovensBold, sans-serif;
  font-size: clamp(32px, 50vw, 72px);
  line-height: clamp(32px, 50vw, 72px);
  -webkit-text-stroke: 3px var(--primary-color-50);
  color: var(--background-color);
  z-index: -1;
}

.content {
  font-family: DovensRegular, sans-serif;
  font-size: clamp(18px, 50vw, 24px);
  color: var(--white);
}

.content .alterfont {
  font-family: RussoOne, sans-serif;
}

.content .date {
  color: var(--primary-color);
  font-family: DovensLight, sans-serif;
  display: block;
  margin-top: 6px;
  margin-bottom: -3px;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.my-photo {
  height: 50vh;
  filter: drop-shadow(0 6px 12px var(--black-50));
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

  .about .bg2 {
    filter: blur(6px);
    animation: rotation 20s linear infinite;
  }
}
</style>
