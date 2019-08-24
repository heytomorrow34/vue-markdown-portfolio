<template>
  <div>
    <div v-for="project in orderedProjects" :key="project.id">
      <project-thumbnail :projectName="project.name" />
    </div>
  </div>
</template>

<script>
import projects from "./projects/projects.js";
import ProjectThumbnail from "./projects/ProjectThumbnail.vue";

export default {
  name: "home",
  components: {
    "project-thumbnail": ProjectThumbnail
  },
  computed: {
    orderedProjects: function() {
      return projects.sort((a, b) => a.order - b.order);
    }
  }
};
</script>