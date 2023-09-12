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
            <!-- <li class="menu-soft" @click="switchProjectCategory(5)">SOFTWARE DEV</li> -->
          </ul>
          <div class="counter-container">
            <div class="counter-grid">
              <span class="counter">{{ currentCategoryProjects.length }}</span>
              <span class="counter-bg">{{ currentCategoryProjects.length }}</span>
            </div>
            <p class="counter-title">PROJECTS</p>
          </div>
        </div>
        <div class="project-container">
          <div class="project-image-container">

            <div class="project-image-controller" />
            <div class="project-controls">
              <span class="project-previous project-inactive-button" @click="previousProject()">PREVIOUS</span>
              <span class="project-next project-button" @click="nextProject()">NEXT</span>
            </div>
            <div class="project-image-blur">
              <!-- <img class="project-image-bg" :src="require('@/assets/projects/' + this.selectedProjectImage)" />
              <img class="project-image" :src="require('@/assets/projects/' + this.selectedProjectImage)" /> -->

              <div class="project-image-bg"
                :style="'background-image: url(' + require('@/assets/projects/' + this.selectedProjectImage) + ');'" />
              <div class="project-image"
                :style="'background-image: url(' + require('@/assets/projects/' + this.selectedProjectImage) + ');'" />

              <!-- <img class="project-image-bg"
                :src="require('@/assets/projects/' + this.projects[this.selectedProject].image)" />
              <img class="project-image"
                :src="require('@/assets/projects/' + this.projects[this.selectedProject].image)" /> -->
            </div>
          </div>
          <p class="project-title">{{ this.currentCategoryProjects[this.selectedProject].title }}</p>
          <div class="project-content" v-html="this.currentCategoryProjects[this.selectedProject].description" />
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
          <p class="project-content">
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
      projectCategories: ['all', 'web', 'uiux', 'ai', 'game', 'soft'],
      selectedProject: 0,
      selectedProjectImage: 'ai/medical-palpation-assistance-system/1.png',
      projects: [
        {
          images: ['ai/medical-palpation-assistance-system/1.png', 'ai/medical-palpation-assistance-system/2.png', 'ai/medical-palpation-assistance-system/3.png'],
          image: 'ai/medical-palpation-assistance-system/1.png',
          title: 'Medical Palpation Assistance System',
          description:
            `A system aimed toward medical practitioners to learn and practice medical palpation<br/>
            The system relies on Virtual Reality and Deep Learning<br/><br/>
            Tools used<span>:</span> Unreal Engine <span>4</span><span>,</span> Blender<span>,</span> Leap Motion<span>,</span> JavaScript<span>,</span> NodeJS<span>,</span>
            ExpressJS<span>,</span> ML<span>5</span>JS<span>,</span> P<span>5</span>JS`,
          tags: ['game', 'ai']
        },
        {
          images: ['game/timgad/1.jpg', 'game/timgad/2.jpg', 'game/timgad/3.jpg'],
          image: 'game/timgad/1.jpg',
          title: 'Timgad Virtual Scouting',
          description:
            `A realistic recreation of the historical site of Timgad in a Virtual Reality environment<br/><br/>
            Tools used<span>:</span> Unreal Engine <span>4,</span> Blender`,
          tags: ['game']
        },
        {
          images: ['game/parker/2.png', 'game/parker/3.png', 'game/parker/1.png'],
          image: 'game/parker/2.png',
          title: 'Parker Become Probe',
          description:
            `Submitted solution to the NASA Space Apps Challenge <span>2022</span><br/>
            A <span>3</span>D game that revolves around the journey of the Parker solar probe<br/><br/>

            Tools used<span>:</span> JavaScript<span>,</span> ThreeJS<span>,</span> Spline<span>,</span> Blender`,
          tags: ['game']
        },
        {
          images: ['ai/hiragana-pose-estimation/1.png', 'ai/hiragana-pose-estimation/2.png', 'ai/hiragana-pose-estimation/3.png'],
          image: 'ai/hiragana-pose-estimation/1.png',
          title: 'Japanese Hiragana Mini Game with Pose Estimation AI',
          description:
            `A mini<span>-</span>game that teaches Japanese Hiragana relying on a Deep Learning solution<span>:</span> Pose<span>-</span>Estimation to classify poses<br/><br/>
            Tools used<span>:</span> JavaScript<span>,</span> ML<span>5</span>JS<span>,</span> P<span>5</span>JS`,
          tags: ['game', 'ai']
        },
        {
          images: ['ai/movement-recognition/3.png', 'ai/movement-recognition/1.png', 'ai/movement-recognition/2.png'],
          image: 'ai/movement-recognition/3.png',
          title: 'Real Time Human Pose Recognition',
          description:
            `Human pose recognition in real<span>-</span>time using Computer Vision<br/><br/>
            Tools used<span>:</span> Python<span>,</span> OpenCV<span>,</span> PyQt`,
          tags: ['ai']
        },
        {
          images: ['ai/tic-tac-toe-minmax/2.png', 'ai/tic-tac-toe-minmax/1.png'],
          image: 'ai/tic-tac-toe-minmax/2.png',
          title: 'Unbeatable Tic Tac Toe AI',
          description:
            `An unbeatable Tic Tac Toe Artificial Intelligence Algorithm<br/>
            An implementation of the MinMax algorithm<br/><br/>

            Tools used<span>:</span> Java<span>,</span> Processing`,
          tags: ['ai']
        },
        {
          images: ['uiux/sinal/1.png', 'uiux/sinal/2.png', 'uiux/sinal/3.png'],
          image: 'uiux/sinal/1.png',
          title: 'SINAL OPTIQUE Website',
          description:
            `Sinal Optique is a company that makes glasses<span>'</span> lenses<span>,</span> their website aims to showcase the set of products that they produce<span>,</span>
            the technologies that they use<span>,</span> tips and articles<span>,</span> and more information about the company<br/><br/>
            
            Tools used<span>:</span> HTML<span>/</span>CSS<span>,</span> Javascript<span>,</span> Vue JS<span>,</span> Adobe XD`,
          tags: ['web', 'uiux']
        },
        {
          images: ['uiux/swiftlinks/client.png', 'uiux/swiftlinks/seller.png', 'uiux/swiftlinks/delivery.png'],
          image: 'uiux/swiftlinks/client.png',
          title: 'Swiftlink',
          description:
            `Swiftlink is an e<span>-</span>commerce platform, it comprises stores that cover fashion<span>,</span> food<span>,</span> electronics<span>,</span> and many more<br/>
            Created a UI<span>/</span>UX Design for <span>3</span> apps <span>(</span>Client App<span>,</span> Vendor App<span>,</span> Delivery App<span>)</span><br/><br/>

            Tools used<span>:</span> Figma`,
          tags: ['uiux'],
        },
        {
          images: ['uiux/taleb-universe/all-3.png'],
          image: 'uiux/taleb-universe/all-3.png',
          title: 'Taleb Universe',
          description:
            `Taleb Universe is a mobile app for students to browse the latest news<span>,</span> events<span>,</span> activities<span>,</span>
            opportunities<span>,</span> job offers<span>,</span> and more<br/><br/>

            Tools used<span>:</span> HTML<span>/</span>CSS<span>,</span> Javascript<span>,</span> Vue JS<span>,</span> Ionic<span>,</span> Adobe XD`,
          tags: ['web', 'uiux'],
        },
        {
          images: ['uiux/viddom/1.png', 'uiux/viddom/2.png', 'uiux/viddom/3.png'],
          image: 'uiux/viddom/1.png',
          title: 'Viddom',
          description:
            `VidDom is a system that aims to aid vehicle owners to easily contact mechanics and request oil change for their vehicle<span>,</span> change parts<span>,</span>
            and more<br/>
            The VidDom system comprises an API<span>,</span> two mobile apps <span>(</span>one for clients and one for mechanics<span>),</span> a website <span>(</span>
            to showcase the apps<span>),</span> and an administrator dashboard<br/>
            My work comprised the design of the website, and the realisation of features within the mobile apps and administrator dashboard<br/><br/>

            Tools used<span>:</span> HTML<span>/</span>CSS<span>,</span> Javascript<span>,</span> Vue JS<span>,</span> Ionic<span>,</span> Adobe XD`,
          tags: ['web', 'uiux'],
        },
        {
          images: ['web/originova/1.png', 'web/originova/2.png'],
          title: 'Originova Website',
          description:
            `The Originova website aims to deliver showcase the set of services delivered and the products made by Originova<br/><br/>

            Tools used<span>:</span> WordPress<span>,</span> HTML<span>/</span>CSS`,
          tags: ['web'],
        },
        {
          images: ['web/osms/1.png'],
          title: 'Originova School Management System',
          description:
            `Originova School Management System <span>(</span>OSMS<span>)</span> is a desktop software for schools to help them efficiently manage the resources of their 
            school <span>(</span>students<span>,</span> courses<span>,</span> payment<span>,...)</span><br/>
            My work<span>:</span>
            A fully customizable certificate<span>,</span> where the client can customize the certificate<span>'</span>s colors<span>,</span> title<span>,</span> logo
            <span>,</span> and more<br/><br/>

            Tools used<span>:</span> HTML<span>/</span>CSS<span>,</span> Javascript<span>,</span> Vue JS<span>,</span> Electron`,
          tags: ['web'],
        },
      ]
    }
  },
  computed: {
    currentCategoryProjects() {
      if (this.projectCategories[this.selectedProjectCategory] == 'all') return this.projects;
      else return this.projects.filter(project => project.tags.includes(this.projectCategories[this.selectedProjectCategory]));
    }
  },
  mounted() {
    this.showNextProjectImage(1);
  },
  methods: {
    showNextProjectImage(counter) {
      setTimeout(() => {
        if (counter == this.currentCategoryProjects[this.selectedProject].images.length) counter = 0;
        if (this.currentCategoryProjects[this.selectedProject].images[counter] == undefined) {
          this.selectedProjectImage = this.currentCategoryProjects[this.selectedProject].images[0];
          this.showNextProjectImage(1);
        } else {
          this.selectedProjectImage = this.currentCategoryProjects[this.selectedProject].images[counter];
          this.showNextProjectImage(counter + 1);
        }
      }, 5000);
    },
    switchProjectCategory(to) {
      //const projects = ["menu-all", "menu-web", "menu-uiux", "menu-ai", "menu-game", "menu-soft"];
      const projects = ["menu-all", "menu-web", "menu-uiux", "menu-ai", "menu-game"];

      for (let i = 0; i < projects.length; i++) {
        if (projects[i] == projects[to]) continue;
        document.getElementsByClassName(projects[i])[0].style.color = "#fff";
      }
      document.getElementsByClassName(projects[to])[0].style.color = "#C17C64";
      this.selectedProjectCategory = to;

      this.selectedProject = 0;
      this.selectedProjectImage = this.currentCategoryProjects[this.selectedProject].images[0];
      this.updateProjectButtons();
    },
    nextProject() {
      if (this.selectedProject < (this.currentCategoryProjects.length - 1)) {
        document.getElementsByClassName("project-previous")[0].classList.add("disabled-click");
        document.getElementsByClassName("project-next")[0].classList.add("disabled-click");

        document.getElementsByClassName("project-image-blur")[0].classList.add("slide-selected-skill-right-begin");
        document.getElementsByClassName("project-title")[0].classList.add("slide-selected-skill-right-begin");
        document.getElementsByClassName("project-content")[0].classList.add("slide-selected-skill-right-begin");

        setTimeout(() => {

          document.getElementsByClassName("project-image-blur")[0].classList.remove("slide-selected-skill-right-begin");
          document.getElementsByClassName("project-title")[0].classList.remove("slide-selected-skill-right-begin");
          document.getElementsByClassName("project-content")[0].classList.remove("slide-selected-skill-right-begin");

          document.getElementsByClassName("project-image-blur")[0].classList.add("slide-selected-skill-right-end");
          document.getElementsByClassName("project-title")[0].classList.add("slide-selected-skill-right-end");
          document.getElementsByClassName("project-content")[0].classList.add("slide-selected-skill-right-end");

          this.selectedProject += 1;
          this.selectedProjectImage = this.currentCategoryProjects[this.selectedProject].images[0];

          setTimeout(() => {
            document.getElementsByClassName("project-previous")[0].classList.remove("disabled-click");
            document.getElementsByClassName("project-next")[0].classList.remove("disabled-click");

            document.getElementsByClassName("project-image-blur")[0].classList.remove("slide-selected-skill-right-end");
            document.getElementsByClassName("project-title")[0].classList.remove("slide-selected-skill-right-end");
            document.getElementsByClassName("project-content")[0].classList.remove("slide-selected-skill-right-end");

            this.updateProjectButtons();
          }, 500);
        }, 1000);
      }
    },
    previousProject() {
      if (this.selectedProject > 0) {
        document.getElementsByClassName("project-previous")[0].classList.add("disabled-click");
        document.getElementsByClassName("project-next")[0].classList.add("disabled-click");

        document.getElementsByClassName("project-image-blur")[0].classList.add("slide-selected-skill-left-begin");
        document.getElementsByClassName("project-title")[0].classList.add("slide-selected-skill-left-begin");
        document.getElementsByClassName("project-content")[0].classList.add("slide-selected-skill-left-begin");

        setTimeout(() => {

          document.getElementsByClassName("project-image-blur")[0].classList.remove("slide-selected-skill-left-begin");
          document.getElementsByClassName("project-title")[0].classList.remove("slide-selected-skill-left-begin");
          document.getElementsByClassName("project-content")[0].classList.remove("slide-selected-skill-left-begin");

          document.getElementsByClassName("project-image-blur")[0].classList.add("slide-selected-skill-left-end");
          document.getElementsByClassName("project-title")[0].classList.add("slide-selected-skill-left-end");
          document.getElementsByClassName("project-content")[0].classList.add("slide-selected-skill-left-end");

          this.selectedProject -= 1;
          this.selectedProjectImage = this.currentCategoryProjects[this.selectedProject].images[0];

          setTimeout(() => {
            document.getElementsByClassName("project-previous")[0].classList.remove("disabled-click");
            document.getElementsByClassName("project-next")[0].classList.remove("disabled-click");

            document.getElementsByClassName("project-image-blur")[0].classList.remove("slide-selected-skill-left-end");
            document.getElementsByClassName("project-title")[0].classList.remove("slide-selected-skill-left-end");
            document.getElementsByClassName("project-content")[0].classList.remove("slide-selected-skill-left-end");

            this.updateProjectButtons();
          }, 500);
        }, 1000);
      }
    },
    updateProjectButtons() {
      if (this.selectedProject == 0) {
        document.getElementsByClassName("project-previous")[0].classList.replace("project-button", "project-inactive-button");
        if (document.getElementsByClassName("project-next")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-next")[0].classList.replace("project-inactive-button", "project-button");
      }

      else if (this.selectedProject == (this.currentCategoryProjects.length - 1)) {
        document.getElementsByClassName("project-next")[0].classList.replace("project-button", "project-inactive-button");
        if (document.getElementsByClassName("project-previous")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-previous")[0].classList.replace("project-inactive-button", "project-button");
      }

      else {
        if (document.getElementsByClassName("project-previous")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-previous")[0].classList.replace("project-inactive-button", "project-button");
        if (document.getElementsByClassName("project-next")[0].classList.contains("project-inactive-button")) document.getElementsByClassName("project-next")[0].classList.replace("project-inactive-button", "project-button");
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
  display: flex;
  flex-direction: column;
  height: 70vh;
  flex-wrap: nowrap;
  justify-content: flex-start;
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

.project-image-blur,
.project-image,
.project-image-bg {
  border-radius: 15px;
  width: 600px;
  height: 350px;
}

.project-image-blur {
  position: relative;
  overflow: hidden;
  background-color: #151518;
}

.project-image {
  /* border-radius: 15px;
  width: 600px;
  height: 350px; */
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 500ms;
}

.project-image-bg {
  filter: blur(16px);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 500ms;
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
  transition: color 500ms ease-in-out, opacity 500ms ease-in-out;
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
  transition: color 500ms ease-in-out, opacity 500ms ease-in-out;
}

.project-title {
  margin-top: 20px;
  font-family: DovensSemiBold, sans-serif;
  font-size: 48px;
  background: linear-gradient(to bottom, #c29a75, #c17c64);
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-content {
  margin-top: 10px;
  font-family: DovensLight, sans-serif;
  font-size: 18px;
  color: #ffffff;
}

.project-content>>>span {
  font-family: RussoOne, sans-serif;
}

/* animations */
.slide-selected-skill-left-begin {
  animation: slide-selected-skill-left-begin-anim 500ms ease-in-out forwards;
}

@keyframes slide-selected-skill-left-begin-anim {
  from {
    opacity: 1;
  }

  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

.slide-selected-skill-left-end {
  animation: slide-selected-skill-left-end-anim 500ms ease-in-out;
}

@keyframes slide-selected-skill-left-end-anim {
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.slide-selected-skill-right-begin {
  animation: slide-selected-skill-right-begin-anim 500ms ease-in-out forwards;
}

@keyframes slide-selected-skill-right-begin-anim {
  from {
    opacity: 1;
  }

  to {
    transform: translateX(50px);
    opacity: 0;
  }
}

.slide-selected-skill-right-end {
  animation: slide-selected-skill-right-end-anim 500ms ease-in-out;
}

@keyframes slide-selected-skill-right-end-anim {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.disabled-click {
  pointer-events: none;
}

@media only screen and (max-width: 1600px) {}

@media only screen and (max-width: 1400px) {}

@media only screen and (max-width: 1200px) {}

@media only screen and (max-width: 1024px) {}

@media only screen and (max-width: 768px) {}
</style>
  