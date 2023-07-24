<template>
  <section class="about">
    <img class="bg4" src="../assets/crincle.svg" alt="" />
    <div>
      <div class="flex">
        <div class="title-grid">
          <h2 class="title">PROJECTS</h2>
          <h2 class="title-bg">PROJECTS</h2>
        </div>
        <div class="projects-menu-and-counter">
          <ul class="projects-menu">
            <li class="menu-all" @click="switchProjectCategory(0)">ALL</li>
            <li class="menu-web" @click="switchProjectCategory(1)">WEB DEV</li>
            <li class="menu-uiux" @click="switchProjectCategory(2)">UI<span>/</span>UX DESIGN</li>
            <li class="menu-ai" @click="switchProjectCategory(3)">AI</li>
            <li class="menu-game" @click="switchProjectCategory(4)">GAME DEV</li>
            <li class="menu-soft" @click="switchProjectCategory(5)">SOFTWARE DEV</li>
          </ul>
          <div class="counter-container">
            <div class="counter-grid">
              <span class="counter">49</span>
              <span class="counter-bg">49</span>
            </div>
            <p class="counter-title">ALL PROJECTS</p>
          </div>
        </div>
        <div class="project-container">
          <div class="project-image-container">

            <div class="project-image-controller" />
            <div class="project-controls">
              <span class="project-previous project-inactive-button" @click="previousProject()">PREVIOUS</span>
              <span class="project-next project-button" @click="nextProject()">NEXT</span>
            </div>
            <img class="project-image" :src="require('@/assets/projects/' + this.projects[this.selectedProject].image)"
              alt="">
          </div>
          <h3 class="project-title">{{ this.projects[this.selectedProject].title }}</h3>
          <p class="content">
            {{ this.projects[this.selectedProject].description }}
          </p>
          <!-- <div class="project-image-container">

            <div class="project-image-controller">
              <div class="project-controls">
                <span class="project-previous project-button">PREVIOUS</span>
                <span class="project-next project-button">NEXT</span>
              </div>
            </div>
            <img class="project-image" src="@/assets/projects/ai/medical palpation assistance system/1.png" alt="">
          </div>
          <h3 class="project-title">PROJECT TITLE</h3>
          <p class="content">
            The FitnessGram Pacer Test is a multistage aerobic capacity test that
            progressively gets more difficult as it continues The meter pacer test
            will begin in seconds Line up at the start The running speed starts
            slowly but gets faster each minute after you hear this signal A single
            lap should be completed each time you hear this sound Remember to run in
            a straight line and run as long as possible The second time you fail to
            complete a lap before the sound your test is over The test will begin on
            the word start On your mark get ready start
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data: () => {
    return {
      selectedProjectCategory: 0,
      selectedProject: 0,
      projects: [
        {
          image: 'ai/medical palpation assistance system/1.png',
          title: 'PROJECT ONE',
          description: 'project description is where i put a paragraph',
          tags: ['game', 'ai']
        },
        {
          image: 'ai/hiragana pose estimation/1.png',
          title: 'PROJECT TWO',
          description: 'project description is where i put a paragraph but this time its longer than the first one',
          tags: ['game', 'ai']
        }
      ]
    }
  },
  methods: {
    switchProjectCategory(to) {
      const projects = ["menu-all", "menu-web", "menu-uiux", "menu-ai", "menu-game", "menu-soft"];

      for (let i = 0; i < projects.length; i++) {
        if (projects[i] == projects[to]) continue;
        document.getElementsByClassName(projects[i])[0].style.color = "#fff";
      }
      document.getElementsByClassName(projects[to])[0].style.color = "#C17C64";
      this.selectedProjectCategory = to;
    },
    nextProject() {
      if (this.selectedProject < (this.projects.length - 1)) this.selectedProject += 1;
      this.updateProjectButtons();
    },
    previousProject() {
      if (this.selectedProject > 0) this.selectedProject -= 1;
      this.updateProjectButtons();
    },
    updateProjectButtons() {
      if (this.selectedProject == 0) {
        document.getElementsByClassName("project-previous")[0].classList.replace("project-button", "project-inactive-button");
        if (document.getElementsByClassName("project-next")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-next")[0].classList.replace("project-inactive-button", "project-button");
      }

      if (this.selectedProject == (this.projects.length - 1)) {
        document.getElementsByClassName("project-next")[0].classList.replace("project-button", "project-inactive-button");
        if (document.getElementsByClassName("project-previous")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-previous")[0].classList.replace("project-inactive-button", "project-button");
      }
    }
  }
};
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

.about .bg4 {
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

.flex {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
}

.title-grid {
  position: absolute;
  display: grid;
  transform: rotate(-90deg);
  /* margin-left: -50vw; */
}

.title-grid .title,
.title-grid .title-bg {
  grid-row: 1;
  grid-column: 1;
}

.title {
  font-family: DovensBold, sans-serif;
  font-size: clamp(48px, 70vw, 100px);
  line-height: clamp(48px, 70vw, 100px);
  background: linear-gradient(to left, #c29a75, #c17c64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 12px #00000088);
}

.title-bg {
  margin-right: 20px;
  margin-top: 10px;
  font-family: DovensBold, sans-serif;
  font-size: clamp(48px, 70vw, 100px);
  line-height: clamp(48px, 70vw, 100px);
  -webkit-text-stroke: 3px #c17c6488;
  color: #151518;
  z-index: -1;
}

.projects-menu-and-counter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 22vw;
  /*padding-right: 2vw;
  border-radius: 5%;
  border-right: #C17C64 5px solid;*/
}

.projects-menu {
  color: #fff;
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  text-align: left;
  margin-bottom: 25vh;
}

.projects-menu li {
  margin-bottom: 15px;
  list-style-type: none;
  transition: color 500ms;
  cursor: pointer;
}

.projects-menu li span {
  font-family: RussoOne, sans-serif;
}

.projects-menu .menu-all {
  color: #C17C64;
}

.counter-grid {
  display: grid;
}

.counter-grid .counter,
.counter-grid .counter-bg {
  grid-row: 1;
  grid-column: 1;
}

.counter {
  font-family: RussoOne, sans-serif;
  font-size: clamp(48px, 70vw, 160px);
  line-height: clamp(48px, 70vw, 160px);
  background: linear-gradient(to bottom, #c29a75, #c17c64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 12px #00000088);
}

.counter-bg {
  margin-right: -20px;
  margin-top: 10px;
  font-family: RussoOne, sans-serif;
  font-size: clamp(48px, 70vw, 160px);
  line-height: clamp(48px, 70vw, 160px);
  -webkit-text-stroke: 3px #c17c6488;
  color: #151518;
  z-index: -1;
}

.counter-title {
  color: #fff;
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
}

.project-container {
  text-align: left;
  width: 40vw;
  margin-right: 5vw;
  margin-left: 3vw;
}

.project-image-controller {
  position: absolute;
  margin-top: -25px;
  border-radius: 15px;
  width: calc(600px - 6px);
  height: 350px;
  border: solid 3px #C17C64;
  z-index: -1;
}

.project-image {
  border-radius: 15px;
  width: 600px;
  height: 350px;
}

.project-controls {
  background-color: #151518;
  width: 400px;
  margin-left: 100px;
  margin-top: -35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
}

.project-button {
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  color: #c17c64;
  cursor: pointer;
}

.project-previous {
  margin-left: 20px;
}

.project-next {
  margin-right: 20px;
}

.project-inactive-button {
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  color: #5A6473;
  opacity: 0.2;
}

.project-title {
  margin-top: 20px;
  font-family: DovensSemiBold, sans-serif;
  font-size: 48px;
  background: linear-gradient(to bottom, #c29a75, #c17c64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content {
  margin-top: 10px;
  font-family: DovensLight, sans-serif;
  font-size: 18px;
  color: #ffffff;
  height: 250px;
}
</style>
  