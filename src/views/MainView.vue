<template>
  <article class="main">
    <HeroComponentVue />
    <AboutComponentVue />
  </article>
</template>

<script>
import HeroComponentVue from "@/components/HeroComponent.vue";
import AboutComponentVue from "@/components/AboutComponent.vue";

export default {
  components: {
    HeroComponentVue,
    AboutComponentVue,
  },
};
</script>

<style>
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
