<template>
  <ul class="posts">
    <div v-for="project in orderedProjects" :key="project.id">
      <project-thumbnail :projectName="project.name" />
    </div>
  </ul>
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

<style>
.posts {
  /* flex: 0 1 auto; */
  list-style-type: none;
  display: flex;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
  /* align-content: space-evenly; */
  justify-content: space-around;
  /* overflow-x: auto;  */
}
</style>