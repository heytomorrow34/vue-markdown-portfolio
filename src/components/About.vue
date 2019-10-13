<template>
  <project :projectName="projectName"></project>
</template>

<script>
import Project from "./projects/Project.vue";
export default {
  name: "About",
  props: {
    projectName: String
  },
  components: {
    project: Project
  }
};
</script>