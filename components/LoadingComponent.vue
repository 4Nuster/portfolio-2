<template>
  <div class="loading-screen">
    <img class="loading-logo" src="@/assets/icons/loading.png" alt="">
  </div>
</template>

<script>
export default {
  beforeMount() {
    window.onload = () => {
      this.$emit('loading-complete');
    };
  },
  head() {
    return {
      title: "Yassine Bacha | Portfolio",
      link: [
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/DOVENSPersonalUse-Bold.otf",
        },
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/DOVENSPersonalUse-SemiBold.otf",
        },
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/DOVENSPersonalUse-Regular.otf",
        },
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/DOVENSPersonalUse-Light.otf",
        },
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/RussoOne-Regular.ttf",
        },
        {
          rel: "preload",
          as: "font",
          href: "@/assets/fonts/SecularOne-Regular.ttf",
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/medical-palpation-assistance-system/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/medical-palpation-assistance-system/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/medical-palpation-assistance-system/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/timgad/1.jpg"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/timgad/2.jpg"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/timgad/3.jpg"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/parker/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/parker/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/game/parker/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/hiragana-pose-estimation/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/hiragana-pose-estimation/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/hiragana-pose-estimation/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/movement-recognition/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/movement-recognition/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/movement-recognition/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/tic-tac-toe-minmax/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/ai/tic-tac-toe-minmax/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/sinal/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/sinal/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/sinal/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/swiftlinks/client.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/swiftlinks/seller.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/swiftlinks/delivery.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/taleb-universe/all-3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/viddom/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/viddom/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/uiux/viddom/3.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/web/originova/1.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/web/originova/2.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "@/assets/web/osms/1.png"
        },
      ]
    }
  }
};
</script>

<style scoped>
.loading-logo {
  margin: auto;
  color: #c17c64;
  animation: spinning-loading 2s infinite;
}

@keyframes spinning-loading {
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

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #151518;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>