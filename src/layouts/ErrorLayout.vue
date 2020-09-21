<template>
  <div class="error-layout">
    <div>
      <slot />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ErrorLayout",
};
</script>

<style scoped>
.error-layout {
  text-align: center;
}
</style>
