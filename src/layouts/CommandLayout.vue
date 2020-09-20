<template>
  <div class="command-layout row">
    <div class="col-sm-3 col-lg-3 left-pane"></div>
    <div class="col-sm-6 col-lg-6 mid-pane">
      <CommandLine type="input" text="flask appname"></CommandLine>
      <div class="command-logo">
        <div>
          <fa-icon class="icon" icon="flask" />
        </div>
        <div>
          <span class="appname">MigsLab</span>
        </div>
      </div>
      <div>
        <slot />
      </div>
      <div class="footer"></div>
    </div>
    <div class="col-sm-3 col-lg-3 right-pane"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import CommandLine from "@/components/command/CommandLine.vue";
export default {
  name: "CommandLayout",
  components: {
    CommandLine,
  },
};
</script>

<style scoped>
.command-layout {
  color: #ffeadb;
}
.command-logo {
  text-align: center;
}

.command-logo .icon {
  font-size: 4rem !important;
}
.command-logo .appname {
  font-size: 1.2rem !important;
}

.mid-pane {
  padding: 5rem 3rem;
}
</style>