<template>
  <div>
    <router-link :to="`/${projectName}`">
      <img :alt="projectName" :src="projectImagePath" />
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