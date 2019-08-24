<template>
  <div>
    <h1>{{projectName}}</h1>
    <div v-html="compiledMarkDown"></div>
  </div>
</template>

<script>
import projects from "./projects.js";
import marked from "marked";
import { markDownPath } from "./pathUtilities.js";
export default {
  name: "Project",
  props: {
    projectName: String
  },
  computed: {
    compiledMarkDown: function() {
      //TODO Do I need to sanitze my HTML? the one in marked is deprecated
      return marked(markDownPath(this.projectName));
    }
  },
  beforeRouteUpdate: (to, from, next) => {
    const projectName = to.params.projectName;
    const found = projects.some(
      p => p.name.toLowerCase() === projectName.toLowerCase()
    );
    if (!found) {
      next("/home");
    } else {
      next();
    }
  }
};
</script>