<template>
  <div>
    <Header></Header>
    <div class="main-layout row">
      <div class="col-sm-3 col-lg-3 left-pane"></div>
      <div class="col-sm-6 col-lg-6 mid-pane">
        <div>
          <slot />
        </div>
      </div>
      <div class="col-sm-3 col-lg-3 right-pane"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/app/Header.vue";
export default {
  name: "MainLayout",
  components: {
    Header,
  },
};
</script>

<style scoped>
.mid-pane {
  padding: 3rem 3rem;
}
</style>
