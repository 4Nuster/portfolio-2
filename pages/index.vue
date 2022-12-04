<template>
  <article class="main-article">
    <MenuConponentVue />
    <HeroComponentVue id="home"/>
    <AboutComponentVue id="about"/>
    <SkillsComponentVue id="skills"/>
    <ProjectsComponentVue id="projects"/>
    <AboutComponentVue id="awards"/>
  </article>
</template>

<script>
import HeroComponentVue from "@/components/HeroComponent.vue";
import AboutComponentVue from "@/components/AboutComponent.vue";
import MenuConponentVue from "@/components/MenuConponent.vue";
import SkillsComponentVue from "@/components/SkillsComponent.vue";
import ProjectsComponentVue from "@/components/ProjectsComponent.vue";


export default {
  name: "Home",
  components: {
    HeroComponentVue,
    AboutComponentVue,
    MenuConponentVue,
    SkillsComponentVue,
    ProjectsComponentVue
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: DovensBold;
  src: url("../assets/fonts/DOVENSPersonalUse-Bold.otf");
}

@font-face {
  font-family: DovensRegular;
  src: url("../assets/fonts/DOVENSPersonalUse-Regular.otf");
}

@font-face {
  font-family: RussoOne;
  src: url("../assets/fonts/RussoOne-Regular.ttf");
}

@font-face {
  font-family: SecularOne;
  src: url("../assets/fonts/SecularOne-Regular.ttf");
}

body {
  background-color: #151518;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  opacity: 0%;
}

h1 {
  animation: text-slide-in 500ms forwards;
}
h2 {
  animation: text-slide-in 500ms 500ms forwards;
}
h3 {
  animation: text-slide-in 500ms 1s forwards;
}
h4 {
  animation: text-slide-in 500ms 1500ms forwards;
}
h5 {
  animation: text-slide-in 500ms 2s forwards;
}
h6 {
  animation: text-slide-in 500ms 2500ms forwards;
}

@keyframes text-slide-in {
  from {
    opacity: 0%;
    transform: translateY(20px);
  }
  to {
    opacity: 100%;
    transform: translateY(0px);
  }
}
</style>

