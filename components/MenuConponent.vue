<template>
  <section class="menu">
    <div class="line"></div>
    <div class="scrolling-ball"></div>
    <!-- <div class="resume"><a href="https://rxresu.me/nfstopplayer/resu1-long" target="_blank">RESUME</a></div> -->
    <div class="resume"><a href="#" @click="openResume" target="_blank">RESUME</a></div>
    <ul class="socials">
      <li class="linkedin"><a href="https://www.linkedin.com/in/yassinebacha/" target="_blank"><img
            src="@/assets/icons/social/linkedin.svg" alt=""></a></li>
      <li class="github"><a href="https://github.com/4Nuster/" target="_blank"><img src="@/assets/icons/social/github.svg"
            alt=""></a></li>
      <li class="artstation"><a href="https://nuster4.artstation.com/" target="_blank"><img
            src="@/assets/icons/social/artstation.svg" alt=""></a></li>
      <li class="mail"><a href="mailto:yassine.bacha@proton.me" target="_blank"><img src="@/assets/icons/social/mail.svg"
            alt=""></a></li>
    </ul>
    <ul class="menu-items">
      <li class="menu-home" onclick="document.getElementById('home').scrollIntoView();">HOME</li>
      <li class="menu-about" onclick="document.getElementById('about').scrollIntoView();">ABOUT</li>
      <li class="menu-skills" onclick="document.getElementById('skills').scrollIntoView();">SKILLS</li>
      <li class="menu-projects" onclick="document.getElementById('projects').scrollIntoView();">PROJECTS</li>
      <!-- <li class="menu-awards" onclick="document.getElementById('awards').scrollIntoView();">AWARDS</li> -->
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    openResume() {
      window.open('/resume', '_blank');
    },
    runOnScroll: () => {
      let scrollable = document.getElementsByTagName("html")[0].scrollTop;

      if (scrollable >= visualViewport.height * 4) {
        document.getElementsByClassName("scrolling-ball")[0].style.marginTop = "calc(70vh + " + (41 * 4).toString() + "px)";
        let item = document.getElementsByClassName("menu-awards")[0];
        let others = [
          document.getElementsByClassName("menu-home")[0],
          document.getElementsByClassName("menu-about")[0],
          document.getElementsByClassName("menu-skills")[0],
          document.getElementsByClassName("menu-projects")[0]
        ];
        item.style.color = "var(--primary-color)";
        others.forEach(other => other.style.color = "var(--white)");
      } else if (scrollable >= visualViewport.height * 3) {
        document.getElementsByClassName("scrolling-ball")[0].style.marginTop = "calc(70vh + " + (41 * 3).toString() + "px)";
        let item = document.getElementsByClassName("menu-projects")[0];
        let others = [
          document.getElementsByClassName("menu-home")[0],
          document.getElementsByClassName("menu-about")[0],
          document.getElementsByClassName("menu-skills")[0],
          document.getElementsByClassName("menu-awards")[0]
        ];
        item.style.color = "var(--primary-color)";
        others.forEach(other => other.style.color = "var(--white)");
      } else if (scrollable >= visualViewport.height * 2) {
        document.getElementsByClassName("scrolling-ball")[0].style.marginTop = "calc(70vh + " + (41 * 2).toString() + "px)";
        let item = document.getElementsByClassName("menu-skills")[0];
        let others = [
          document.getElementsByClassName("menu-home")[0],
          document.getElementsByClassName("menu-about")[0],
          document.getElementsByClassName("menu-projects")[0],
          document.getElementsByClassName("menu-awards")[0]
        ];
        item.style.color = "var(--primary-color)";
        others.forEach(other => other.style.color = "var(--white)");
      } else if (scrollable >= visualViewport.height) {
        document.getElementsByClassName("scrolling-ball")[0].style.marginTop = "calc(70vh + " + (41).toString() + "px)";
        let item = document.getElementsByClassName("menu-about")[0];
        let others = [
          document.getElementsByClassName("menu-home")[0],
          document.getElementsByClassName("menu-projects")[0],
          document.getElementsByClassName("menu-skills")[0],
          document.getElementsByClassName("menu-awards")[0]
        ];
        item.style.color = "var(--primary-color)";
        others.forEach(other => other.style.color = "var(--white)");
      } else if (scrollable < visualViewport.height) {
        document.getElementsByClassName("scrolling-ball")[0].style.marginTop = "calc(70vh)";
        let item = document.getElementsByClassName("menu-home")[0];
        let others = [
          document.getElementsByClassName("menu-projects")[0],
          document.getElementsByClassName("menu-about")[0],
          document.getElementsByClassName("menu-skills")[0],
          document.getElementsByClassName("menu-awards")[0]
        ];
        item.style.color = "var(--primary-color)";
        others.forEach(other => other.style.color = "var(--white)");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.runOnScroll);
  }
};
</script>

<style scoped>
.menu {
  position: fixed;
  z-index: 69;
}

.line {
  position: absolute;
  height: 100vh;
  background: linear-gradient(to bottom, var(--secondary-color), var(--primary-color));
  width: 5px;
  margin-left: 2vw;
  z-index: -1;
}

.scrolling-ball {
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: var(--background-color);
  border: 3px var(--primary-color) solid;
  margin-left: 1.6vw;
  margin-top: 70vh;
  transition: margin-top 500ms;
}

.menu-items {
  color: var(--white);
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  margin-top: 70vh;
  margin-left: 3vw;
}

.menu-items li {
  margin-bottom: 15px;
  list-style-type: none;
  transition: color 500ms;
  cursor: pointer;
}

.menu-items .menu-home {
  color: var(--primary-color);
}

.resume {
  position: absolute;
  margin-left: 92vw;
  margin-top: 10vh;
  transform: rotate(-90deg);
}

.resume a {
  color: var(--primary-color);
  font-family: DovensRegular, sans-serif;
  font-size: 24px;
  text-decoration: none;
}

.socials {
  position: absolute;
  margin-left: 3vw;
  margin-top: 5vh;
}

.socials li {
  width: 30px;
  margin-bottom: 15px;
  list-style-type: none;
  transition: color 500ms;
  cursor: pointer;
}

@media only screen and (max-width: 1023px) {
  .menu {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
  }

  .line {
    margin-left: 20px;
  }

  .scrolling-ball {
    margin-left: 12px;
  }

  .socials,
  .menu-items {
    margin-left: 35px;
  }

  .resume {
    margin-left: 75vw;
  }
}
</style>