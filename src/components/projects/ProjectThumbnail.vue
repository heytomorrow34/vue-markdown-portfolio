<template>
  <div class="item">
    <router-link :to="`/${projectName}`">
      <img :alt="projectName" :src="projectImagePath" class="img" />
    </router-link>
    <h2>{{projectName}}</h2>
  </div>
</template>
<script>
import { imagePath } from "./pathUtilities.js";
export default {
  name: "ProjectThumbnail",
  props: {
    projectName: String
  },
  computed: {
    projectImagePath() {
      return imagePath(this.projectName);
    }
  }
};
</script>
<style>
.item {
  /* flex: 1; */
  width: 300px;
  height: 300px;
/* display: inline-block; */
  object-fit: contain;
  padding: 10px;
}
.img {
  object-fit: cover;
  width: 267px;
  height: 267px;
  /* max-width: 267px;
  max-height: 267px; */
}
</style>