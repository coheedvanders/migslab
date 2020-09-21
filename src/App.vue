<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "main";
export default {
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>

<style>
body,
html {
  background-color: #637373;
  height: 100%;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
body {
  margin: 0;
}

.header {
  background-color: #679b9b;
  height: 50px;
}

.footer {
  background-color: #ff9a76;
  height: 10px;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
}

.label-info {
  color: white;
}

.label-info-sub {
  color: #ffeadb;
}

.left-pane {
  color: inherit;
}
.mid-pane {
  color: inherit;
}
.right-pane {
  color: inherit;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.align-center {
  text-align: center;
}

.button-primary {
  background-color: #ff9a76;
  border: none;
  color: white;
  margin-left: 8px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration-line: unset;
}

.button-primary:hover {
  background-color: #ffdfd4;
  color: #ff9a76;
  border: 1px solid #ff9a76;
}

.button-secondary {
  background-color: transparent;
  border: 1px solid #ff9a76;
  color: #ff9a76;
  margin-left: 8px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration-line: unset;
}

.button-secondary:hover {
  background-color: gray;
  color: #dadada;
}
</style>
