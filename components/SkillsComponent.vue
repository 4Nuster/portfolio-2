<template>
  <section class="about">
    <img class="bg3" src="../assets/crincle.svg" alt="" />
    <div class="flex">
      <div class="title-grid">
        <h2 class="title">SKILLS</h2>
        <h2 class="title-bg">SKILLS</h2>
      </div>
      <img class="crincle" src="@/assets/crincle.svg" alt="">
      <div class="skills-grid">
        <div :key="selectedSkill" v-if="skills[selectedSkill].subskills[0].show"
          class="skill left left-one left-one-anim">
          <p v-html="skills[selectedSkill].subskills[0].name"></p>
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[0].logo)"
            alt="">
        </div>
        <div :key="(selectedSkill + 1)" v-if="skills[selectedSkill].subskills[1].show"
          class="skill right right-one right-one-anim">
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[1].logo)"
            alt="">
          <p v-html="skills[selectedSkill].subskills[1].name"></p>
        </div>
        <div :key="(selectedSkill + 2)" v-if="skills[selectedSkill].subskills[2].show"
          class="skill left left-two left-two-anim">
          <p v-html="skills[selectedSkill].subskills[2].name"></p>
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[2].logo)"
            alt="">
        </div>
        <div :key="(selectedSkill + 3)" v-if="skills[selectedSkill].subskills[3].show"
          class="skill right right-two right-two-anim">
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[3].logo)"
            alt="">
          <p v-html="skills[selectedSkill].subskills[3].name"></p>
        </div>
        <div :key="(selectedSkill + 4)" v-if="skills[selectedSkill].subskills[4].show"
          class="skill left left-three left-three-anim">
          <p v-html="skills[selectedSkill].subskills[4].name"></p>
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[4].logo)"
            alt="">
        </div>
        <div :key="(selectedSkill + 5)" v-if="skills[selectedSkill].subskills[5].show"
          class="skill right right-three right-three-anim">
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[5].logo)"
            alt="">
          <p v-html="skills[selectedSkill].subskills[5].name"></p>
        </div>
        <div :key="(selectedSkill + 6)" v-if="skills[selectedSkill].subskills[6].show"
          class="skill left left-four left-four-anim">
          <p v-html="skills[selectedSkill].subskills[6].name"></p>
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[6].logo)"
            alt="">
        </div>
        <div :key="(selectedSkill + 7)" v-if="skills[selectedSkill].subskills[7].show"
          class="skill right right-four right-four-anim">
          <img class="skill-icon" :src="require('@/assets/icons/skills/' + skills[selectedSkill].subskills[7].logo)"
            alt="">
          <p v-html="skills[selectedSkill].subskills[7].name"></p>
        </div>
      </div>
      <div class="skill-selector">
        <img class="arrow left-arrow" src="@/assets/icons/left.svg" alt="" @click="leftSkill()">
        <p class="selected-skill" v-html="skills[selectedSkill].name"></p>
        <img class="arrow right-arrow" src="@/assets/icons/right.svg" alt="" @click="rightSkill()">
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      selectedSkill: 0,
      skills: [
        {
          name: "JAVASCRIPT",
          subskills: [
            {
              name: "VUE",
              logo: "vue.svg",
              show: true,
            },
            {
              name: "REACT",
              logo: "react.svg",
              show: true,
            },
            {
              name: "NODE",
              logo: "node.svg",
              show: true,
            },
            {
              name: "EXPRESS",
              logo: "express.svg",
              show: true,
            },
            {
              name: "D<span>3</span>",
              logo: "d3.svg",
              show: true,
            },
            {
              name: "JQUERY",
              logo: "jquery.svg",
              show: true,
            },
            {
              name: "ML<span>5</span>",
              logo: "ml5.svg",
              show: true,
            },
            {
              name: "P<span>5</span>",
              logo: "p5.svg",
              show: true,
            },
          ]
        },
        {
          name: "HTML<span>/</span>CSS",
          subskills: [
            { show: false }, { show: false },
            {
              name: "BOOTSTRAP",
              logo: "bootstrap.svg",
              show: true,
            },
            {
              name: "SASS",
              logo: "sass.svg",
              show: true,
            },
            {
              name: "TAILWIND",
              logo: "tailwind.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false },
          ]
        },
        {
          name: "PYTHON",
          subskills: [
            { show: false }, { show: false },
            {
              name: "TENSORFLOW",
              logo: "tensorflow.svg",
              show: true,
            },
            {
              name: "PYQT",
              logo: "pyqt.svg",
              show: true,
            },
            {
              name: "OPENCV",
              logo: "opencv.svg",
              show: true,
            },
            // {
            //   name: "NUMPY",
            //   logo: "numpy.svg",
            //   show: true,
            // },
            { show: false }, { show: false }, { show: false },
          ]
        },
        {
          name: "JAVA",
          subskills: [
            { show: false }, { show: false },
            {
              name: "JAVAFX",
              logo: "javafx.svg",
              show: true,
            },
            {
              name: "ANDROID STUDIO",
              logo: "android.svg",
              show: true,
            },
            {
              name: "PROCESSING",
              logo: "processing.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }
          ]
        },
        {
          name: "DATABASES",
          subskills: [
            { show: false }, { show: false },
            {
              name: "SQL",
              logo: "sql.svg",
              show: true,
            },
            {
              name: "MONGODB",
              logo: "mongodb.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false },
          ]
        },
        {
          name: "UI<span>/</span>UX DESIGN",
          subskills: [
            { show: false }, { show: false },
            {
              name: "ADOBE XD",
              logo: "xd.svg",
              show: true,
            },
            {
              name: "FIGMA",
              logo: "figma.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false },
          ]
        },
        {
          name: "GRAPHIC DESIGN",
          subskills: [
            { show: false }, { show: false },
            {
              name: "PHOTOSHOP",
              logo: "photoshop.svg",
              show: true,
            },
            {
              name: "ILLUSTRATOR",
              logo: "illustrator.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false },
          ]
        },
        {
          name: "<span>3</span>D ENVIRONMENT ART",
          subskills: [
            { show: false }, { show: false },
            {
              name: "UNREAL ENGINE",
              logo: "ue.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false }, { show: false }
          ]
        },
        {
          name: "<span>3</span>D MODELING",
          subskills: [
            { show: false }, { show: false },
            {
              name: "BLENDER",
              logo: "blender.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false }, { show: false }
          ]
        },
        {
          name: "C<span>/</span>C<span>++</span>",
          subskills: [
            { show: false }, { show: false },
            {
              name: "OPENGL",
              logo: "opengl.svg",
              show: true,
            },
            { show: false }, { show: false }, { show: false }, { show: false }, { show: false }
          ]
        },
      ]
    }
  },
  mounted() {
    document.getElementsByClassName("left-arrow")[0].classList.add("disabled-click");
  },
  methods: {
    leftSkill() {
      let vm = this;
      if (vm.selectedSkill > 0) {
        document.getElementsByClassName("arrow")[0].classList.add("disabled-click");
        document.getElementsByClassName("arrow")[1].classList.add("disabled-click");
        document.getElementsByClassName("selected-skill")[0].classList.add("slide-selected-skill-right-begin");

        if (vm.skills[vm.selectedSkill].subskills[0].show) {
          document.getElementsByClassName("left-one")[0].classList.remove("left-one-anim");
          document.getElementsByClassName("left-one")[0].classList.add("slide-selected-skill-left-begin");
        }
        if (vm.skills[vm.selectedSkill].subskills[2].show) setTimeout(() => {
          document.getElementsByClassName("left-two")[0].classList.remove("left-two-anim");
          document.getElementsByClassName("left-two")[0].classList.add("slide-selected-skill-left-begin");
        }, 150);
        if (vm.skills[vm.selectedSkill].subskills[4].show) setTimeout(() => {
          document.getElementsByClassName("left-three")[0].classList.remove("left-three-anim");
          document.getElementsByClassName("left-three")[0].classList.add("slide-selected-skill-left-begin");
        }, 300);
        if (vm.skills[vm.selectedSkill].subskills[6].show) setTimeout(() => {
          document.getElementsByClassName("left-four")[0].classList.remove("left-four-anim");
          document.getElementsByClassName("left-four")[0].classList.add("slide-selected-skill-left-begin");
        }, 450);

        if (vm.skills[vm.selectedSkill].subskills[1].show) {
          document.getElementsByClassName("right-one")[0].classList.remove("right-one-anim");
          document.getElementsByClassName("right-one")[0].classList.add("slide-selected-skill-right-begin");
        }
        if (vm.skills[vm.selectedSkill].subskills[3].show) setTimeout(() => {
          document.getElementsByClassName("right-two")[0].classList.remove("right-two-anim");
          document.getElementsByClassName("right-two")[0].classList.add("slide-selected-skill-right-begin");
        }, 150);
        if (vm.skills[vm.selectedSkill].subskills[5].show) setTimeout(() => {
          document.getElementsByClassName("right-three")[0].classList.remove("right-three-anim");
          document.getElementsByClassName("right-three")[0].classList.add("slide-selected-skill-right-begin");
        }, 300);
        if (vm.skills[vm.selectedSkill].subskills[7].show) setTimeout(() => {
          document.getElementsByClassName("right-four")[0].classList.remove("right-four-anim");
          document.getElementsByClassName("right-four")[0].classList.add("slide-selected-skill-right-begin");
        }, 450);

        setTimeout(() => {
          document.getElementsByClassName("selected-skill")[0].classList.remove("slide-selected-skill-right-begin");
          document.getElementsByClassName("selected-skill")[0].classList.add("slide-selected-skill-right-end");

          if (vm.skills[vm.selectedSkill].subskills[0].show) document.getElementsByClassName("left-one")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[2].show) document.getElementsByClassName("left-two")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[4].show) document.getElementsByClassName("left-three")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[6].show) document.getElementsByClassName("left-four")[0].classList.remove("slide-selected-skill-left-begin");

          if (vm.skills[vm.selectedSkill].subskills[1].show) document.getElementsByClassName("right-one")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[3].show) document.getElementsByClassName("right-two")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[5].show) document.getElementsByClassName("right-three")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[7].show) document.getElementsByClassName("right-four")[0].classList.remove("slide-selected-skill-right-begin");

          vm.selectedSkill--;

          if (vm.selectedSkill == (vm.skills.length - 1)) document.getElementsByClassName("right-arrow")[0].style.opacity = "0";
          else document.getElementsByClassName("right-arrow")[0].style.opacity = "100%";
          if (vm.selectedSkill == 0) document.getElementsByClassName("left-arrow")[0].style.opacity = "0";
          else document.getElementsByClassName("left-arrow")[0].style.opacity = "100%";

          setTimeout(() => {
            document.getElementsByClassName("selected-skill")[0].classList.remove("slide-selected-skill-right-end");
            if (!(vm.selectedSkill == (vm.skills.length - 1))) document.getElementsByClassName("right-arrow")[0].classList.remove("disabled-click");
            if (!(vm.selectedSkill == 0)) document.getElementsByClassName("left-arrow")[0].classList.remove("disabled-click");
          }, 1000);
        }, 1000);
      }
    },
    rightSkill() {
      let vm = this;
      if (vm.selectedSkill < (vm.skills.length - 1)) {
        document.getElementsByClassName("arrow")[0].classList.add("disabled-click");
        document.getElementsByClassName("arrow")[1].classList.add("disabled-click");
        document.getElementsByClassName("selected-skill")[0].classList.add("slide-selected-skill-left-begin");

        if (vm.skills[vm.selectedSkill].subskills[0].show) {
          document.getElementsByClassName("left-one")[0].classList.remove("left-one-anim");
          document.getElementsByClassName("left-one")[0].classList.add("slide-selected-skill-left-begin");
        }
        if (vm.skills[vm.selectedSkill].subskills[2].show) setTimeout(() => {
          document.getElementsByClassName("left-two")[0].classList.remove("left-two-anim");
          document.getElementsByClassName("left-two")[0].classList.add("slide-selected-skill-left-begin");
        }, 150);
        if (vm.skills[vm.selectedSkill].subskills[4].show) setTimeout(() => {
          document.getElementsByClassName("left-three")[0].classList.remove("left-three-anim");
          document.getElementsByClassName("left-three")[0].classList.add("slide-selected-skill-left-begin");
        }, 300);
        if (vm.skills[vm.selectedSkill].subskills[6].show) setTimeout(() => {
          document.getElementsByClassName("left-four")[0].classList.remove("left-four-anim");
          document.getElementsByClassName("left-four")[0].classList.add("slide-selected-skill-left-begin");
        }, 450);

        if (vm.skills[vm.selectedSkill].subskills[1].show) {
          document.getElementsByClassName("right-one")[0].classList.remove("right-one-anim");
          document.getElementsByClassName("right-one")[0].classList.add("slide-selected-skill-right-begin");
        }
        if (vm.skills[vm.selectedSkill].subskills[3].show) setTimeout(() => {
          document.getElementsByClassName("right-two")[0].classList.remove("right-two-anim");
          document.getElementsByClassName("right-two")[0].classList.add("slide-selected-skill-right-begin");
        }, 150);
        if (vm.skills[vm.selectedSkill].subskills[5].show) setTimeout(() => {
          document.getElementsByClassName("right-three")[0].classList.remove("right-three-anim");
          document.getElementsByClassName("right-three")[0].classList.add("slide-selected-skill-right-begin");
        }, 300);
        if (vm.skills[vm.selectedSkill].subskills[7].show) setTimeout(() => {
          document.getElementsByClassName("right-four")[0].classList.remove("right-four-anim");
          document.getElementsByClassName("right-four")[0].classList.add("slide-selected-skill-right-begin");
        }, 450);

        setTimeout(() => {
          document.getElementsByClassName("selected-skill")[0].classList.remove("slide-selected-skill-left-begin");
          document.getElementsByClassName("selected-skill")[0].classList.add("slide-selected-skill-left-end");

          if (vm.skills[vm.selectedSkill].subskills[0].show) document.getElementsByClassName("left-one")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[2].show) document.getElementsByClassName("left-two")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[4].show) document.getElementsByClassName("left-three")[0].classList.remove("slide-selected-skill-left-begin");
          if (vm.skills[vm.selectedSkill].subskills[6].show) document.getElementsByClassName("left-four")[0].classList.remove("slide-selected-skill-left-begin");

          if (vm.skills[vm.selectedSkill].subskills[1].show) document.getElementsByClassName("right-one")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[3].show) document.getElementsByClassName("right-two")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[5].show) document.getElementsByClassName("right-three")[0].classList.remove("slide-selected-skill-right-begin");
          if (vm.skills[vm.selectedSkill].subskills[7].show) document.getElementsByClassName("right-four")[0].classList.remove("slide-selected-skill-right-begin");

          vm.selectedSkill++;

          if (vm.selectedSkill == (vm.skills.length - 1)) document.getElementsByClassName("right-arrow")[0].style.opacity = "0";
          else document.getElementsByClassName("right-arrow")[0].style.opacity = "100%";
          if (vm.selectedSkill == 0) document.getElementsByClassName("left-arrow")[0].style.opacity = "0";
          else document.getElementsByClassName("left-arrow")[0].style.opacity = "100%";

          setTimeout(() => {
            document.getElementsByClassName("selected-skill")[0].classList.remove("slide-selected-skill-left-end");
            document.getElementsByClassName("arrow")[0].classList.remove("disabled-click");
            document.getElementsByClassName("arrow")[1].classList.remove("disabled-click");
          }, 1000);
        }, 1000);
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

