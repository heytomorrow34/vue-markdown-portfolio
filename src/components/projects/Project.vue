<template>
  <div>
    <div v-html="compiledSideBarMarkDown" class="right"></div>
    <div v-html="compiledProjectMarkDown" class="main"></div>
  </div>
</template>

<script>
import projects from "./projects.js";
import marked from "marked";
import { projectMarkDownPath, sideBarMarkDownPath } from "./pathUtilities.js";
export default {
  name: "Project",
  props: {
    projectName: String
  },
  computed: {
    compiledProjectMarkDown: function() {
      //TODO Do I need to sanitze my HTML? the one in marked is deprecated
      return marked(projectMarkDownPath(this.projectName));
    },
    compiledSideBarMarkDown: function() {
      return marked(sideBarMarkDownPath(this.projectName));
    }
  },
  beforeRouteUpdate: (to, from, next) => {
    const projectName = to.params.projectName;
    const found = projects.some(p => p.name.toLowerCase() === projectName.toLowerCase()
    );
    if (!found) {
      next("/home");
    } else {
      next();
    }
  }
};
</script>
<style>
.right {
  width: 40%;
  height: 100%;
  float: right;
  text-align:left
}
.main {
  height: 100%;
  width: 60%;
}
</style>