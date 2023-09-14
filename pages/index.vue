<template>
  <div>
    <LoadingComponentVue v-if="isLoading" @loading-complete="loadingComplete" />
    <article class="main-article">
      <img src="@/assets/icons/menu.png" class="menu-btn" @click="toggleMenu">
      <MenuConponentVue class="menu-hidden" id="menu" />
      <HeroComponentVue id="home" />
      <AboutComponentVue id="about" />
      <SkillsComponentVue id="skills" />
      <ProjectsComponentVue id="projects" />
      <!-- <AboutComponentVue id="awards" /> -->
    </article>
  </div>
</template>

<script>
import HeroComponentVue from "@/components/HeroComponent.vue";
import AboutComponentVue from "@/components/AboutComponent.vue";
import MenuConponentVue from "@/components/MenuConponent.vue";
import SkillsComponentVue from "@/components/SkillsComponent.vue";
import ProjectsComponentVue from "@/components/ProjectsComponent.vue";
import LoadingComponentVue from '~/components/LoadingComponent.vue';


export default {
  name: "Home",
  components: {
    HeroComponentVue,
    AboutComponentVue,
    MenuConponentVue,
    SkillsComponentVue,
    ProjectsComponentVue,
    LoadingComponentVue
  },
  data() {
    return {
      isLoading: true,
      menuHidden: true,
    }
  },
  methods: {
    loadingComplete() {
      this.isLoading = false;
    },
    toggleMenu() {
      // if (!this.menuHidden) {
      //   this.menuHidden = true;
      //   document.getElementById("menu").classList.remove("menu-hidden");
      // } else {
      //   this.menuHidden = false;
      //   document.getElementById("menu").classList.add("menu-hidden");
      // }
      if (!this.menuHidden) {
        this.menuHidden = true;
        document.getElementById('menu').classList.replace('menu-hidden', 'menu-visible');
        document.getElementsByClassName('menu-btn')[0].classList.add('menu-btn-flipped');
      } else {
        this.menuHidden = false;
        document.getElementById('menu').classList.replace('menu-visible', 'menu-hidden');
        document.getElementsByClassName('menu-btn')[0].classList.remove('menu-btn-flipped');
      }
    }
  },
  head() {
    return {
      title: "Yassine Bacha | Portfolio",
      link: [
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/DOVENSPersonalUse-Bold.otf",
        // },
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/DOVENSPersonalUse-SemiBold.otf",
        // },
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/DOVENSPersonalUse-Regular.otf",
        // },
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/DOVENSPersonalUse-Light.otf",
        // },
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/RussoOne-Regular.ttf",
        // },
        // {
        //   rel: "preload",
        //   as: "font",
        //   href: "@/assets/fonts/SecularOne-Regular.ttf",
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/medical-palpation-assistance-system/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/medical-palpation-assistance-system/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/medical-palpation-assistance-system/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/timgad/1.jpg"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/timgad/2.jpg"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/timgad/3.jpg"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/parker/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/parker/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/game/parker/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/hiragana-pose-estimation/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/hiragana-pose-estimation/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/hiragana-pose-estimation/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/movement-recognition/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/movement-recognition/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/movement-recognition/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/tic-tac-toe-minmax/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/ai/tic-tac-toe-minmax/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/sinal/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/sinal/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/sinal/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/swiftlinks/client.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/swiftlinks/seller.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/swiftlinks/delivery.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/taleb-universe/all-3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/viddom/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/viddom/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/uiux/viddom/3.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/web/originova/1.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/web/originova/2.png"
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: "@/assets/web/osms/1.png"
        // },
      ]
    }
  }
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
  font-family: DovensSemiBold;
  src: url("../assets/fonts/DOVENSPersonalUse-SemiBold.otf");
}

@font-face {
  font-family: DovensRegular;
  src: url("../assets/fonts/DOVENSPersonalUse-Regular.otf");
}

@font-face {
  font-family: DovensLight;
  src: url("../assets/fonts/DOVENSPersonalUse-Light.otf");
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
  /*background: linear-gradient(to bottom, #151518, #0d0d0f, #151518);*/
}

h1,
h2,
h3,
h4,
h5,
h6 {
  opacity: 0;
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
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.menu-btn {
  display: none;
  transition: transform 500ms ease-in-out;
}

.menu-btn-flipped {
  transform: rotate(90deg);
}

.menu-visible {
  opacity: 1;
  visibility: visible;
  transition: 0.5s opacity, 0s visibility;
}

@media only screen and (max-width: 1023px) {
  .menu-hidden {
    opacity: 0;
    visibility: hidden;
    transition: 0.5s opacity, 0.5s visibility;
  }

  .menu-btn {
    display: block;
    position: fixed;
    width: 50px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    z-index: 70;
    filter: drop-shadow(0 4px 4px #000000aa);
  }
}

@media only screen and (max-width: 768px) {
  .main-article {
    overflow-x: hidden;
  }
}
</style>