.about .bg3 {
  position: absolute;
  height: 90%;
  width: 90%;
  left: 60%;
  z-index: -1;
  filter: blur(8px);
  animation: rotation 70s linear infinite;
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
  flex-direction: column;
  justify-content: center;
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

.crincle {
  height: 600px;
  margin-top: -3rem;
}

.skills-grid {
  position: absolute;
  margin-top: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: calc(300px + 300px + 300px);
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-row-gap: 40px;
  grid-column-gap: 300px;
  font-family: DovensRegular, sans-serif;
  color: #fff;
  font-size: 20px;
}

.skills-grid .skill {
  opacity: 0;
}

.skills-grid .skill-icon {
  height: 80px;
  filter: drop-shadow(0 6px 12px #00000077);
}

.skills-grid .left-one,
.skills-grid .left-four {
  margin-right: -100px;
}

.skills-grid .right-one,
.skills-grid .right-four {
  margin-left: -100px;
}

.skills-grid .skill p {
  display: inline-block;
  position: absolute;
  margin-top: 30px;
  margin-bottom: 30px;
}

.skills-grid .skill p>>>span {
  font-family: RussoOne, sans-serif;
}

.skills-grid .left {
  direction: rtl;
}

.skills-grid .left p {
  margin-right: 100px;
}

.skills-grid .right p {
  margin-left: 10px;
}


.skill-selector {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.skill-selector .arrow {
  display: inline-block;
  cursor: pointer;
  transition: opacity 500ms;
}

.skill-selector .left-arrow {
  opacity: 0;
}

.skill-selector .selected-skill {
  display: inline-block;
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  color: #fff;
  width: 260px;
}

.skill-selector .selected-skill>>>span {
  font-family: RussoOne, sans-serif;
}

.slide-selected-skill-left-begin {
  animation: slide-selected-skill-left-begin-anim 500ms ease-in-out forwards;
}

@keyframes slide-selected-skill-left-begin-anim {
  from {
    opacity: 100%;
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
    opacity: 100%;
  }
}

.slide-selected-skill-right-begin {
  animation: slide-selected-skill-right-begin-anim 500ms ease-in-out forwards;
}

@keyframes slide-selected-skill-right-begin-anim {
  from {
    opacity: 100%;
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
    opacity: 100%;
  }
}

.disabled-click {
  pointer-events: none;
}

.left-one-anim {
  animation: slide-selected-skill-left-end-anim 500ms ease-in-out forwards;
}

.right-one-anim {
  animation: slide-selected-skill-right-end-anim 500ms ease-in-out forwards;
}

.left-two-anim {
  animation: slide-selected-skill-left-end-anim 500ms 150ms ease-in-out forwards;
}

.right-two-anim {
  animation: slide-selected-skill-right-end-anim 500ms 150ms ease-in-out forwards;
}

.left-three-anim {
  animation: slide-selected-skill-left-end-anim 500ms 300ms ease-in-out forwards;
}

.right-three-anim {
  animation: slide-selected-skill-right-end-anim 500ms 300ms ease-in-out forwards;
}

.left-four-anim {
  animation: slide-selected-skill-left-end-anim 500ms 450ms ease-in-out forwards;
}

.right-four-anim {
  animation: slide-selected-skill-right-end-anim 500ms 450ms ease-in-out forwards;
}

@media only screen and (max-width: 1024px) {

  .title,
  .title-bg {
    font-size: 60px;
  }

  .crincle {
    height: 450px;
  }

  .skills-grid .skill-icon {
    height: 50px;
  }

  .skills-grid {
    width: calc(200px + 250px + 200px);
    grid-template-columns: repeat(2, 200px);
    grid-row-gap: 40px;
    grid-column-gap: 250px;
    font-size: 18px;
  }

  .skills-grid .left p {
    margin-right: 60px;
  }

  .skills-grid .skill p {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .skill-selector .selected-skill {
    font-size: 18px;
    width: 220px;
  }
}

@media only screen and (max-width: 768px) {

  .title,
  .title-bg {
    font-size: 48px;
  }

  .crincle {
    height: 400px;
  }

  .skills-grid .skill-icon {
    height: 50px;
  }

  .skills-grid {
    width: calc(180px + 200px + 180px);
    grid-template-columns: repeat(2, 180px);
    grid-row-gap: 40px;
    grid-column-gap: 200px;
    font-size: 16px;
  }

  .skills-grid .left p {
    margin-right: 60px;
  }

  .skills-grid .skill p {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .skill-selector .selected-skill {
    font-size: 16px;
    width: 180px;
  }
}

@media only screen and (max-width: 480px) {

  .title,
  .title-bg {
    font-size: 40px;
  }

  .crincle {
    height: 250px;
  }

  .skills-grid .skill-icon {
    height: 0px;
  }

  .skills-grid {
    width: calc(100px + 20px + 100px);
    grid-template-columns: repeat(2, 100px);
    grid-row-gap: 40px;
    grid-column-gap: 20px;
    font-size: 11px;
  }

  .skills-grid .left p {
    margin-right: 10px;
  }

  .skills-grid .skill p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .skill-selector {
    width: 100vw;
    margin-top: 300px;
  }

  .skill-selector .selected-skill {
    font-size: 14px;
    width: 140px;
  }
}
</style>