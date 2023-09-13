<template>
  <div class="pdf-div">
    <iframe allowfullscreen :src="resumePdf"
      style="position:absolute; top:0; left:0; width:100%; height:100%; border: none; overflow: hidden;"></iframe>
  </div>
</template>

<script>
import resumePdf from '@/assets/Resume.pdf';
export default {
  head() {
    return {
      title: "Yassine Bacha | Resume",
    }
  },
  data() {
    return {
      resumePdf: resumePdf,
    };
  },
};
</script>
<style scoped>
.pdf-div {
  width: 100vw;
  height: 100vh;
}
</style>