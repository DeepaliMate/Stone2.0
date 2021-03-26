<template>
  <div
    class="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-4 rounded-lg"
  >
    <div class="bg-white rounded-lg border lg:col-span-12 sm:col-span-12">
      <barchart></barchart>
    </div>
    <div class="bg-white rounded-lg border lg:col-span-8 sm:col-span-12">
      <tasks></tasks>
    </div>
    <div class="bg-white rounded-lg border lg:col-span-4 sm:col-span-12">
      <project></project>
    </div>
  </div>
</template>

<script>
import barchart from "../components/dashboard/barchart";
import tasks from "../components/dashboard/tasks";
import project from "../components/dashboard/projects";
export default {
  components: {
    barchart,
    tasks,
    project,
  },
};
</script>

<style  scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

#column-example-8 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>